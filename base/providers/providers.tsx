"use client";

// import { NuqsAdapter } from 'nuqs/adapters/next/app';

// TODO: change search params to using nuqs
import { type ReactNode } from "react";

import { QueryProvider } from "./query-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { OverlayProvider } from "overlay-kit";
import { Toaster } from "../components/ui";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <OverlayProvider>
      <QueryProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        {children}
        <Toaster richColors={true} />
      </QueryProvider>
    </OverlayProvider>
  );
};

export { Providers };
