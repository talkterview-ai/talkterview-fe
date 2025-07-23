"use client";

import { useInterviewStats } from "@/entities/dashboard/apis/queries";
import { InterviewStats } from "@/entities/dashboard/models/types";
import { Calendar, MessageSquare, Target, Trophy } from "lucide-react";
import { type StatCardProps, StatCard } from "@/entities/dashboard/ui";

interface StatCardData extends Omit<StatCardProps, "value"> {
  getValue: (stats: InterviewStats) => string;
}

const FALLBACK_VALUE = "예정된 일정 없음";

const StatsSection = () => {
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
        <StatCard key={index} value={item.getValue(stats)} {...item} />
      ))}
    </section>
  );
};

export { StatsSection };
