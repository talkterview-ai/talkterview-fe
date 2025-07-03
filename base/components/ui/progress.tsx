"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

<<<<<<< HEAD:base/components/ui/progress.tsx
import { cn } from "@/base/utils/index"
=======
import { cn } from "@/shared/utils/index"
>>>>>>> e887cc2 (feat: 대시보드 페이지 작업 및 프로젝트 구조 변경 (#2)):shared/components/ui/progress.tsx

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
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
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
