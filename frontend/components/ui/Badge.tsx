"use client";

import { ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants = {
    default:
      "bg-[var(--border)] text-[var(--foreground)]",

    success:
      "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",

    warning:
      "bg-amber-500/15 text-amber-400 border border-amber-500/20",

    danger:
      "bg-red-500/15 text-red-400 border border-red-500/20",

    info:
      "bg-blue-500/15 text-blue-400 border border-blue-500/20",
  };

  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        transition-colors
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}