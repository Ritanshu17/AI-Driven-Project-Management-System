"use client";

import {
  HTMLAttributes,
  ReactNode,
} from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl
        border
        border-[var(--border)]
        bg-[var(--surface)]
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}