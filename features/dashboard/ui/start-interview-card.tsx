"use client";

import Link from "next/link";
import { useUserProfile } from "@/entities/user/apis/queries";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Button,
} from "@/shared/components/ui";
import { Badge } from "@/shared/components/ui";
import { PATH } from "@/shared/constants/path";
import { MessageSquare } from "lucide-react";

const FALLBACK_LEVEL = "레벨 측정을 위해 최소 3번의 면접 진행이 필요해요";

const StartInterviewCard = () => {
  const { data: user } = useUserProfile();

  const href = user.profile.field ? PATH.interview : PATH.fieldSelect;

  return (
    <div className="lg:col-span-2">
      <Card className="bg-white border-slate-200">
        <CardHeader>
          <CardTitle className="text-gray800">새로운 면접 시작하기</CardTitle>
          <CardDescription>
            현재 레벨:{" "}
            <Badge className="ml-2 bg-blue-100 text-primary">
              {user.profile.level || FALLBACK_LEVEL}
            </Badge>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
              <h4 className="font-medium text-gray800 mb-2">면접 구성</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray600">기초 기술지식</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-gray600">실제 적용경험</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full" />
                  <span className="text-gray600">문제해결능력</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span className="text-gray600">최신 트렌드</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button className="flex-1 bg-primary text-white" asChild>
                <Link prefetch href={href}>
                  <MessageSquare className="w-4 h-4 mr-2" />
                  면접 시작하기
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export { StartInterviewCard };
