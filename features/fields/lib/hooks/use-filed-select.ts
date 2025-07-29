"use client";

import { useState } from "react";
import type { Field, Role } from "@/entities/fields/models/types";
import { useDebounce } from "@/base/hooks";
import { useUpdateUserRoleAndField } from "@/features/user/apis/queries";

const useFieldSelect = (
  initialRoles: Role[] = [],
  initialField?: Field["fieldName"]
) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedField, setSelectedField] = useState<string | null>(
    initialField ? initialField : null
  );
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const debouncedSearchTerm = useDebounce(searchTerm);
  const { mutateAsync: updateUserField, isPending } =
    useUpdateUserRoleAndField();

  const filteredRoles = initialRoles
    .map((role) => ({
      ...role,
      fieldList: role.fieldList.filter((field) =>
        field.fieldName
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase())
      ),
    }))
    .filter((role) => role.fieldList.length > 0);

  const handleToggleCategory = (roleId: string) => {
    setOpenCategories((prev) =>
      prev.includes(roleId)
        ? prev.filter((id) => id !== roleId)
        : [...prev, roleId]
    );
  };

  const handleFieldSelect = async (roleName: string, fieldName: string) => {
    if (isPending) return;

    setSelectedRole(roleName);
    setSelectedField(fieldName);

    await updateUserField({
      role: roleName,
      field: fieldName,
    });
  };

  const handleClearSelectedField = () => {
    setSelectedRole(null);
    setSelectedField(null);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return {
    searchTerm,
    debouncedSearchTerm,
    selectedRole,
    selectedField,
    openCategories,
    filteredRoles,
    handleToggleCategory,
    handleFieldSelect,
    handleClearSelectedField,
    handleClearSearch,
    handleSearchChange,
  };
};

export { useFieldSelect };
