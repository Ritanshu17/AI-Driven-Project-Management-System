"use client";

import { Project } from "./data/types";

interface ProjectTableProps {
  projects: Project[];
}

export default function ProjectTable({
  projects,
}: ProjectTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border)]">
      <table className="w-full border-collapse">

        <thead className="bg-[var(--muted)]">

          <tr>

            <th className="p-4 text-left">Project</th>
            <th className="p-4 text-left">Priority</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Progress</th>
            <th className="p-4 text-left">Members</th>
            <th className="p-4 text-left">Deadline</th>

          </tr>

        </thead>

        <tbody>

          {projects.map((project) => (

            <tr
              key={project.id}
              className="border-t border-[var(--border)]"
            >

              <td className="p-4">
                {project.name}
              </td>

              <td className="p-4">
                {project.priority}
              </td>

              <td className="p-4">
                {project.status}
              </td>

              <td className="p-4">
                {project.progress}%
              </td>

              <td className="p-4">
                {project.members}
              </td>

              <td className="p-4">
                {project.deadline}
              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}