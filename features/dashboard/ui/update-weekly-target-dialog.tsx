"use client";

import { useState, useCallback } from "react";
import {
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Button,
  Label,
  Input,
} from "@/base/components/ui";
import type { WeeklyTarget } from "@/entities/user/models/types";
import { useWeeklyTargetMutation } from "../apis/queries";
import { Calendar, TrendingUp } from "lucide-react";

interface DialogProps {
  open: boolean;
  close: (param: boolean) => void;
  initialData: WeeklyTarget;
}

const UpdateWeeklyTargetDialog = ({
  open,
  close,
  initialData,
}: DialogProps) => {
  const [goals, setGoals] = useState(initialData);
  const { mutate: updateGoals, isPending } = useWeeklyTargetMutation();

  const ref = useCallback((node: any) => {
    node?.focus();
  }, []);

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>주간 학습 목표 설정</DialogTitle>
          <DialogDescription>
            원하는 목표를 설정하고 관리해보세요
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex flex-col gap-4 mt-4"
          onSubmit={(e) => {
            e.preventDefault();

            updateGoals({
              userWeeklyCountTarget: goals.weeklyCountTarget,
              userWeeklyScoreTarget: goals.weeklyScoreTarget,
            });
            close(true);
          }}
        >
          <div className="flex flex-col gap-1">
            <div className="space-y-2">
              <Label htmlFor="weekly-goal-input">
                <Calendar className="w-5 h-5 text-purple-600" />
                주간 목표 횟수 설정
              </Label>
              <Input
                id="weekly-goal-input"
                type="number"
                placeholder="1~10 사이의 값을 입력하세요"
                ref={ref}
                value={goals.weeklyCountTarget || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setGoals((prev) => ({
                    ...prev,
                    weeklyCountTarget: value === "" ? 0 : Number(value),
                  }));
                }}
                min={1}
                max={10}
                maxLength={2}
                disabled={isPending}
              />
            </div>
            <p className="text-xs text-gray-400">
              1부터 10까지의 값을 입력할 수 있어요
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <div className="space-y-2">
              <Label htmlFor="score-goal-input">
                <TrendingUp className="w-5 h-5 text-green-600" />
                평균 점수 목표 설정
              </Label>
              <Input
                id="score-goal-input"
                type="number"
                placeholder="60~100 사이의 값을 입력하세요"
                value={goals.weeklyScoreTarget || ""}
                onChange={(e) => {
                  const value = e.target.value;
                  setGoals((prev) => ({
                    ...prev,
                    weeklyScoreTarget: value === "" ? 0 : Number(value),
                  }));
                }}
                min={60}
                max={100}
                maxLength={3}
                disabled={isPending}
              />
            </div>
            <p className="text-xs text-gray-400">
              60부터 100까지의 값을 입력할 수 있어요
            </p>
          </div>

          <div className="flex items-center gap-2 justify-end">
            <Button
              variant="outline"
              onClick={() => {
                close(false);
              }}
            >
              취소
            </Button>
            <Button type="submit" isLoading={isPending}>
              저장
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export { UpdateWeeklyTargetDialog };
