import Link from "next/link";

import { ChevronRight } from "lucide-react";
import { Button } from "@/base/components/ui";
import { Header } from "@/base/components/layout";
import { PATH } from "@/base/constants/path";

interface FieldsHeaderProps {
  selectedRole: string | null;
  selectedField: string | null;
}

const FieldsHeader = ({ selectedRole, selectedField }: FieldsHeaderProps) => {
  return (
    <Header
      leftSlot={
        <div>
          <h1 className="text-xl font-bold text-gray-900">면접 분야 선택</h1>
          <p className="text-sm text-gray-600">
            면접을 진행할 분야를 선택해주세요
          </p>
        </div>
      }
      rightSlot={
        selectedField && (
          <Button className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
            <Link
              href={PATH.AIinterview(selectedRole as string, selectedField)}
            >
              면접 시작하기
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        )
      }
    />
  );
};

export { FieldsHeader };
