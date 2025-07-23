import type { LoginProvider } from "@/entities/auth/models/types";

export type OAuthLoginRequest = {
  provider: LoginProvider;
  code: string;
};
