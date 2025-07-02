import {
  type PrefetchOptions,
  type PrefetchInfiniteOptions,
  isPrefetchOptions,
  isPrefetchInfiniteOptions,
} from "./types";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/shared/lib/query";

type Props = {
  prefetchOptions:
    | PrefetchOptions[]
    | PrefetchInfiniteOptions[]
    | PrefetchOptions
    | PrefetchInfiniteOptions;
  children: React.ReactNode;
};

export async function PrefetchBoundary({ prefetchOptions, children }: Props) {
  const queryClient = getQueryClient();

  if (Array.isArray(prefetchOptions)) {
    await Promise.all(
      prefetchOptions.map((option) => {
        if (isPrefetchOptions(option)) {
          return queryClient.prefetchQuery(option);
        }
        if (isPrefetchInfiniteOptions(option)) {
          return queryClient.prefetchInfiniteQuery(option);
        }
      })
    );
  } else {
    if (isPrefetchOptions(prefetchOptions)) {
      await queryClient.prefetchQuery(prefetchOptions);
    }
    if (isPrefetchInfiniteOptions(prefetchOptions)) {
      await queryClient.prefetchInfiniteQuery(prefetchOptions);
    }
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
}
