"use client";

import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card"

interface ActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ActionCard({
  title,
  description,
  icon: Icon,
}: ActionCardProps) {
  return (
    <button
      className=" group flex h-full flex-col rounded-2xl border border-[var(--border)] bg-[var(--background)] p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg "
    >
      {/* Icon */}

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10 transition-all duration-300 group-hover:bg-[var(--accent)]/20">

        <Icon
          size={24}
          className="text-[var(--accent)]"
        />

      </div>

      {/* Title */}

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      {/* Description */}

      <p className="mt-2 flex-1 text-sm leading-6 text-[var(--muted)]">
        {description}
      </p>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-end">

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 text-[var(--accent)]"
        />

      </div>
    </button>
  );
}