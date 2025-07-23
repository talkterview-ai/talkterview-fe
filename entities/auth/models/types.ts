import type { TokenResponse } from "@/base/fetch/types";
import type { User } from "../../user/models/types";

export type LoginProvider = "GOOGLE" | "KAKAO" | "GUEST";

export type LoginResponse = {
  user: User;
  token?: TokenResponse;
};
