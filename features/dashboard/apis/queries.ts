import { useMutation, type MutationOptions } from "@tanstack/react-query";
import type { WeeklyTarget } from "@/entities/user/models/types";
import type { UpdateWeeklyTargetRequest } from "../models/types";
import { updateWeeklyTarget } from "./apis";
import { weeklyTargetKeys } from "@/entities/dashboard/apis/queries";
import { getQueryClient } from "@/base/lib/query";
import { toast } from "sonner";

/**
 * @description 주간 학습 목표 설정
 */
export const updateWeeklyTargetMutationOptions: MutationOptions<
  WeeklyTarget,
  Error,
  UpdateWeeklyTargetRequest
> = {
  mutationFn: updateWeeklyTarget,
  onSuccess: async () => {
    const queryClient = getQueryClient();
    await queryClient.invalidateQueries({
      queryKey: weeklyTargetKeys.weekly(),
    });
    toast.success("설정 완료", {
      description: "학습 목표가 설정되었어요",
    });
  },
  onError: (error) => {
    console.error("Update weekly target error:", error);
    toast.error("에러 발생", {
      description: `학습 목표가 설정 중 에러가 발생했어요, ${JSON.stringify(
        error,
        null,
        2
      )}`,
    });
  },
};

export const useWeeklyTargetMutation = () => {
  return useMutation(updateWeeklyTargetMutationOptions);
};
