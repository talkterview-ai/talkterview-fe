"use client";

import { cn } from "@/base/utils";
import { useInterviewStats } from "@/entities/dashboard/apis/queries";
import { InterviewStats } from "@/entities/dashboard/models/types";

import { Card, CardContent } from "@/base/components/ui";
import {
  type LucideIcon,
  Calendar,
  MessageSquare,
  Target,
  Trophy,
} from "lucide-react";

type StatCardItemProps = {
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  label: string;
  value: string;
  description: string;
};

interface StatCardData extends Omit<StatCardItemProps, "value"> {
  getValue: (stats: InterviewStats) => string;
}

const FALLBACK_VALUE = "일정 추가하기";

const StatCardItem = ({
  icon: Icon,
  iconColor,
  iconBgColor,
  label,
  description,
  value,
}: StatCardItemProps) => (
  <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50 py-0 justify-center">
    <CardContent className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray600">{label}</p>
          <p className="text-xl font-bold text-gray800">{value}</p>
          <p className="text-xs text-gray500">{description}</p>
        </div>

        <div
          className={cn(
            "w-12 h-12 bg-gradient-to-r rounded-xl flex items-center justify-center",
            iconBgColor
          )}
        >
          {<Icon className={cn("w-6 h-6", iconColor)} />}
        </div>
      </div>
    </CardContent>
  </Card>
);

const StatsCardSection = () => {
  const { data: stats } = useInterviewStats();

  const statCardData: StatCardData[] = [
    {
      icon: MessageSquare,
      iconColor: "text-blue-600",
      iconBgColor: "from-blue-100 to-blue-200",
      label: "총 면접 횟수",
      getValue: (stats) => stats.totalInterviewCnt.toString(),
      description: "누적 면접 완료",
    },
    {
      icon: Target,
      iconColor: "text-green-600",
      iconBgColor: "from-green-100 to-green-200",
      label: "평균 점수",
      getValue: (stats) => `${stats.averageScore}점`,
      description: "전체 평균",
    },
    {
      icon: Trophy,
      iconColor: "text-yellow-600",
      iconBgColor: "from-yellow-100 to-yellow-200",
      label: "최고 점수",
      getValue: (stats) => stats.topScoreDetail.toString(),
      description: "개인 최고 기록",
    },
    {
      icon: Calendar,
      iconColor: "text-pruple-600",
      iconBgColor: "from-purple-100 to-purple-200",
      label: "다음 일정",
      getValue: (stats) => stats.nextInterview || FALLBACK_VALUE,
      description: "예정된 일정",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {statCardData.map((item, index) => (
        <StatCardItem key={index} value={item.getValue(stats)} {...item} />
      ))}
    </section>
  );
};

export { StatsCardSection };
