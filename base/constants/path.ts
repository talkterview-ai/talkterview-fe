export const PATH = {
  root: "/",
  login: "/login",
  dashboard: "/dashboard",
  interview: "/interview",
  pdf: "/pdf",
  fieldSelect: "/field-select",
  feedback: (id: string) => `${PATH.interview}/${id}`,
  records: "/records",
} as const;
