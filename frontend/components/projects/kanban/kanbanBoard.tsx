"use client";

import KanbanColumn from "@/components/projects/kanban/kanbanColumn";
import { Task } from "@/components/projects/data/types";

const columns = [
  "Backlog",
  "Todo",
  "In Progress",
  "Review",
  "Done",
] as const;

interface KanbanBoardProps {
  tasks: Task[];
}
export default function KanbanBoard({
  tasks,
}: KanbanBoardProps) {
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