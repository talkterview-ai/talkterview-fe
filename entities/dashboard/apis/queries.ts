import { getTodayInterviewTips, getInterviewStats } from "./apis";
import { useSuspenseQuery } from "@tanstack/react-query";

/**
 * Todays Tips
 */
export const tipsKeys = {
  all: ["tips"] as const,
  today: (date: string) => [...tipsKeys.all, "today", date] as const,
};

export const tipsQueryOptions = (date: string) => ({
  queryKey: tipsKeys.today(date),
  queryFn: () => getTodayInterviewTips(date),
  staleTime: Infinity,
});

export const useTodayInterviewTips = (date: string) => {
  return useSuspenseQuery(tipsQueryOptions(date));
};

/**
 * Interview Stats
 */
export const statsKeys = {
  all: ["stats"] as const,
};

export const statsQueryOptions = {
  queryKey: statsKeys.all,
  queryFn: getInterviewStats,
  staleTime: Infinity,
};

export const useInterviewStats = () => {
  return useSuspenseQuery(statsQueryOptions);
};
