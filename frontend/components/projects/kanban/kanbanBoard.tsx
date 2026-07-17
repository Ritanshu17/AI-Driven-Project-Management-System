"use client";

import KanbanColumn from "@/components/projects/kanban/kanbanColumn";
import { Task } from "@/components/projects/data/types";
import TaskCard from "./TaskCard";
import {
  DndContext,
  DragOverlay,
  DragEndEvent,
  DragStartEvent,
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
  activeTask: Task | null;

  onDragStart: (event: DragStartEvent) => void;
  onDragEnd: (event: DragEndEvent) => void;
}

export default function KanbanBoard({
  tasks,
  activeTask,
  onDragStart,
  onDragEnd,
}: KanbanBoardProps) {
// const handleDragEnd = (event: DragEndEvent) => {
//   console.log(event);
// };
  return (
  <DndContext
    onDragStart={onDragStart}
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
  <DragOverlay
    dropAnimation={{
      duration: 250,
      easing: "ease",
    }}
  >
    {activeTask ? (
     <div className="rotate-2 scale-105 shadow-2xl">
        <TaskCard task={activeTask} />
     </div>
    ) : null}
  </DragOverlay>
  </DndContext>
);
}