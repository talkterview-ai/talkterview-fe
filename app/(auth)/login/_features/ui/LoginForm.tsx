"use client";

import { useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { useLogin } from "../lib/hooks";
import { OAUTH_PROVIDERS } from "@/shared/constants/oauth";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui";
import { OAuthButton } from "@/app/(auth)/login/_entities/ui";
import { oauthLogin } from "@/app/(auth)/login/_entities/apis";
import type { LoginProvider } from "@/shared/models/auth/types";
import { PATH } from "@/shared/constants/path";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") ?? "";
  const provider = searchParams.get("provider") as LoginProvider;

  useEffect(() => {
    if (!code || !provider) return;

    const login = async () => {
      try {
        await oauthLogin({ provider, code });
        redirect(PATH.dashboard);
      } catch (error) {
        console.error("login error: ", error);
        throw error;
      }
    };

    login();
  }, [code, provider]);

  const {
    handleOAuthLogin,
    handleGuestLogin,
    isPending: isGuestLoading,
  } = useLogin();

  return (
    <Card className="bg-white border-slate-200 shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-gray800">시작하기</CardTitle>
        <CardDescription className="text-gray600">
          소셜 계정으로 간편하게 로그인하세요
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {/* OAuth */}
        {Object.values(OAUTH_PROVIDERS).map((provider) => (
          <OAuthButton
            key={provider}
            provider={provider}
            onClick={() => handleOAuthLogin(provider)}
            className={
              provider === OAUTH_PROVIDERS.GOOGLE
                ? "bg-white border-slate-300 hover:bg-slate-50"
                : "bg-yellow-400 hover:bg-yellow-500 border-none"
            }
          />
        ))}

        <div className="relative my-4">
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
          onClick={handleGuestLogin}
          disabled={isGuestLoading}
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
  );
};

export { LoginForm };
