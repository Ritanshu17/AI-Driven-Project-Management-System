"use client";

import {
  FolderKanban,
  Sparkles,
  Users,
} from "lucide-react";

export default function AuthBranding() {
  return (
<div
  className="
    relative
    flex
    h-full
    w-full
    items-center
    justify-center
    border-r
    border-[var(--border)]
    bg-[var(--background)]
    px-10
  "
>

      {/* Background Glow */}

      <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-[var(--accent)]/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10">

        {/* Logo */}

        <div className="mb-16 flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--accent)] text-white shadow-lg">
            <FolderKanban size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              ProjectPilot
            </h1>

            <p className="text-sm text-[var(--muted)]">
              AI Project Management
            </p>
          </div>

        </div>

        {/* Heading */}

        <h2 className="max-w-md text-5xl font-bold leading-tight">
          Manage projects with
          <span className="block text-[var(--accent)]">
            clarity & speed.
          </span>
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--muted)]">
          Plan sprints, organize tasks, collaborate with your
          team, and gain AI-powered insights from one unified
          workspace.
        </p>

        {/* Features */}

        <div className="mt-12 space-y-5">

          <Feature
            icon={<FolderKanban size={20} />}
            title="Project Tracking"
            description="Organize projects with boards, milestones and timelines."
          />

          <Feature
            icon={<Users size={20} />}
            title="Team Collaboration"
            description="Work together with comments, assignments and updates."
          />

          <Feature
            icon={<Sparkles size={20} />}
            title="AI Insights"
            description="Generate summaries and receive intelligent recommendations."
          />

        </div>

      </div>

      {/* Footer */}

      <div className="relative z-10 text-sm text-[var(--muted)]">
        © 2026 ProjectPilot. All rights reserved.
      </div>

    </div>
  );
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({
  icon,
  title,
  description,
}: FeatureProps) {
  return (
    <div className="flex items-start gap-4">

      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface)] border border-[var(--border)]">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-sm text-[var(--muted)]">
          {description}
        </p>
      </div>

    </div>
  );
}