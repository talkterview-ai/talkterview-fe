export const PATH = {
  root: "/",
  login: "/login",
  dashboard: "/dashboard",
  AIinterview: (role: string, field: string) =>
    `/interview?type=normal&role=${role}&field=${field}`,
  PDFinterview: "/interview?type=pdf",
  pdf: "/pdf",
  fieldSelect: "/field-select",
  feedback: (id: string) => `/interview/${id}`,
  records: "/records",
  schedule: "/shcedule",
  community: "/community",
  profile: "/profile",
} as const;
