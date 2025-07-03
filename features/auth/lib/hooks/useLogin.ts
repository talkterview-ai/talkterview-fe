"use client";

import { useTransition } from "react";
import type { LoginProvider } from "@/entities/auth/models/types";
import { guestLogin } from "@/entities/auth/apis";
import { redirect } from "next/navigation";
import { PATH } from "@/shared/constants/path";

const useLogin = () => {
  const [isPending, startTransition] = useTransition();

  const handleOAuthLogin = (provider: LoginProvider) => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const authUrl = `${BASE_URL}oauth2/login/${provider}/callback`;
    window.location.href = authUrl;
  };

  const handleGuestLogin = async () => {
    startTransition(async () => {
      await guestLogin();
      redirect(PATH.dashboard);
    });
  };

  return {
    handleOAuthLogin,
    handleGuestLogin,
    isPending,
  };
};

export { useLogin };
