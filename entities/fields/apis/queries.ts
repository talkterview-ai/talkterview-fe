import { getFieldCategories } from "./apis";
import { useSuspenseQuery } from "@tanstack/react-query";

/**
 * @description 직종 & 분야
 */
export const fieldsKeys = {
  all: ["fields"] as const,
  list: () => [...fieldsKeys.all, "list"] as const,
};

export const fieldsQueryOptions = {
  queryKey: fieldsKeys.list(),
  queryFn: getFieldCategories,
  staleTime: Infinity,
};

export const useFieldsCategories = () => {
  return useSuspenseQuery(fieldsQueryOptions);
};
