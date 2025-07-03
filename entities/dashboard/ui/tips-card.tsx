"use client";

import dayjs from "dayjs";
import { useTodayInterviewTips } from "@/entities/dashboard/apis/queries";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui";

const TipsCard = () => {
  const { data: tips } = useTodayInterviewTips(dayjs().format("YYYYMMDD"));

  return (
    <Card className="bg-blue-50 border-blue-200 gap-2">
      <CardHeader>
        <CardTitle className="text-primary text-lg">💡 오늘의 팁</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-primary/80">{tips.tips}</p>
      </CardContent>
    </Card>
  );
};

export { TipsCard };
