"use client";

import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function PageHeader({
  title,
  description,
  action,
}: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

      {/* Left */}

      <div>

        <h1 className="text-4xl font-bold tracking-tight">
          {title}
        </h1>

        {description && (
          <p className="mt-2 max-w-2xl text-[var(--muted)] leading-7">
            {description}
          </p>
        )}

      </div>

      {/* Right */}

      {action && (
        <div className="flex shrink-0">
          {action}
        </div>
      )}

    </div>
  );
}