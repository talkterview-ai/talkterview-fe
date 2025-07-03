import type { TokenResponse } from "@/base/fetch/types";
import type { User } from "../../user/models/types";

export type LoginProvider = "GOOGLE" | "KAKAO" | "GUEST";

export type Level = "입문" | "초급" | "중급" | "고급";

export type Profile = User & {
  email: string;
  role: string;
  field: string;
  level: Level;
};

export type AccountStatus = "활성" | "휴먼";

export type Account = {
  provider: LoginProvider;
  status: AccountStatus;
  registeredAt: string;
};

export type UserProfileResponse = {
  profile: Profile;
  signupInfo: Account;
};
