"use client";

import { useState } from "react";

import PageHeader from "@/components/ui/PageHeader";
import { projects as initialProjects } from "./data/projects";
import ProjectToolbar from "./ProjectToolbar";
import ProjectGrid from "./ProjectGrid";
import CreateProjectModal from "./CreateProjectModal";
import { Project } from "@/components/projects/data/types";
import ProjectTable from "./ProjectTable";
import KanbanBoard from "./kanban/kanbanBoard";

export default function ProjectsView() {

  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("updated");
  const [view, setView] = useState<"grid" | "table" | "kanban">("grid");
  const handleCreateProject = (project: Project) => {
  setProjects((prev) => [...prev, project]);
};
const filteredProjects = projects
  .filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase());

    const matchesPriority =
      priorityFilter === "all" ||
      project.priority.toLowerCase() === priorityFilter;

    const matchesStatus =
      statusFilter === "all" ||
      project.status.toLowerCase() === statusFilter;

    return (
      matchesSearch &&
      matchesPriority &&
      matchesStatus
    );
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);

      case "progress":
        return b.progress - a.progress;

      case "deadline":
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();

      default:
        return b.id - a.id;
    }
  });
  return (
    <main className="min-h-screen space-y-8">

      <PageHeader
        title="Projects"
        description="Manage engineering projects and collaborate with your team."
      />

      <ProjectToolbar
        search={search}
        onSearchChange={setSearch}

        priority={priorityFilter}
        onPriorityChange={setPriorityFilter}

        status={statusFilter}
        onStatusChange={setStatusFilter}

        sort={sortBy}
        onSortChange={setSortBy}

        view={view}
        onViewChange={setView}

  

        onCreateProject={() => setOpen(true)}
    />

      {view === "grid" && (
        <ProjectGrid projects={filteredProjects} />
      )}

      {view === "table" && (
        <ProjectTable projects={filteredProjects} />
      )}

      {view === "kanban" && (
        <KanbanBoard />
      )}

      <CreateProjectModal
        open={open}
        onOpenChange={setOpen}
        onCreate={handleCreateProject}
      />

    </main>
  );
}