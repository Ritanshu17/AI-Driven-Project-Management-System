"use client";

interface DividerProps {
  text?: string;
}

export default function Divider({
  text = "OR CONTINUE WITH",
}: DividerProps) {
  return (
    <div className="my-6 flex items-center gap-4">
      <div className="h-px flex-1 bg-[var(--border)]" />

      <span className="text-xs font-medium uppercase tracking-widest text-[var(--muted)]">
        {text}
      </span>

      <div className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}