import { fetchClient } from "@/shared/fetch";
import type {
  LoginResponse,
  OAuthLoginRequest,
<<<<<<<< HEAD:entities/auth/apis/apis.ts
} from "@/entities/auth/models/types";
========
} from "@/shared/models/auth/types";
>>>>>>>> 70b7b79 (refactor: 구조 및 타입 수정):app/(auth)/login/_entities/apis/apis.ts

export const oauthLogin = async (
  payload: OAuthLoginRequest
): Promise<LoginResponse> => {
  const response = await fetchClient.post<LoginResponse, OAuthLoginRequest>(
    "oauth2/login",
    { ...payload }
  );

  return response.data.data;
};

export const guestLogin = async (): Promise<LoginResponse> => {
  const response = await fetchClient.post<LoginResponse>("guest/login");
  return response.data.data;
};
