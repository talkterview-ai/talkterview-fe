"use client";

import { FieldSearchInput } from "@/features/fields/ui";
import { FieldsHeader } from "./fields-header";
import { SelectedFieldSection } from "./selected-field-section";
import { NoResultsSection } from "./no-results-section";
import { FieldCategoryCard } from "@/features/fields/ui";
import { useFieldSelect } from "@/features/fields/lib/hooks";
import { useFieldsCategories } from "@/entities/fields/apis/queries";
import { useUserProfile } from "@/entities/user/apis/queries";

const FieldsPageView = () => {
  const { data: roles } = useFieldsCategories();
  const { data: user } = useUserProfile();

  const {
    searchTerm,
    debouncedSearchTerm,
    handleSearchChange,
    selectedRole,
    selectedField,
    handleClearSelectedField,
    filteredRoles,
    openCategories,
    handleToggleCategory,
    handleFieldSelect,
    handleClearSearch,
  } = useFieldSelect(roles, user.profile.field);

  return (
    <>
      <FieldsHeader selectedRole={selectedRole} selectedField={selectedField} />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <FieldSearchInput value={searchTerm} onChange={handleSearchChange} />

          {selectedField && (
            <SelectedFieldSection
              selectedField={selectedField}
              onClear={handleClearSelectedField}
            />
          )}

          <div className="space-y-4">
            {filteredRoles.length > 0 ? (
              filteredRoles.map((role) => (
                <FieldCategoryCard
                  key={role.roleId}
                  role={role}
                  isOpen={openCategories.includes(role.roleId)}
                  selectedField={selectedField}
                  onToggle={() => handleToggleCategory(role.roleId)}
                  onFieldSelect={handleFieldSelect}
                />
              ))
            ) : (
              <NoResultsSection
                searchTerm={debouncedSearchTerm}
                onClearSearch={handleClearSearch}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export { FieldsPageView };
