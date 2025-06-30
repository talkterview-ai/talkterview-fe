import type { HttpStatusCode, ApiResponse, TokenResponse } from "./types";
import { getToken, setToken, removeToken } from "../utils/cookie";
import { redirect } from "next/navigation";

interface RequestConfig<T = unknown> {
  headers?: Record<string, string>;
  params?: Record<string, string>;
  data?: T;
}

interface HttpResponse<T = unknown> {
  data: ApiResponse<T>;
  status: HttpStatusCode;
  headers: Headers;
}

const IS_SERVER = typeof window === "undefined";

export class HttpCore {
  private readonly baseUrl: string;
  private readonly defaultHeaders: Record<string, string>;

  constructor(baseUrl: string, defaultHeaders: Record<string, string> = {}) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = defaultHeaders;
  }

  private redirectToLogin(): void {
    if (!IS_SERVER) {
      window.location.href = "/login";
    } else {
      redirect("/login");
    }
  }

  private async handleTokenResponse<T>(data: ApiResponse<T>): Promise<void> {
    if (
      data.data &&
      typeof data.data === "object" &&
      "tokenResponse" in data.data &&
      data.data.tokenResponse
    ) {
      const tokenData = data.data.tokenResponse as TokenResponse;
      await setToken(tokenData.accessToken);
    }
  }

  private async buildHeaders(
    config: RequestConfig
  ): Promise<Record<string, string>> {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...this.defaultHeaders,
      ...config.headers,
    };

    const token = await getToken();

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    return headers;
  }

  private async request<T = unknown, D = unknown>(
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    url: string,
    config: RequestConfig<D> = {}
  ): Promise<HttpResponse<T>> {
    const fullUrl = new URL(url, this.baseUrl);

    if (config.params) {
      Object.entries(config.params).forEach(([key, value]) => {
        fullUrl.searchParams.set(key, value);
      });
    }

    try {
      const response = await fetch(fullUrl.toString(), {
        method,
        headers: await this.buildHeaders(config),
        body: config.data ? JSON.stringify(config.data) : undefined,
      });

      const data: ApiResponse<T> = await response.json();

      // HTTP 레벨 에러 처리
      if (!response.ok) {
        // 401 또는 403 에러 처리 (토큰 만료)
        if (response.status === 401 || response.status === 403) {
          await removeToken();
          this.redirectToLogin();
        }
        throw new Error(
          `HTTP Error: ${response.status}, ${response.statusText}`
        );
      }

      // API 레벨 에러 처리
      if (!data.result) {
        if (data.authError) {
          await removeToken();
          this.redirectToLogin();
        }
        throw new Error(`API Error: ${data.code}, ${data.message}`);
      }

      await this.handleTokenResponse(data);

      return {
        data,
        status: response.status as HttpStatusCode,
        headers: response.headers,
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Unknown error occurred");
    }
  }

  // GET 메서드
  get<T = unknown>(
    url: string,
    config?: RequestConfig
  ): Promise<HttpResponse<T>> {
    return this.request<T>("GET", url, config);
  }

  // POST 메서드
  post<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: RequestConfig<D>
  ): Promise<HttpResponse<T>> {
    return this.request<T, D>("POST", url, { ...config, data });
  }

  // PATCH 메서드
  patch<T = unknown, D = unknown>(
    url: string,
    data?: D,
    config?: RequestConfig<D>
  ): Promise<HttpResponse<T>> {
    return this.request<T, D>("PATCH", url, { ...config, data });
  }

  // DELETE 메서드
  delete<T = unknown>(
    url: string,
    config?: RequestConfig
  ): Promise<HttpResponse<T>> {
    return this.request<T>("DELETE", url, config);
  }
}
