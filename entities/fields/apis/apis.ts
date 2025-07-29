import { fetchClient } from "@/base/fetch";
import type { Role } from "../models/types";

/**
 * @description 직종 & 분야 리스트 api
 */
export const getFieldCategories = async (): Promise<Role[]> => {
  const response = await fetchClient.get<Role[]>("roles-fields");

  return response.data.data;
};
