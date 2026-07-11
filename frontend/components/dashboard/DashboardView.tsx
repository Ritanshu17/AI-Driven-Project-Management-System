"use client";

import {
  FolderKanban,
  CheckSquare,
  Users,
  Timer,
} from "lucide-react";

import DashboardHeader from "./DashboardHeader";
import StatsGrid from "./StatsGrid";
import RecentActivity from "./RecentActivity";

export default function DashboardView() {
  return (
    <main className="space-y-8">

      <DashboardHeader />

      <StatsGrid />
        <div className="grid gap-6 lg:grid-cols-2">

        <RecentActivity />
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