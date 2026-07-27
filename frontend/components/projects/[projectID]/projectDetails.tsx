"use client";
import { Project } from "@/components/projects/data/types";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Users,
  CircleDot,
  Flag,
} from "lucide-react";

import { Badge } from "@/components/ui";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({
  project,
}: ProjectDetailsProps) {
  return (
    <div className="space-y-8">

      {/* Back */}

      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      {/* Header */}

      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

          <div>
            <div className="flex flex-wrap items-center gap-3">

              <h1 className="text-3xl font-bold tracking-tight">
                {project.name}
              </h1>

              <Badge variant="info">
                {project.status}
              </Badge>

            </div>

            <p className="mt-3 max-w-3xl text-[var(--muted)]">
              {project.description}
            </p>

            <p className="mt-2 text-xs text-[var(--muted)]">
              Project ID: {project.id}
            </p>
          </div>

          <button
            type="button"
            className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-medium transition hover:bg-[var(--border)]"
          >
            Edit Project
          </button>

        </div>

        {/* Project Information */}

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <InfoItem
            icon={<CircleDot size={18} />}
            label="Status"
            value={project.status}
          />

          <InfoItem
            icon={<Flag size={18} />}
            label="Priority"
            value={project.priority}
          />

          <InfoItem
            icon={<CalendarDays size={18} />}
            label="Deadline"
            value={project.deadline}
          />

          <InfoItem
            icon={<Users size={18} />}
            label="Members"
            value={`${project.members} Members`}
          />

        </div>

        {/* Progress */}

        <div className="mt-8">

          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium">
              Project Progress
            </span>

            <span className="text-[var(--muted)]">
              {project.progress}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]">
            <div
              className="h-full rounded-full bg-[var(--accent)]"
              style={{
                width: `${project.progress}%`,
              }}
              />
          </div>

        </div>

      </div>

      {/* Main Content */}

      <div className="grid gap-6 lg:grid-cols-3">

        {/* Overview */}

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 lg:col-span-2">

          <h2 className="text-xl font-semibold">
            Project Overview
          </h2>

          <p className="mt-4 leading-7 text-[var(--muted)]">
            {project.description}
          </p>

        </div>

        {/* Team */}

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">

          <h2 className="text-xl font-semibold">
            Project Team
          </h2>

          <div className="mt-5 flex -space-x-2">

            {["RM", "AK", "SJ", "PK"].map((member) => (
              <div
                key={member}
                className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--surface)] bg-[var(--accent)] text-xs font-semibold text-white"
              >
                {member}
              </div>
            ))}

          </div>

          <p className="mt-4 text-sm text-[var(--muted)]">
            {project.members} members are working on this project.
          </p>

        </div>

      </div>

    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] p-4">

      <div className="text-[var(--accent)]">
        {icon}
      </div>

      <div>
        <p className="text-xs text-[var(--muted)]">
          {label}
        </p>

        <p className="mt-1 text-sm font-medium">
          {value}
        </p>
      </div>

    </div>
  );
}