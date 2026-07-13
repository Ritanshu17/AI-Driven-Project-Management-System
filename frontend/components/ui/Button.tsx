"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";

type Size =
  | "sm"
  | "md"
  | "lg";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  children: ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {

  const variants = {
    primary:
      "bg-[var(--accent)] text-white hover:opacity-90",

    secondary:
      "bg-[var(--surface)] text-[var(--foreground)] border border-[var(--border)] hover:bg-[var(--border)]",

    outline:
      "border border-[var(--border)] hover:border-[var(--accent)]",

    ghost:
      "hover:bg-[var(--border)]",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-5",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        font-medium
        transition-all
        duration-300
        ease-out

        disabled:cursor-not-allowed
        disabled:opacity-50

        hover:-translate-y-0.5

        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leftIcon
      )}

      {children}

      {!loading && rightIcon}
    </button>
  );
}