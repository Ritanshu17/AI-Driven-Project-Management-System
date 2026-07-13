"use client";

import { projectProgress } from "@/data/projects";
import ProgressCard from "./ProgressCard";
import DashboardSection from "./DashboardSection";

export default function ProjectProgress() {
  return (
   <DashboardSection
      title="Project Progress"
      subtitle="Track ongoing engineering projects"
    >
      <div className="space-y-5">
        {projectProgress.map((project) => (
          <ProgressCard
            key={project.id}
            name={project.name}
            progress={project.progress}
            members={project.members}
          />
        ))}
      </div>
    </DashboardSection>

  );
}