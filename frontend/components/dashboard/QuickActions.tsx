"use client";

import DashboardSection from "./DashboardSection";
import ActionCard from "./ActionCard";




import {
  FolderPlus,
  Users,
  ClipboardList,
  Settings,
} from "lucide-react";



const actions = [
  {
    title: "New Project",
    description: "Create and organize a new engineering project.",
    icon: FolderPlus,
  },
  {
    title: "Invite Team",
    description: "Add new members to your workspace.",
    icon: Users,
  },
  {
    title: "Create Task",
    description: "Assign and manage project tasks quickly.",
    icon: ClipboardList,
  },
  {
    title: "Workspace",
    description: "Manage workspace preferences and settings.",
    icon: Settings,
  },
];

export default function QuickActions() {
  return (
    <DashboardSection
      title="Quick Actions"
      subtitle="Frequently used workspace actions"
    >

      {/* map function */}
      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => (
          <ActionCard
            key={action.title}
            title={action.title}
            description={action.description}
            icon={action.icon}
          />
        ))}

      </div>
    </DashboardSection>
  );
}
