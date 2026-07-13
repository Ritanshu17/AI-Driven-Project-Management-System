"use client";

import { ReactNode } from "react";

interface DashboardSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function DashboardSection({
  title,
  subtitle,
  children,
}: DashboardSectionProps) {
  return (
    <section
      className="
        rounded-2xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-6
        shadow-sm
        transition-all
        duration-300
      "
    >
      {/* Header */}

      <div className="mb-6">

        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-sm text-[var(--muted)]">
            {subtitle}
          </p>
        )}

      </div>

      {/* Content */}

      {children}

    </section>
  );
}