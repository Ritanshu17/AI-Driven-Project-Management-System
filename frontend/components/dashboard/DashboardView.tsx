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

      </div>

    </main>
  );
}

// import DashboardHeader from "./DashboardHeader";
// import StatCard from "./StatCard";

// export default function DashboardView() {
//   return (
//     <main className="space-y-8">

//       <DashboardHeader />

//       <div className="grid gap-6 lg:grid-cols-4">

//         <StatCard
//           title="Projects"
//           value={12}
//           description="+2 Active"
//           icon={FolderKanban}
//         />

//         <StatCard
//           title="Tasks"
//           value={148}
//           description="32 Completed"
//           icon={CheckSquare}
//         />

//         <StatCard
//           title="Members"
//           value={8}
//           description="All Online"
//           icon={Users}
//         />

//         <StatCard
//           title="Sprint"
//           value="92%"
//           description="Completion"
//           icon={Timer}
//         />

//       </div>

//     </main>
//   );
// }