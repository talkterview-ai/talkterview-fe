import { useMutation, type MutationOptions } from "@tanstack/react-query";
import { oauthLogin, guestLogin } from "./apis";
import type { OAuthLoginRequest, LoginResponse } from "../models/types";

/**
 * OAuth 로그인
 */
export const oauthLoginMutationOptions: MutationOptions<
  LoginResponse,
  Error,
  OAuthLoginRequest
> = {
  mutationFn: oauthLogin,
  onError: (error) => {
    console.error("OAuth login error:", error);
  },
};

export const useOAuthLogin = () => {
  return useMutation(oauthLoginMutationOptions);
};

/**
 * 게스트 로그인
 */
export const guestLoginMutationOptions: MutationOptions<
  LoginResponse,
  Error,
  void
> = {
  mutationFn: guestLogin,
  onError: (error) => {
    console.error("Guest login error:", error);
  },
};

export const useGuestLogin = () => {
  return useMutation(guestLoginMutationOptions);
};
