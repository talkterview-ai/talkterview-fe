import dayjs from "dayjs";
import { type NextPage } from "next";

import { PrefetchBoundary } from "@/base/contexts/queries";
import { userQueryOptions } from "@/entities/user/apis/queries";
import {
  statsQueryOptions,
  tipsQueryOptions,
  weeklyTargetQueryOptions,
} from "@/entities/dashboard/apis/queries";
import { recentRecordsQueryOptions } from "@/entities/interview/apis/queries";
import {
  DashboardHeader,
  RecentRecordsSection,
  StartInterviewSection,
  WelcomeSection,
  StatsSection,
  TipsSection,
  QuickActionsSection,
  WeeklyProgressSection,
} from "@/modules/dashboard/ui";

export default function MainDashboard(): NextPage {
  return (
    <PrefetchBoundary
      prefetchOptions={[
        userQueryOptions,
        tipsQueryOptions(dayjs().format("YYYYMMDD")),
        statsQueryOptions,
        recentRecordsQueryOptions,
        weeklyTargetQueryOptions,
      ]}
    >
      <DashboardHeader />

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col gap-6">
          <WelcomeSection />
          <StatsSection />

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="grid lg:col-span-2 gap-6">
              <StartInterviewSection />
              <RecentRecordsSection />
            </div>

            <div className="space-y-6">
              <WeeklyProgressSection />
              <QuickActionsSection />
              <TipsSection />
            </div>
          </div>
        </div>
      </main>
    </PrefetchBoundary>
  );
}
