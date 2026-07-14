"use client";

import {
  TextareaHTMLAttributes,
} from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({
  label,
  error,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div className="w-full">

      {label && (
        <label className="mb-2 block text-sm font-medium">
          {label}
        </label>
      )}

      <textarea
        {...props}
        className={`
          min-h-[120px]
          w-full
          resize-none
          rounded-xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          px-4
          py-3
          outline-none
          transition-all
          duration-300
          placeholder:text-[var(--muted)]
          focus:border-[var(--accent)]
          focus:ring-2
          focus:ring-[var(--accent)]/20
          ${className}
        `}
      />

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}