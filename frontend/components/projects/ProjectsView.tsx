"use client";

import { useState } from "react";

import PageHeader from "@/components/ui/PageHeader";
import { projects as initialProjects } from "./data/projects";
import ProjectToolbar from "./ProjectToolbar";
import ProjectGrid from "./ProjectGrid";
import CreateProjectModal from "./CreateProjectModal";
import { Project } from "@/components/projects/data/types";

export default function ProjectsView() {

  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(initialProjects);
  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const handleCreateProject = (project: Project) => {
  setProjects((prev) => [...prev, project]);
};
const filteredProjects = projects.filter((project) => {
  const matchesSearch =
    project.name.toLowerCase().includes(search.toLowerCase()) ||
    project.description.toLowerCase().includes(search.toLowerCase());

  const matchesPriority =
    priorityFilter === "all" ||
    project.priority.toLowerCase() === priorityFilter;

  const matchesStatus =
    statusFilter === "all" ||
    project.status.toLowerCase().replace(" ", "-") === statusFilter;

  return (
    matchesSearch &&
    matchesPriority &&
    matchesStatus
  );
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

        onCreateProject={() => setOpen(true)}
    />

      <ProjectGrid
          projects={filteredProjects}
      />

      <CreateProjectModal
        open={open}
        onOpenChange={setOpen}
        onCreate={handleCreateProject}
      />

    </main>
  );
}