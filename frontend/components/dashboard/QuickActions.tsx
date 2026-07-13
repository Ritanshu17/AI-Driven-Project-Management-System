"use client";

import {
  FolderPlus,
  SquarePlus,
  UserPlus,
  Settings,
} from "lucide-react";

import DashboardSection from "./DashboardSection";

const actions = [
  {
    title: "New Project",
    description: "Create a new engineering project",
    icon: FolderPlus,
  },
  {
    title: "New Task",
    description: "Add a task to your workspace",
    icon: SquarePlus,
  },
  {
    title: "Invite Member",
    description: "Invite teammates to collaborate",
    icon: UserPlus,
  },
  {
    title: "Workspace",
    description: "Manage workspace settings",
    icon: Settings,
  },
];

export default function QuickActions() {
  return (
    <DashboardSection
      title="Quick Actions"
      subtitle="Frequently used workspace actions"
    >
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button key={action.title}>
              ...
            </button>
          );
        })}
      </div>
    </DashboardSection>
    // <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">

    //   <h2 className="mb-6 text-xl font-semibold">
    //     Quick Actions
    //   </h2>

    //   <div className="grid grid-cols-2 gap-4">

    //     {actions.map((action) => {
    //       const Icon = action.icon;

    //       return (
    //         <button
    //           key={action.title}
    //           className="group rounded-xl border border-[var(--border)] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--background)]"
    //         >

    //           <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)]/10 transition group-hover:bg-[var(--accent)]/20">

    //             <Icon
    //               size={22}
    //               className="text-[var(--accent)]"
    //             />

    //           </div>

    //           <h3 className="font-semibold">
    //             {action.title}
    //           </h3>

    //           <p className="mt-2 text-sm text-[var(--muted)]">
    //             {action.description}
    //           </p>

    //         </button>
    //       );
    //     })}

    //   </div>

    // </section>
  );
}