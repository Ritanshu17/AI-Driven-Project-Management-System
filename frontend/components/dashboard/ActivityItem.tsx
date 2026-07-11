"use client";

import {
  CheckCircle2,
  AlertCircle,
  Info,
} from "lucide-react";

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  type: "success" | "info" | "warning";
}

export default function ActivityItem({
  title,
  description,
  time,
  type,
}: ActivityItemProps) {

  const iconMap = {
    success: CheckCircle2,
    info: Info,
    warning: AlertCircle,
  };

  const colorMap = {
    success: "text-green-500",
    info: "text-blue-500",
    warning: "text-yellow-500",
  };

  const Icon = iconMap[type];

  return (
    <div className="flex gap-4 rounded-xl border border-[var(--border)] p-4 transition hover:border-[var(--accent)]">

      <Icon
        className={colorMap[type]}
        size={22}
      />

      <div className="flex-1">

        <div className="flex items-center justify-between">

          <h4 className="font-medium">
            {title}
          </h4>

          <span className="text-xs text-[var(--muted)]">
            {time}
          </span>

        </div>

        <p className="mt-1 text-sm text-[var(--muted)]">
          {description}
        </p>

      </div>

    </div>
  );
}