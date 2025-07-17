"use client";

import { useUserProfile } from "@/entities/user/apis/queries";
import { Badge } from "@/base/components/ui";

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
