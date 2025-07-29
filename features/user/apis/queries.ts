import { useMutation, type MutationOptions } from "@tanstack/react-query";
import { updatedRoleAndFiled } from "./apis";
import type { UpdateRoleRequest } from "../models/types";
import { getQueryClient } from "@/base/lib/query";
import { userKeys } from "@/entities/user/apis/queries";

/**
 * @description 직무 & 분야 설정
 */
const updatedRoleAndFiledMutationOptions: MutationOptions<
  void,
  Error,
  UpdateRoleRequest
> = {
  mutationFn: updatedRoleAndFiled,
  onSuccess: async () => {
    const queryClient = getQueryClient();
    await queryClient.invalidateQueries({
      queryKey: userKeys.profile(),
    });
  },
  onError: (error) => {
    console.error("Update role and field error: ", error);
  },
};

export const useUpdateUserRoleAndField = () => {
  return useMutation(updatedRoleAndFiledMutationOptions);
};
