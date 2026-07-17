"use client";

import KanbanColumn from "@/components/projects/kanban/kanbanColumn";
import { tasks } from "@/components/projects/data/tasks";

const columns = [
  "Backlog",
  "Todo",
  "In Progress",
  "Review",
  "Done",
] as const;

export default function KanbanBoard() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {columns.map((column) => (
        <KanbanColumn
          key={column}
          title={column}
          tasks={tasks.filter((task) => task.status === column)}
        />
      ))}
    </div>
  );
}