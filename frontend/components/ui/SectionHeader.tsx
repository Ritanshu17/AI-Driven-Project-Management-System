"use client";

import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function SectionHeader({
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-6 flex items-start justify-between">

      <div>

        <h2 className="text-xl font-semibold tracking-tight">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
            {description}
          </p>
        )}

      </div>

      {action && (
        <div>
          {action}
        </div>
      )}

    </div>
  );
}