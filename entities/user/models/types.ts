import type { LoginProvider } from "@/entities/auth/models/types";

export type User = {
  name: string;
  profileImg: string;
};

export type LevelName = "EXPLORER" | "JUNIOR" | "SENIOR" | "LEAD";

type Level = {
  value: string;
  name: LevelName;
};

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
