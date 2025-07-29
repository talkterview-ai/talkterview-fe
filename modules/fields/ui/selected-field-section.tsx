"use client";

import { CheckCircle } from "lucide-react";
import { Button, Card, CardContent } from "@/base/components/ui";

interface SelectedFieldSectionProps {
  selectedField: string;
  onClear: () => void;
}

const SelectedFieldSection = ({
  selectedField,
  onClear,
}: SelectedFieldSectionProps) => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium text-gray-900">선택된 분야</p>
              <p className="text-sm text-gray-600">{selectedField}</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="text-gray-500 hover:text-gray-700"
          >
            변경
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export { SelectedFieldSection };