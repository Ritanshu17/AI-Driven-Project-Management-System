"use client";

import {
  MoreVertical,
  Users,
  CalendarDays,
} from "lucide-react";

import {
  Badge,
  Card,
} from "@/components/ui";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info";

interface ProjectCardProps {
  name: string;
  description: string;
  progress: number;
  priority: string;
  status: string;
  members: number;
  deadline: string;
}

export default function ProjectCard({
  name,
  description,
  progress,
  priority,
  status,
  members,
  deadline,
}: ProjectCardProps) {

  const priorityVariant: BadgeVariant =
    priority === "Critical"
      ? "danger"
      : priority === "High"
      ? "warning"
      : "default";

  const statusVariant: BadgeVariant =
    status === "Completed"
      ? "success"
      : status === "In Progress"
      ? "info"
      : "default";

  return (
    <Card className="p-6">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div>

          <h3 className="text-lg font-semibold">
            {name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            {description}
          </p>

        </div>

        <button className="rounded-lg p-2 hover:bg-[var(--border)]">
          <MoreVertical size={18} />
        </button>

      </div>

      {/* Progress */}

      <div className="mt-6">

        <div className="mb-2 flex justify-between text-sm">

          <span>Progress</span>

          <span>{progress}%</span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]">

          <div
            className="h-full rounded-full bg-[var(--accent)] transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

      {/* Badges */}

      <div className="mt-6 flex gap-3">

        <Badge variant={priorityVariant}>
          {priority}
        </Badge>

        <Badge variant={statusVariant}>
          {status}
        </Badge>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between text-sm text-[var(--muted)]">

        <div className="flex items-center gap-2">

          <Users size={16} />

          {members} Members

        </div>

        <div className="flex items-center gap-2">

          <CalendarDays size={16} />

          {deadline}

        </div>

      </div>

    </Card>
  );
}