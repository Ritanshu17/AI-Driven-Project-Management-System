"use client";

import TaskCard from "./TaskCard";
import { Task } from "@/components/projects/data/types";

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
}

export default function KanbanColumn({
  title,
  tasks,
}: KanbanColumnProps) {
  return (
    <div className="min-w-[320px] rounded-xl bg-[var(--background-secondary)] p-4">
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