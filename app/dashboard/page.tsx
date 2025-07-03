import dayjs from "dayjs";

import { PrefetchBoundary } from "@/shared/contexts/queries";
import { userQueryOptions } from "@/entities/user/apis/queries";
import {
  statsQueryOptions,
  tipsQueryOptions,
} from "@/entities/dashboard/apis/queries";
import { recentRecordsQueryOptions } from "@/entities/interview/apis/queries";

import { StatsCard, TipsCard, WelcomeSection } from "@/entities/dashboard/ui";
import { StartInterviewCard } from "@/features/dashboard/ui";
import { DashboardHeader, RecentRecordsSection } from "@/modules/dashboard/ui";

export default function MainDashboard() {
  return (
    <PrefetchBoundary
      prefetchOptions={[
        userQueryOptions,
        tipsQueryOptions(dayjs().format("YYYYMMDD")),
        statsQueryOptions,
        recentRecordsQueryOptions,
      ]}
    >
      <DashboardHeader />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <WelcomeSection />
          <TipsCard />
          <StatsCard />
          <StartInterviewCard />
          <RecentRecordsSection />
        </div>
      </main>
    </PrefetchBoundary>
  );
}
