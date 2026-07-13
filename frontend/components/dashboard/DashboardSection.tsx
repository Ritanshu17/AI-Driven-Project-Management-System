"use client";

import { ReactNode } from "react";

interface DashboardSectionProps {
  title: string;
 subtitle?: string;
 children: ReactNode;
  action?: ReactNode;
}

export default function DashboardSection({
  title,
  subtitle,
  action,
  children,
}: DashboardSectionProps) {
  return (
    <section
      className=" rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-300 hover:shadow-md"
    >
      {/* Header */}

      <div className="mb-6 flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-semibold tracking-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {subtitle}
            </p>
          )}

        </div>

        {action && (
          <div>
            {action}
          </div>
        )}

      </div>

      {/* Divider */}

      <div className="mb-6 border-b border-[var(--border)]" />

      {/* Content */}

      {children}

    </section>
  );
}