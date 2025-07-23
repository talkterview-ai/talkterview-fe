"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/base/utils/index";

interface ProgessProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  totalValue?: number;
}

function Progress({
  className,
  value,
  totalValue = 100,
  ...props
}: ProgessProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - ((value || 0) / totalValue) * 100}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
