"use client";

import { useInterviewStats } from "@/entities/dashboard/apis/queries";
import { InterviewStats } from "@/entities/dashboard/models/types";

import { Card, CardContent } from "@/base/components/ui";
import { Calendar, MessageSquare, Target, type LucideIcon } from "lucide-react";

type StatCardItemProps = {
  icon: LucideIcon;
  iconColor: string;
  label: string;
  value: string;
};

type StatCardData = {
  icon: LucideIcon;
  iconColor: string;
  label: string;
  getValue: (stats: InterviewStats) => string;
};

const FALLBACK_VALUE = "면접 일정을 추가해보세요";

const StatCardItem = ({
  icon: Icon,
  iconColor,
  label,
  value,
}: StatCardItemProps) => (
  <Card className="bg-white border-slate-200">
    <CardContent className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray600">{label}</p>
          <p className="text-xl font-bold text-gray800">{value}</p>
        </div>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
    </CardContent>
  </Card>
);

const StatsCard = () => {
  const { data: stats } = useInterviewStats();

  const statCardData: StatCardData[] = [
    {
      icon: MessageSquare,
      iconColor: "text-primary",
      label: "총 면접 횟수",
      getValue: (stats) => stats.totalInterviewCnt.toString(),
    },
    {
      icon: Target,
      iconColor: "text-green-600",
      label: "평균 점수",
      getValue: (stats) => `${stats.averageScore}점`,
    },
    {
      icon: Calendar,
      iconColor: "text-gray500",
      label: "다음 일정",
      getValue: (stats) => stats.nextInterview || FALLBACK_VALUE,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {statCardData.map((item, index) => (
        <StatCardItem
          key={index}
          icon={item.icon}
          iconColor={item.iconColor}
          label={item.label}
          value={item.getValue(stats)}
        />
      ))}
    </div>
  );
};

export { StatsCard };
