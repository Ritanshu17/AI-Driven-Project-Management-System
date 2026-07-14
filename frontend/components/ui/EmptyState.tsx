"use client";

import { ReactNode } from "react";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;

}

export default function EmptyState({
  icon,
  title,
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-8 py-14 text-center">

      {icon && (
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-sm leading-6 text-[var(--muted)]">
        {description}
      </p>

      {action && (
        <div className="mt-6">
          {action}
        </div>
      )}

    </div>
  );
}