"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AuroraBackground from "./AuroraBackground";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6">

      {/* Aurora Background */}
      <AuroraBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">

        {/* Badge */}
        <div className="mb-8 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-4 py-2 text-sm text-[var(--muted)] backdrop-blur-md">
          🚀 Desktop MVP • Version 1.0
        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
          Build Better
          <br />
          Engineering Projects.
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)] lg:text-xl">
          Engineering Workspace helps teams manage projects,
          collaborate efficiently, and track progress with a
          clean, modern, and distraction-free interface.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-xl bg-[var(--accent)] px-7 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/dashboard"
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-7 py-3 font-medium transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--border)]"
          >
            View Demo
          </Link>

        </div>

        {/* Small Text */}
        <p className="mt-8 text-sm text-[var(--muted)]">
          Built with Next.js • TypeScript • Tailwind CSS
        </p>

      </div>

      {/* Scroll Indicator */}{/* Not needed at the moment might change later   */}
      {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">

        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-[var(--border)] p-1">

          <div className="h-2 w-2 rounded-full bg-[var(--accent)]"></div> */}

        {/* </div> */}

      {/* </div> */}

    </section>
  );
}