"use client";

import TaskModal from "./TaskModal";
import { useState } from "react";
import {
  DragEndEvent,
  DragStartEvent,
} from "@dnd-kit/core";

import PageHeader from "@/components/ui/PageHeader";
import KanbanBoard from "@/components/projects/[projectID]/kanban/kanbanBoard";

import { tasks as initialTasks } from "@/components/projects/data/tasks";
import { Task } from "@/components/projects/data/types";

export default function KanbanView() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const [taskModalOpen, setTaskModalOpen] = useState(false);

  //click handler
  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setTaskModalOpen(true);
  };

  // When dragging starts
  const handleDragStart = (event: DragStartEvent) => {
    const taskId = Number(event.active.id);

    const task = tasks.find(
      (task) => task.id === taskId
    );

    if (task) {
      setActiveTask(task);
    }
  };

  // When dragging ends
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setActiveTask(null);

    if (!over) return;

    const taskId = Number(active.id);

    const newStatus = String(over.id) as Task["status"];

    const validStatuses: Task["status"][] = [
      "Backlog",
      "Todo",
      "In Progress",
      "Review",
      "Done",
    ];

    if (!validStatuses.includes(newStatus)) {
      return;
    }

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  };

  return (
    <main className="space-y-8">

      <PageHeader
        title="Kanban Board"
        description="Manage tasks with drag-and-drop workflows."
      />

      <KanbanBoard
          tasks={tasks}
          activeTask={activeTask}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onTaskClick={handleTaskClick}
      />

      <TaskModal
          open={taskModalOpen}
          onOpenChange={setTaskModalOpen}
          mode="view"
          task={selectedTask}
      />

    </main>
  );
}