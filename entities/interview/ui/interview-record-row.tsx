import { cn } from "@/base/utils";
import { Badge, BarChart3, Link } from "lucide-react";
import type { InterviewRecord } from "../models/types";
import { Button } from "@/base/components/ui";
import { PATH } from "@/base/constants/path";

interface Props {
  record: InterviewRecord;
}

const InterviewRecordRow = ({ record }: Props) => {
  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
      <div className="flex items-center space-x-3">
        <div className="text-sm">
          <p className="font-medium text-gray800">{record.interviewDate}</p>
          <p className="text-gray600">
            {record.questionCount}문항 • {record.interviewTime}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Badge
          className={cn(
            "bg-red-100 text-red",
            record.averageScore >= 80 && "bg-green-100 text-green-800",
            record.averageScore >= 70 && "bg-yellow-100 text-yellow-800"
          )}
        >
          {record.averageScore}점
        </Badge>
        <Button variant="ghost" size="sm" asChild>
          <Link href={`${PATH.feedback}/${record.sessionId}`}>
            <BarChart3 className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export { InterviewRecordRow };
