"use client";

import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export default function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="w-full">

      {label && (
        <label className="mb-2 block text-sm font-medium">
          {label}
        </label>
      )}

      <div
        className={`flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 h-12 transition-all duration-300 focus-within:border-[var(--accent)] focus-within:ring-2 focus-within:ring-[var(--accent)]/20 `}
      >

        {leftIcon && (
          <div className="text-[var(--muted)]">
            {leftIcon}
          </div>
        )}

        <input
          {...props}
          className={`
            flex-1
            bg-transparent
            outline-none
            placeholder:text-[var(--muted)]
            ${className}
          `}
        />

        {rightIcon && (
          <div className="text-[var(--muted)]">
            {rightIcon}
          </div>
        )}

      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}