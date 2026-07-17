"use client";

import KanbanColumn from "@/components/projects/kanban/kanbanColumn";
import { Task } from "@/components/projects/data/types";
import {
  DndContext,
  DragEndEvent,
} from "@dnd-kit/core";

const columns = [
  "Backlog",
  "Todo",
  "In Progress",
  "Review",
  "Done",
] as const;

interface KanbanBoardProps {
  tasks: Task[];
  onDragEnd: (event: DragEndEvent) => void;
}
export default function KanbanBoard({
  tasks,
  onDragEnd,
}: KanbanBoardProps) {
// const handleDragEnd = (event: DragEndEvent) => {
//   console.log(event);
// };
  return (
  <DndContext
    onDragEnd={onDragEnd}
  >
    <div className="flex gap-6 overflow-x-auto pb-4">

      {columns.map((column) => (
        <KanbanColumn
          key={column}
          title={column}
          tasks={tasks.filter(
            (task) => task.status === column
          )}
        />
      ))}

    </div>
  </DndContext>
);
}