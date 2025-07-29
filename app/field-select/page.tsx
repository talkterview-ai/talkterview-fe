import { PrefetchBoundary } from "@/base/contexts/queries";
import { fieldsQueryOptions } from "@/entities/fields/apis/queries";
import { FieldsPageView } from "@/modules/fields/ui";

export default function FieldsSelectPage() {
  return (
    <PrefetchBoundary prefetchOptions={[fieldsQueryOptions]}>
      <FieldsPageView />
    </PrefetchBoundary>
  );
}
