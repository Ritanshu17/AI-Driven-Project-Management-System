import ProjectDetails from "@/components/projects/[projectID]/projectDetails";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { projectId } = await params;

  return (
    <ProjectDetails projectId={projectId} />
  );
}

// interface ProjectPageProps {
//   params: Promise<{
//     projectId: string;
//   }>;
// }

// export default async function ProjectPage({
//   params,
// }: ProjectPageProps) {
//   const { projectId } = await params;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold">
//         Project Details
//       </h1>

//       <p className="mt-2">
//         Project ID: {projectId}
//       </p>
//     </div>
//   );
// }