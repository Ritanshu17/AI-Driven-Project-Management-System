"use client";

import {
  FolderKanban,
  CheckSquare,
  Users,
  Timer,
} from "lucide-react";

import Card from "@/components/ui/Card"

interface StatCardProps {
  title: string;
  value: string | number;
  description: string;
  icon: "projects" | "tasks" | "members" | "sprint";
}

const iconMap = {
  projects: FolderKanban,
  tasks: CheckSquare,
  members: Users,
  sprint: Timer,
};

export default function StatCard({
  title,
  value,
  description,
  icon,
}: StatCardProps) {

  const Icon = iconMap[icon];

  return (
  <Card
    className="p-6"
  >
    {/* Top Section */}
    <div className="space-y-5">

      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent)]/10 transition-all duration-300 group-hover:bg-[var(--accent)]/20">

        <Icon
          size={26}
          className="text-[var(--accent)]"
        />

      </div>

      <div>

        <p className="text-sm font-medium uppercase tracking-wide text-[var(--muted)]">
          {title}
        </p>

        <h2 className="mt-2 text-5xl font-bold tracking-tight">
          {value}
        </h2>

      </div>

    </div>

    {/* Bottom Section */}

    <div className="flex items-center justify-between">

      <p className="text-sm text-[var(--muted)]">
        {description}
      </p>

      <span className="rounded-full bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--accent)]">
        Live
      </span>

    </div>

  </Card>
)
};