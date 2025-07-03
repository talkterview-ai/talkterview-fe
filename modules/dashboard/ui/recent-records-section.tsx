"use client";

import Link from "next/link";
import { useRecentInterviewRecords } from "@/entities/interview/apis/queries";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
} from "@/shared/components/ui";
import { InterviewRecordRow } from "@/entities/interview/ui";
import { ChevronRight } from "lucide-react";
import { PATH } from "@/shared/constants/path";
import { cn } from "@/shared/utils";

const RecentRecordsSection = () => {
  const { data: records } = useRecentInterviewRecords();

  const hasRecords = records.length > 0;

  return (
    <Card className={cn("bg-white border-slate-200", !hasRecords && "gap-0")}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-gray800">최근 면접 기록</CardTitle>
          {hasRecords && (
            <Button variant="ghost" size="sm" asChild>
              <Link href={PATH.records}>
                전체보기 <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {hasRecords ? (
            records.map((record) => (
              <InterviewRecordRow key={record.sessionId} record={record} />
            ))
          ) : (
            <EmptyRecordsSection />
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const EmptyRecordsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-gray600">아직 진행한 모의 면접이 없어요</p>
    </div>
  );
};

export { RecentRecordsSection };
