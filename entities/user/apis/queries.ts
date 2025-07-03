import { useSuspenseQuery } from "@tanstack/react-query";
import { getUserProfile } from "./apis";

export const userKeys = {
  all: ["user"] as const,
  profile: () => [...userKeys.all, "profile"] as const,
};

export const userQueryOptions = {
  queryKey: userKeys.profile(),
  queryFn: getUserProfile,
  staleTime: Infinity,
};

export const useUserProfile = () => {
  return useSuspenseQuery(userQueryOptions);
};
