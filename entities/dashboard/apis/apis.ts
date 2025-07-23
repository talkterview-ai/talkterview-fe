import { fetchClient } from "@/base/fetch";
import type { InterviewStats, TodayInterviewTips } from "../models/types";
import type { WeeklyTarget } from "@/entities/user/models/types";

/**
 * @description 오늘의 팁 api
 */
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

/**
 * @description 면접 기록 조회 api
 */
export const getInterviewStats = async (): Promise<InterviewStats> => {
  const response = await fetchClient.get<InterviewStats>("dashboard/records");
  return response.data.data;
};

/**
 * @description 학습 진행도 api
 */
export const getLearningProgress = async (): Promise<WeeklyTarget> => {
  const response = await fetchClient.get<WeeklyTarget>(
    "dashboard/interview/weekly-target"
  );
  return response.data.data;
};
