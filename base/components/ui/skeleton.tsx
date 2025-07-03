<<<<<<< HEAD:base/components/ui/skeleton.tsx
import { cn } from "@/base/utils/index"
=======
import { cn } from "@/shared/utils/index"
>>>>>>> e887cc2 (feat: 대시보드 페이지 작업 및 프로젝트 구조 변경 (#2)):shared/components/ui/skeleton.tsx

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  )
}

export { Skeleton }
