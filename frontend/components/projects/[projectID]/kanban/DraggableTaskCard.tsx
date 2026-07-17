"use client";

import { useDraggable } from "@dnd-kit/core";

import { Task } from "@/components/projects/data/types";
import TaskCard from "./TaskCard";

interface Props {
  task: Task;
}

export default function DraggableTaskCard({ task }: Props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id: task.id,
  });

const style = {
  transform: transform
    ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
    : undefined,
  opacity: isDragging ? 0.4 : 1,
  transition: "box-shadow 200ms ease",
};
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="cursor-grab active:cursor-grabbing transition-transform duration-200 ease-out"
    >
      <TaskCard task={task} />
    </div>
  );
}