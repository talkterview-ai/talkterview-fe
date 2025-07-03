"use client";

import { useUserProfile } from "@/entities/user/apis/queries";
<<<<<<< HEAD
import { Badge } from "@/base/components/ui";
=======
import { Badge } from "@/shared/components/ui";
>>>>>>> e887cc2 (feat: 대시보드 페이지 작업 및 프로젝트 구조 변경 (#2))

const UserFiledBadge = () => {
  const { data: user } = useUserProfile();

  if (!user.profile.field) return null;

  return (
    <Badge variant="outline" className="text-primary">
      {user.profile.field}
    </Badge>
  );
};

export { UserFiledBadge };
