"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Progress,
} from "@/base/components/ui";
import { useWeeklyTargets } from "@/entities/dashboard/apis/queries";
import { UpdateWeeklyTargetDialog } from "@/features/dashboard/ui";
import { Target, TrendingUp } from "lucide-react";
import { overlay } from "overlay-kit";

const WeeklyProgressSection = () => {
  const { data: goals } = useWeeklyTargets();

  const { currentCount, currentScore, weeklyCountTarget, weeklyScoreTarget } =
    goals;

  const handleUpdateDialog = () => {
    overlay.openAsync<boolean>(({ isOpen, close }) => (
      <UpdateWeeklyTargetDialog
        open={isOpen}
        close={() => close(false)}
        initialData={goals}
      />
    ));
  };

  return (
    <Card className="bg-white/70 backdrop-blur-sm border-slate-200/50">
      <CardHeader>
        <CardTitle className="text-gray-900 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
          학습 진행도
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">이번 주 목표</span>
              <span className="text-gray-900 font-medium">
                {currentCount}/{weeklyCountTarget}회
              </span>
            </div>
            <Progress
              value={currentCount}
              totalValue={weeklyCountTarget}
              className="h-3"
            />
          </div>
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-600">평균 점수 목표</span>
              <span className="text-gray-900 font-medium">
                {currentScore}/{weeklyScoreTarget}점
              </span>
            </div>
            <Progress
              value={currentScore}
              totalValue={weeklyScoreTarget}
              className="h-3"
            />
          </div>
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
              onClick={handleUpdateDialog}
            >
              <Target className="w-4 h-4 mr-2" />
              학습 목표 설정
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { WeeklyProgressSection };
