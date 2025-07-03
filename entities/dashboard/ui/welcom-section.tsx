"use client";

import { useUserProfile } from "@/entities/user/apis/queries";

const WelcomeSection = () => {
  const { data: user } = useUserProfile();

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold text-gray800">
        안녕하세요, {user.profile.name}님! 👋
      </h2>
      <p className="text-gray600">
        오늘도 면접 실력 향상을 위해 함께 노력해봐요.
      </p>
    </div>
  );
};

export { WelcomeSection };
