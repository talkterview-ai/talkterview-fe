"use client";

import dayjs from "dayjs";
import { useTodayInterviewTips } from "@/entities/dashboard/apis/queries";

import { Card, CardContent, CardHeader, CardTitle } from "@/base/components/ui";

const TipsSection = () => {
  const { data: tips } = useTodayInterviewTips(dayjs().format("YYYYMMDD"));

  return (
    <Card className="bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200/50">
      <CardHeader>
        <CardTitle className="text-orange-800 flex items-center text-lg">
          💡 오늘의 팁
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-orange-700 leading-relaxed">{tips.tips}</p>
      </CardContent>
    </Card>
  );
};

export { TipsSection };
