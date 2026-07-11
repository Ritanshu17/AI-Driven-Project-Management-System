"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">

      <div className="w-full px-10 py-12">

        {/* Top */}

        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

          {/* Brand */}

          <div>

            <h2 className="text-xl font-semibold">
              Engineering Workspace
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-[var(--muted)]">
              A modern engineering collaboration platform built
              with Next.js, TypeScript and Tailwind CSS.
            </p>

          </div>

          {/* Navigation */}

          <nav className="flex flex-wrap items-center gap-6 text-sm">

            <Link
              href="/"
              className="transition hover:text-[var(--accent)]"
            >
              Home
            </Link>

            <Link
              href="/dashboard"
              className="transition hover:text-[var(--accent)]"
            >
              Dashboard
            </Link>

            <Link
              href="/login"
              className="transition hover:text-[var(--accent)]"
            >
              Login
            </Link>

            <Link
              href="/settings"
              className="transition hover:text-[var(--accent)]"
            >
              Settings
            </Link>

          </nav>

        </div>

        {/* Divider */}

        <hr className="my-10 border-[var(--border)]" />

        {/* Bottom */}

        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

          {/* Copyright */}

          <p className="text-sm text-[var(--muted)]">
            © 2026 Engineering Workspace. All rights reserved.
          </p>

          {/* Tech */}

          {/* <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-[var(--muted)]">

            <span>Next.js</span>

            <span>•</span>

            <span>TypeScript</span>

            <span>•</span>

            <span>Tailwind CSS</span>

          </div> */}

          {/* Social */}

          <div className="flex items-center gap-4">

            <Link
              href="https://github.com/Ritanshu17/"
              target="_blank"
              className="rounded-lg p-2 transition hover:bg-[var(--surface)]"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/ritanshu-mankar/"
              target="_blank"
              className="rounded-lg p-2 transition hover:bg-[var(--surface)]"
            >
              <FaLinkedin size={20} />
            </Link>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="rounded-lg border border-[var(--border)] p-2 transition hover:border-[var(--accent)]"
              aria-label="Back to top"
            >
              <ArrowUpRight size={18} />
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
}