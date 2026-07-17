"use client";

import ProjectCard from "./ProjectCard";
import { Project } from "./data/types";
import { EmptyState } from "@/components/ui";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  if (projects.length === 0) {
  return (
    <div className="rounded-2xl border border-dashed border-[var(--border)] p-10 text-center">
      No projects found.
    </div>
  );
}
if (projects.length === 0) {
  return (
    <EmptyState
      title="No projects found"
      description="Try changing your search or filters, or create a new project."
      // action={
      //   <Button onClick={/* We'll wire this next */}>
      //     Create Project
      //   </Button>
      // }
    />
  );
}
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          description={project.description}
          progress={project.progress}
          priority={project.priority}
          status={project.status}
          members={project.members}
          deadline={project.deadline}
        />
      ))}

    </section>
  );
}