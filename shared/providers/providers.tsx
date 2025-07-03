"use client";

// import { NuqsAdapter } from 'nuqs/adapters/next/app';
// import { OverlayProvider } from 'overlay-kit';

// TODO: change search params to using nuqs
import { type ReactNode } from "react";

import { QueryProvider } from "./query-provider";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type ProvidersProps = {
  children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryProvider>
  );
};

export { Providers };
