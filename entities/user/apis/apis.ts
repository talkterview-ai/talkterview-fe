import { fetchClient } from "@/base/fetch";
import type { UserProfileResponse } from "@/entities/user/models/types";

export const getUserProfile = async (): Promise<UserProfileResponse> => {
  const response = await fetchClient.get<UserProfileResponse>(
    "user-profiles/me"
  );

  return response.data.data;
};
