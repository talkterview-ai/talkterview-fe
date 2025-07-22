"use client";

import * as React from "react";
import { cn } from "@/base/utils";
import { LoadingSpinner } from "./spinner";

export interface BackdropProps {
  open: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  showSpinner?: boolean;
  spinnerSize?: number;
}

export const Backdrop = ({
  open,
  onClick,
  children,
  className,
  showSpinner = false,
  spinnerSize = 40,
}: BackdropProps) => {
  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm",
        "flex items-center justify-center",
        "transition-opacity duration-200",
        className
      )}
      onClick={onClick}
      role="presentation"
      aria-hidden="true"
    >
      {children ||
        (showSpinner && (
          <LoadingSpinner size={spinnerSize} className="text-white" />
        ))}
    </div>
  );
};
