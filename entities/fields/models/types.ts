export type Role = {
  roleId: string;
  roleName: string; // ex. 개발, 디자인, 의료 ...
  fieldCount: number;
  fieldList: Field[];
};

export type Field = {
  fieldId: string;
  fieldName: string; // ex. 프론트엔드, 디자이너, 간호사 ...
};
