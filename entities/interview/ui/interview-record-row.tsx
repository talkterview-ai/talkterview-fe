import Link from "next/link";
import { Calendar, CheckCircle, Clock, MessageSquare } from "lucide-react";
import type { InterviewRecord } from "../models/types";
import { Button } from "@/base/components/ui";
import { Badge } from "@/base/components/ui";
import { PATH } from "@/base/constants/path";

interface Props {
  interview: InterviewRecord;
}

const getScoreBadgeColor = (score: number) => {
  if (score >= 90) return "bg-green-100 text-green-800";
  if (score >= 80) return "bg-blue-100 text-blue-800";
  if (score >= 70) return "bg-yellow-100 text-yellow-800";
  return "bg-red-100 text-red-800";
};

const InterviewRecordRow = ({ interview }: Props) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors border border-slate-100">
      <div className="flex items-center space-x-4">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl">
          <CheckCircle className="w-4 h-4 text-green-600" />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center">
            <h4 className="font-medium text-gray-900">{interview.role}</h4>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {interview.interviewDate}
            </span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {interview.interviewTime}분
            </span>
            <span>
              {interview.interviewType === "AI 기출면접"
                ? "AI 모의면접"
                : "PDF 기반"}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">
              {interview.questionCount}문항
            </span>
          </div>
        </div>
      </div>
      <div className="text-right flex flex-col gap-2">
        <Badge
          className={getScoreBadgeColor(interview.averageScore)}
          variant="secondary"
        >
          {interview.averageScore}점
        </Badge>

        <div>
          <Button variant="ghost" size="sm" asChild>
            <Link href={PATH.feedback(interview.sessionId)}>
              <MessageSquare className="w-3 h-3 mr-1" />
              피드백
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export { InterviewRecordRow };
