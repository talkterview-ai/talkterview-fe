import { useOAuthLogin, useGuestLogin } from "@/entities/auth/apis/queries";
import type { LoginProvider } from "@/entities/auth/models/types";

const useLogin = () => {
  const oauthMutation = useOAuthLogin();
  const guestMutation = useGuestLogin();

  const handleOAuthLogin = (provider: LoginProvider) => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const authUrl = `${BASE_URL}oauth2/login/${provider}/callback`;
    window.location.href = authUrl;
  };

  return {
    handleOAuthLogin,
    oauthMutation,
    guestMutation,
  };
};

export { useLogin };
