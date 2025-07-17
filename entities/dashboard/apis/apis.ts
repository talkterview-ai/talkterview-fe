import { fetchClient } from "@/base/fetch";
import type { InterviewStats, TodayInterviewTips } from "../models/types";

export const getTodayInterviewTips = async (
  date: string
): Promise<TodayInterviewTips> => {
  const response = await fetchClient.get<TodayInterviewTips>(
    "dashboard/interview/tips",
    {
      params: {
        date,
      },
    }
  );

  return response.data.data;
};

export const getInterviewStats = async (): Promise<InterviewStats> => {
  const response = await fetchClient.get<InterviewStats>("dashboard/records");
  return response.data.data;
};
