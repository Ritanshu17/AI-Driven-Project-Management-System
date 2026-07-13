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

  const status =
    progress >= 80
      ? "Completed"
      : progress >= 60
      ? "On Track"
      : "Needs Attention";

  const statusColor =
    progress >= 80
      ? "text-emerald-500"
      : progress >= 60
      ? "text-blue-500"
      : "text-amber-500";

  return (
    <div
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--background)]
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[var(--accent)]
        hover:shadow-lg
      "
    >
      {/* Header */}

      <div className="mb-4 flex items-center justify-between">

        <div>

          <h3 className="font-semibold">
            {name}
          </h3>

          <div className="mt-1 flex items-center gap-2 text-sm text-[var(--muted)]">

            <Users size={14} />

            {members} Members

          </div>

        </div>

        <span className="text-lg font-bold text-[var(--accent)]">
          {progress}%
        </span>

      </div>

      {/* Progress Bar */}

      <div className="h-3 overflow-hidden rounded-full bg-[var(--border)]">

        <div
          className="h-full rounded-full bg-[var(--accent)] transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      {/* Footer */}

      <div className="mt-4 flex items-center justify-between">

        <span className={`text-sm font-medium ${statusColor}`}>
          ● {status}
        </span>

        <span className="text-xs text-[var(--muted)]">
          Updated Today
        </span>

      </div>

    </div>
  );
}