import { fetchClient } from "@/shared/fetch";
import type {
  LoginResponse,
  OAuthLoginRequest,
} from "@/entities/auth/models/types";

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
