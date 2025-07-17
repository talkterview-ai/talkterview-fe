"use client";

import Image from "next/image";
import type { LoginProvider } from "@/entities/auth/models/types";
import { cn } from "@/base/utils";
import { Button } from "@/base/components/ui";

interface OAuthButtonProps {
  provider: LoginProvider;
  onClick: (provider: LoginProvider) => void;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const OAuthButton = ({
  provider,
  onClick,
  className,
  disabled,
  isLoading,
}: OAuthButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn("w-full h-12", className)}
      onClick={() => onClick(provider)}
      disabled={disabled}
      isLoading={isLoading}
    >
      <div className="flex items-center gap-3">
        <Image
          src={`/icons/oauth/${provider.toLowerCase()}.svg`}
          alt={`${provider} 로그인`}
          width={36}
          height={36}
        />
        <span className="text-gray700">{provider}로 계속하기</span>
      </div>
    </Button>
  );
};

export { OAuthButton };
