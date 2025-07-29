import { fetchClient } from "@/base/fetch";
import type { UpdateRoleRequest } from "../models/types";

/**
 * @description 직무 & 분야 업데이트 api
 */

export const updatedRoleAndFiled = async (
  payload: UpdateRoleRequest
): Promise<void> => {
  const response = await fetchClient.patch<undefined, UpdateRoleRequest>(
    "user-profiles/role-field",
    { ...payload }
  );

  return response.data.data;
};
