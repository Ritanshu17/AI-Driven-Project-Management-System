"use client";

import TaskCard from "./TaskCard";
import { Task } from "@/components/projects/data/types";
import { useDroppable } from "@dnd-kit/core";
import DraggableTaskCard from "@/components/projects/[projectID]/kanban/DraggableTaskCard";


interface KanbanColumnProps {
  title: string;
  tasks: Task[];

}


export default function KanbanColumn({
  title,
  tasks,

}: KanbanColumnProps) {
  const sortedTasks = [...tasks].sort(
  (a, b) => a.order - b.order
  );
  const { setNodeRef, isOver } = useDroppable({
  id: title,
  
  
});
  return (
    <div
      ref={setNodeRef}
      className={`min-w-[320px] rounded-xl bg-[var(--surface)] p-4 transition-colors ${isOver ? "ring-2 ring-[var(--accent)]/5" : ""} `}
    >
      <h2 className="mb-4 font-semibold">
        {title} ({tasks.length})
      </h2>

      <div className="space-y-4">
        {sortedTasks.map((task) => (
        <DraggableTaskCard
          key={task.id}
          task={task}
        />
      ))}
      </div>
    </div>
  );
}