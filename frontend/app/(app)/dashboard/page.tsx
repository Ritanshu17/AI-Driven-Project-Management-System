import DashboardView from "@/components/dashboard";

export default function DashboardPage() {
  return <DashboardView />;
}


//2nd

// import {
//   FolderKanban,
//   CheckSquare,
//   Users,
//   Timer,
// } from "lucide-react";

// import StatCard from "@/components/dashboard/StatCard";
// import { DashboardHeader } from "@/components/dashboard";

// export default function DashboardPage() {
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

//1st
// export default function DashboardPage() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold">
//         Dashboard
//       </h1>

//       <p className="mt-2 text-muted">
//         Welcome to Engineering Workspace.
//       </p>
//     </div>
//   );
// }