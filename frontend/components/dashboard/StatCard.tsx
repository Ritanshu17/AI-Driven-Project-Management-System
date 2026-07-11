"use client";

import {
  FolderKanban,
  CheckSquare,
  Users,
  Timer,
} from "lucide-react";

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
    <div
      className={
        "group rounded-2xl border border-[var(--border)] bg-[var(--surface)] " +
        "p-6 transition-all duration-300 hover:-translate-y-1 " +
        "hover:border-[var(--accent)] hover:shadow-lg"
      }
    >
      {/* Icon */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 transition-colors duration-300 group-hover:bg-[var(--accent)]/20">
        <Icon
          size={24}
          className="text-[var(--accent)]"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm font-medium text-[var(--muted)]">
        {title}
      </h3>

      {/* Value */}
      <p className="mt-2 text-4xl font-bold tracking-tight">
        {value}
      </p>

      {/* Description */}
      <p className="mt-3 text-sm text-[var(--muted)]">
        {description}
      </p>
    </div>
  );
}