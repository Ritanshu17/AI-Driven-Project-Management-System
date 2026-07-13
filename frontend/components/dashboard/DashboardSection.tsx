"use client";

import { ReactNode } from "react";
import Card from "@/components/ui/Card"

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
    <Card className="p-6"
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

    </Card>
  );
}