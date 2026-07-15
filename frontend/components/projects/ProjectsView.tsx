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
  const handleCreateProject = (project: Project) => {
  setProjects((prev) => [...prev, project]);
};
const filteredProjects = projects.filter((project) =>
  project.name.toLowerCase().includes(search.toLowerCase()) ||
  project.description.toLowerCase().includes(search.toLowerCase())
);

  return (
    <main className="min-h-screen space-y-8">

      <PageHeader
        title="Projects"
        description="Manage engineering projects and collaborate with your team."
      />

      <ProjectToolbar
          search={search}
          onSearchChange={setSearch}
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