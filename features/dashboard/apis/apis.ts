import { fetchClient } from "@/base/fetch";
import type { WeeklyTarget } from "@/entities/user/models/types";
import type { UpdateWeeklyTargetRequest } from "../models/types";

export const updateWeeklyTarget = async (
  payload: UpdateWeeklyTargetRequest
): Promise<WeeklyTarget> => {
  const response = await fetchClient.put<
    WeeklyTarget,
    UpdateWeeklyTargetRequest
  >("dashboard/interview/weekly-target", { ...payload });

  return response.data.data;
};
