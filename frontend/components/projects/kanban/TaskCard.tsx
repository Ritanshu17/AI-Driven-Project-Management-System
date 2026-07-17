"use client";

import Badge from "@/components/ui/Badge";
import { Task } from "@/components/projects/data/types";

interface TaskCardProps {
  task: Task;
}

export default function TaskCard({ task }: TaskCardProps) {
  const priorityVariant =
    task.priority === "Critical"
      ? "danger"
      : task.priority === "High"
      ? "warning"
      : task.priority === "Medium"
      ? "info"
      : "default";

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm">
      <Badge variant={priorityVariant}>
        {task.priority}
      </Badge>

      <h3 className="mt-3 font-semibold">
        {task.title}
      </h3>

      <p className="mt-2 text-sm text-[var(--muted-foreground)]">
        {task.description}
      </p>

      <p className="mt-4 text-xs text-[var(--muted-foreground)]">
        {task.assignee}
      </p>
    </div>
  );
}