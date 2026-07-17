"use client";

import { Project } from "./data/types";
import { MoreHorizontal } from "lucide-react";

import {
  Badge,
  Avatar,
} from "@/components/ui"

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
            <th className="w-16"></th>

          </tr>

        </thead>

        <tbody>

          {projects.map((project) => (

            <tr
              key={project.id}
              className=" border-t border-[var(--border)] hover:bg-[var(--muted)] transition-colors duration-200"
              >

              <td className="p-4">
                {project.name}
              </td>

              <td className="px-6 py-5">
                <Badge
                  variant={
                    project.priority === "Critical"
                      ? "danger"
                      : project.priority === "High"
                      ? "warning"
                      : project.priority === "Medium"
                      ? "info"
                      : "default"
                  }
                >
                  {project.priority}
                </Badge>
              </td>

              <td className="px-6 py-5">
                <Badge
                  variant={
                    project.status === "Completed"
                      ? "success"
                      : project.status === "Planning"
                      ? "info"
                      : "default"
                  }
                >
                  {project.status}
                </Badge>
              </td>

              <td className="p-4">
                <div className="space-y-2">

                  <div className="h-2 w-full rounded-full bg-[var(--muted)]">

                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{
                        width: `${project.progress}%`,
                      }}
                    />

                  </div>

                  <span className="text-xs text-[var(--muted-foreground)]">
                    {project.progress}%
                  </span>

                </div>
              </td>

              <td className="px-6 py-5">
                <div className="flex -space-x-2">

                  {Array.from({ length: project.members }).map((_, index) => (
                    <Avatar
                      key={index}
                      name={`User ${index + 1}`}
                      size="sm"
                    />
                  ))}

                </div>
              </td>

              <td className="p-4">
                {project.deadline}
              </td>

              <td className="p-4 text-right">
                <button>
                  <MoreHorizontal size={18} />
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}