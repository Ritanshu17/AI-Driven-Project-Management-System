"use client";

import { projectProgress } from "@/data/projects";
import ProgressCard from "./ProgressCard";

export default function ProjectProgress() {
  return (
    <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Project Progress
      </h2>

      <div className="space-y-4">

        {projectProgress.map((project) => (
          <ProgressCard
            key={project.id}
            name={project.name}
            progress={project.progress}
            members={project.members}
          />
        ))}

      </div>

    </section>
  );
}