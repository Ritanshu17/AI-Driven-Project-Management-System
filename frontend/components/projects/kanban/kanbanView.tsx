"use client";

import PageHeader from "@/components/ui/PageHeader";
import KanbanBoard from "@/components/projects/kanban/kanbanBoard";

export default function KanbanView() {
  return (
    <main className="space-y-8">
      <PageHeader
        title="Kanban Board"
        description="Manage tasks with drag-and-drop workflows."
      />

      <KanbanBoard />
    </main>
  );
}