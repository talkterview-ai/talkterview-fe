"use client";

import { Search } from "lucide-react";
import { Button, Card, CardContent } from "@/base/components/ui";

interface NoResultsSectionProps {
  searchTerm: string;
  onClearSearch: () => void;
}

const NoResultsSection = ({
  searchTerm,
  onClearSearch,
}: NoResultsSectionProps) => {
  return (
    <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Search className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          검색 결과가 없습니다
        </h3>
        <p className="text-gray-600 mb-4">
          '{searchTerm}'에 대한 검색 결과를 찾을 수 없습니다.
        </p>
        <Button
          variant="outline"
          onClick={onClearSearch}
          className="bg-white/50 hover:bg-white/80"
        >
          전체 분야 보기
        </Button>
      </CardContent>
    </Card>
  );
};

export { NoResultsSection };