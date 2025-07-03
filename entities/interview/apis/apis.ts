import { fetchClient } from "@/shared/fetch";
import type { InterviewRecord } from "../models/types";

export const getRecentInterviewRecords = async (): Promise<
  InterviewRecord[]
> => {
  const response = await fetchClient.get<InterviewRecord[] | []>(
    "dashboard/interview/records/recent"
  );
  return response.data.data || [];
};
