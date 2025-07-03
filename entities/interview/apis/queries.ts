import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecentInterviewRecords } from "./apis";

/**
 * @description 최근 3건에 대한 면접 기록 조회
 */
export const recentRecordsKeys = {
  all: ["recent-interview-records"] as const,
  lists: () => [...recentRecordsKeys.all, "list"] as const,
};

export const recentRecordsQueryOptions = {
  queryKey: recentRecordsKeys.lists(),
  queryFn: getRecentInterviewRecords,
  staleTime: Infinity,
};

export const useRecentInterviewRecords = () => {
  return useSuspenseQuery(recentRecordsQueryOptions);
};
