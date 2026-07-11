"use client";

import { Users } from "lucide-react";

interface ProgressCardProps {
  name: string;
  progress: number;
  members: number;
}

export default function ProgressCard({
  name,
  progress,
  members,
}: ProgressCardProps) {
  return (
    <div className="space-y-3 rounded-xl border border-[var(--border)] p-4 transition-all duration-300 hover:border-[var(--accent)]">

      <div className="flex items-center justify-between">

        <div>

          <h4 className="font-medium">
            {name}
          </h4>

          <div className="mt-1 flex items-center gap-2 text-sm text-[var(--muted)]">
            <Users size={14} />
            {members} Members
          </div>

        </div>

        <span className="font-semibold text-[var(--accent)]">
          {progress}%
        </span>

      </div>

      {/* Progress Bar */}

      <div className="h-2 overflow-hidden rounded-full bg-[var(--border)]">

        <div
          className="h-full rounded-full bg-[var(--accent)] transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}