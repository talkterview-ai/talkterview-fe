import Image from "next/image";
import { MessageSquare, TrendingUp, Users } from "lucide-react";

const BrandingCard = () => {
  return (
    <div className="text-center lg:text-left">
      <div className="mb-8">
        <div className="flex gap-2">
          <Image
            src="/images/talkterview-main-logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-12 h-12"
          />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray800 mb-4">
            톡터뷰
          </h1>
        </div>
        <p className="text-xl text-gray600 mb-6">
          AI와 함께하는 스마트한 면접 준비
        </p>
        <p className="text-gray500">
          실제 면접과 같은 환경에서 연습하고, 개인화된 피드백으로 실력을
          향상시켜보세요.
        </p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray800">실시간 AI 면접</h3>
            <p className="text-sm text-gray600">
              레벨별 맞춤 질문과 즉시 피드백
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray800">성장 분석</h3>
            <p className="text-sm text-gray600">상세한 분석과 개선 방향 제시</p>
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-start space-x-3">
          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
            <Users className="w-5 h-5 text-purple-600" />
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray800">커뮤니티</h3>
            <p className="text-sm text-gray600">동료들과 함께하는 면접 준비</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingCard;
