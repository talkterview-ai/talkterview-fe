"use client";

import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);

    console.log(`${provider} 로그인 시작`);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <>
      <Card className="bg-white border-slate-200 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-gray800">시작하기</CardTitle>
          <CardDescription className="text-gray600">
            소셜 계정으로 간편하게 로그인하세요
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* 구글 */}
          <Button
            variant="outline"
            className="w-full h-12 border-slate-300 hover:bg-slate-50"
            onClick={() => handleSocialLogin("google")}
            disabled={isLoading}
          >
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-white rounded border flex items-center justify-center">
                <span className="text-xs font-bold text-primary">G</span>
              </div>
              <span className="text-gray700">Google로 계속하기</span>
            </div>
          </Button>

          {/* 카카오 */}
          <Button
            className="w-full h-12 bg-yellow-400 hover:bg-yellow-500 text-gray800"
            onClick={() => handleSocialLogin("kakao")}
            disabled={isLoading}
          >
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-slate-800 rounded flex items-center justify-center">
                <span className="text-xs font-bold text-yellow-400">K</span>
              </div>
              <span>카카오로 계속하기</span>
            </div>
          </Button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray500">또는</span>
            </div>
          </div>

          {/* 게스트 */}
          <Button
            variant="ghost"
            className="w-full h-12 border border-slate-200 hover:bg-slate-50"
            onClick={() => handleSocialLogin("guest")}
            disabled={isLoading}
          >
            <span className="text-gray600">게스트로 체험해보기</span>
          </Button>

          <div className="text-center pt-4">
            <p className="text-xs text-gray500">
              로그인 시 <span className="underline">이용약관</span> 및{" "}
              <span className="underline">개인정보처리방침</span>에 동의하게
              됩니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default LoginForm;
