"use client";

import Badge from "@/components/ui/Badge";
import { Task } from "@/components/projects/data/types";
import { useDraggable } from "@dnd-kit/core";

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
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id: task.id,
  });
  const style = transform
  ? {
      transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    }
  : undefined;    

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 shadow-sm cursor-grab active:cursor-grabbing"
    >
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