"use client";

import { useTransition } from "react";
import type { LoginProvider } from "@/app/(auth)/login/_entities/model/types";
import { guestLogin } from "@/app/(auth)/login/_entities/api";

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
    });
  };

  return {
    handleOAuthLogin,
    handleGuestLogin,
    isPending,
  };
};

export { useLogin };
