import { notFound } from "next/navigation";

import ProjectDetails from "@/components/projects/[projectID]/projectDetails";
import { projects } from "@/components/projects/data/projects";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { projectId } = await params;

  const id = Number(projectId);

  const project = projects.find(
    (project) => project.id === id
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}