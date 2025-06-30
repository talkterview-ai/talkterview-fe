import type { LoginProvider } from "@/app/(auth)/login/_entities/model/types";
import type { TokenResponse } from "@/shared/fetch/types";

export type User = {
  name: string;
  profileImg: string;
};

export type OAuthLoginRequest = {
  provider: LoginProvider;
  code: string;
};

export type LoginResponse = {
  user: User;
  token?: TokenResponse;
};
