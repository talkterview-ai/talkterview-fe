import type { LoginProvider } from "../../auth/models/types";

export type User = {
  name: string;
  profileImg: string;
};

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
