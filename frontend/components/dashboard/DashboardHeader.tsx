"use client";

import { CalendarDays } from "lucide-react";

export default function DashboardHeader() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const today = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date());

  return (
    <section className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

      {/* Left Side */}

      <div className="space-y-2">

        <h1 className="text-4xl font-bold tracking-tight">
          {greeting},{" "}
          <span className="text-[var(--accent)]">
            Ritanshu
          </span>{" "}
          👋
        </h1>

        <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
          Welcome back to your Engineering Workspace.
          <br />
          Here's what's happening today.
        </p>

      </div>

      {/* Right Side */}

      <div className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-4 shadow-sm">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--accent)]/10">

          <CalendarDays
            size={22}
            className="text-[var(--accent)]"
          />

        </div>

        <div>

          <p className="text-sm text-[var(--muted)]">
            Today
          </p>

          <p className="mt-1 text-lg font-semibold">
            {today}
          </p>

        </div>

      </div>

    </section>
  );
}