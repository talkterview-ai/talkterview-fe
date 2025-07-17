"use client";

import Link from "next/link";
import { useRecentInterviewRecords } from "@/entities/interview/apis/queries";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  CardDescription,
} from "@/base/components/ui";
import { InterviewRecordRow } from "@/entities/interview/ui";
import { ChevronRight, FileText } from "lucide-react";

const RecentRecordsSection = () => {
  const { data: records } = useRecentInterviewRecords();

  const hasRecords = records.length > 0;

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-gray-900 text-xl flex items-center">
            <FileText className="w-5 h-5 mr-2 text-green-600" />
            최근 면접 기록
          </CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/records">
              전체보기 <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
        <CardDescription>최근 완료한 면접 결과를 확인하세요</CardDescription>
      </CardHeader>

      <CardContent
        className={
          !hasRecords ? "min-h-32 justify-center items-center flex" : ""
        }
      >
        {hasRecords ? (
          <div className="flex flex-col gap-4">
            {records.map((interview) => (
              <InterviewRecordRow
                key={interview.sessionId}
                interview={interview}
              />
            ))}
          </div>
        ) : (
          <EmptyRecordsSection />
        )}
      </CardContent>
    </Card>
  );
};

const EmptyRecordsSection = () => {
  return (
    <p className="text-center text-sm text-gray600">
      아직 진행한 면접이 없어요
    </p>
  );
};

export { RecentRecordsSection };
