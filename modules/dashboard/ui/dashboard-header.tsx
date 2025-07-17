import Link from "next/link";
import Image from "next/image";

import { Calendar, MessageCircle, User } from "lucide-react";
import { Button, Skeleton } from "@/base/components/ui";
import { UserFiledBadge } from "@/entities/user/ui";

const DashboardHeader = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 px-4 py-3 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* TODO: change logo */}
          {/* <Image
            src="/images/talkterview-main-logo.png"
            alt="logo"
            width={100}
            height={100}
            className="w-12 h-12"
          /> */}
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray800">톡터뷰</h1>

          <UserFiledBadge />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/profile">
              <User className="w-4 h-4 mr-2" />
              프로필
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/schedule">
              <Calendar className="w-4 h-4 mr-2" />
              일정
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

const HeaderSkeleton = () => (
  <header className="bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-10">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src="/images/talkterview-main-logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-12 h-12"
        />
        <h1 className="text-xl font-bold text-gray800">톡터뷰</h1>
        <Skeleton className="w-16 h-6" />
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/profile">
            <User className="w-4 h-4 mr-2" />
            프로필
          </Link>
        </Button>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/schedule">
            <Calendar className="w-4 h-4 mr-2" />
            일정
          </Link>
        </Button>
      </div>
    </div>
  </header>
);

export { DashboardHeader, HeaderSkeleton };
