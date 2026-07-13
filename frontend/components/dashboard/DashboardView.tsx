"use client";

import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./StatsGrid";
import RecentActivity from "./RecentActivity";
import ProjectProgress from "./ProjectProgress";
import QuickActions from "./QuickActions";
import TeamMembers from "./TeamMembers";



export default function DashboardView() {
  return (
    <main className="min-h-screen bg-[var(--background)]">

      <div className="w-full max-w-[1700px] px-8 py-8">

        <DashboardHeader />

        <StatsGrid />

        <div className="grid gap-8 lg:grid-cols-2">
          <RecentActivity />
          <ProjectProgress />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <QuickActions />
          <TeamMembers />
        </div>

        <div className="flex gap-3 flex-wrap">


      </div>

      </div>

    </main>
  );
}
