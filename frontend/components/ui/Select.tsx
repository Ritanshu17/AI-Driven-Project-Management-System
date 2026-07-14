"use client";

import { SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";

interface Option {
  label: string;
  value: string;
}

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: Option[];
}

export default function Select({
  label,
  error,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <div className="w-full">

      {label && (
        <label className="mb-2 block text-sm font-medium">
          {label}
        </label>
      )}

      <div className="relative">

        <select
          {...props}
          className={` h-12 w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 pr-10 outline-none transition-all duration-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 ${className} `}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>

        <ChevronDown
          size={18}
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-[var(--muted)]
          "
        />

      </div>

      {error && (
        <p className="mt-2 text-sm text-red-500">
          {error}
        </p>
      )}

    </div>
  );
}