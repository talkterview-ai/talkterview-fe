"use client";

import { useUserProfile } from "@/entities/user/apis/queries";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/base/components/ui";
import { Badge } from "@/base/components/ui";
import { Brain, FileText, MessageCircle, Sparkles } from "lucide-react";
import { InterviewCard } from "./interview-card";
import { PATH } from "@/base/constants/path";
import { FeaturesInfoCard } from "./features-info-card";

const FALLBACK_LEVEL = "레벨 측정을 위해 최소 3번의 면접 진행이 필요해요";

const StartInterviewSection = () => {
  const { data: user } = useUserProfile();

  return (
    <>
      <Card className="bg-gradient-to-br from-white to-blue-50/50 border-blue-200/50">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-900">
                  AI 면접 시작하기
                </CardTitle>
                <CardDescription className="text-gray-600">
                  맞춤형 AI 면접으로 실력을 향상시켜보세요
                </CardDescription>
              </div>
            </div>

            {user.profile.level ? (
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border-0 px-3 py-1">
                {user.profile.level}
              </Badge>
            ) : (
              <span className="text-sm text-gray500">{FALLBACK_LEVEL}</span>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InterviewCard
              title="기술 면접"
              description={`분야별 기술 질문으로\n전문성 향상 연습`}
              duration="20-35분"
              feature="맞춤형 질문 생성"
              icon={MessageCircle}
              featureIcon={Brain}
              href={PATH.fieldSelect}
              gradientFrom="from-blue-500"
              gradientTo="to-blue-600"
              variant="default"
            />

            <InterviewCard
              title="PDF 면접"
              description={`문서 기반 맞춤형\n심화 면접 연습`}
              duration="25-45분"
              feature="AI 문서 분석"
              icon={FileText}
              featureIcon={Sparkles}
              href={PATH.pdf}
              gradientFrom="from-purple-500"
              gradientTo="to-pink-500"
              variant="outline"
            />
          </div>

          <FeaturesInfoCard />
        </CardContent>
      </Card>
    </>
  );
};

export { StartInterviewSection };
