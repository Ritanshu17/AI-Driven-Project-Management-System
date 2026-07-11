"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-28">

      <div className="w-full px-10">

        <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-10 py-20 text-center">

          {/* Decorative Background */}

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl"></div>

          <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

          {/* Content */}

          <div className="relative z-10">

            <span className="rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-2 text-sm text-[var(--muted)]">
              Ready to Get Started?
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight lg:text-5xl">
              Start Managing Projects
              <br />
              The Smarter Way.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Join your engineering team in one modern workspace
              designed for planning, collaboration and project
              management.
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
                className="rounded-xl border border-[var(--border)] bg-[var(--background)] px-7 py-3 font-medium transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--border)]"
              >
                Explore Dashboard
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}