"use client";

import { useEffect } from "react";
import { redirect, useSearchParams } from "next/navigation";
import { useLogin } from "../../lib/hooks";
import { OAUTH_PROVIDERS } from "@/base/constants/oauth";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/base/components/ui";
import { OAuthButton } from "./oauth-button";
import type { LoginProvider } from "@/entities/auth/models/types";
import { PATH } from "@/base/constants/path";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") ?? "";
  const provider = searchParams.get("provider") as LoginProvider;

  const { oauthMutation, guestMutation, handleOAuthLogin } = useLogin();

  useEffect(() => {
    if (!code || !provider) return;

    oauthMutation.mutateAsync({ provider, code }).then(() => {
      redirect(PATH.dashboard);
    });
  }, [code, provider]);

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
            isLoading={oauthMutation.isPending}
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
          onClick={() => guestMutation.mutate()}
          isLoading={guestMutation.isPending}
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
