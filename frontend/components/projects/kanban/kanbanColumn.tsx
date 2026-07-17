"use client";

import TaskCard from "./TaskCard";
import { Task } from "@/components/projects/data/types";
import { useDroppable } from "@dnd-kit/core";

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
}

export default function KanbanColumn({
  title,
  tasks,
}: KanbanColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
  id: title,
});
  return (
    <div
      ref={setNodeRef}
      className={`min-w-[320px] rounded-xl bg-[var(--surface)] p-4 transition-colors ${isOver ? "ring-2 ring-[var(--accent)]" : ""} `}
    >
      <h2 className="mb-4 font-semibold">
        {title} ({tasks.length})
      </h2>

      <div className="space-y-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}