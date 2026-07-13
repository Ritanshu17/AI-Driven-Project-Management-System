"use client";

import {
  CheckCircle2,
  AlertTriangle,
  Info,
} from "lucide-react";

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
  type: "success" | "warning" | "info";
}

export default function ActivityItem({
  title,
  description,
  time,
  type,
}: ActivityItemProps) {
  const styles = {
    success: {
      icon: CheckCircle2,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    warning: {
      icon: AlertTriangle,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    info: {
      icon: Info,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
  };

  const Icon = styles[type].icon;

  return (
    <div
      className="
        group
        flex
        items-start
        gap-4
        rounded-xl
        p-4
        transition-all
        duration-300
        hover:bg-[var(--background)]
      "
    >
      {/* Icon */}

      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${styles[type].bg}`}
      >
        <Icon
          size={20}
          className={styles[type].color}
        />
      </div>

      {/* Content */}

      <div className="flex-1">

        <div className="flex items-center justify-between gap-4">

          <h3 className="font-semibold transition-colors duration-300 group-hover:text-[var(--accent)]">
            {title}
          </h3>

          <span className="text-xs text-[var(--muted)] whitespace-nowrap">
            {time}
          </span>

        </div>

        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
          {description}
        </p>

      </div>

    </div>
  );
}