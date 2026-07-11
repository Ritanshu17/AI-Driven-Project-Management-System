"use client";

import { currentUser } from "@/data/users";

export default function DashboardHeader() {

  const currentHour = new Date().getHours();

  let greeting = "Good Morning";

  if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon";
  } else if (currentHour >= 17) {
    greeting = "Good Evening";
  }

  const formatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  });

  const today = formatter.format(new Date());

  return (
    <section className="flex items-center justify-between">

      {/* Left Side */}
      <div>

        <h1 className="text-4xl font-bold tracking-tight">

          {greeting},{" "}

          <span className="text-[var(--accent)]">
            {currentUser.name}
            </span>

          👋

        </h1>

        <p className="mt-3 text-lg text-[var(--muted)]">
          Welcome back to your Engineering Workspace.
          Here's what's happening today.
        </p>

      </div>

      {/* Right Side */}
      <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-right">

        <p className="text-sm text-[var(--muted)]">
          Today
        </p>

        <p className="mt-1 font-semibold">
          {today}
        </p>

      </div>

    </section>
  );
}