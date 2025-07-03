import type { TokenResponse } from "@/shared/fetch/types";
import type { User } from "../user/types";

export type LoginProvider = "GOOGLE" | "KAKAO" | "GUEST";

export type OAuthLoginRequest = {
  provider: LoginProvider;
  code: string;
};

export type LoginResponse = {
  user: User;
  token?: TokenResponse;
};
