"use client";

import { ReactNode } from "react";
import AuthBranding from "./AuthBranding";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">

        {/* Left Branding */}

        <div className="hidden lg:flex lg:w-2/5">
          <AuthBranding />
        </div>

        {/* Right Form */}

        <div className="flex flex-1 items-center justify-center px-6 py-12">
          <div className=" w-full max-w-lg rounded-3xl border border-white/10 bg-[var(--surface)]/90 backdrop-blur-xl p-10 shadow-2xl ">

            <div className="mb-10 text-center">
              <h1 className="text-4xl font-bold tracking-tight">
                {title}
              </h1>

              <p className="mt-3 text-[var(--muted)]">
                {subtitle}
              </p>
            </div>

            {children}

          </div>
        </div>

      </div>
    </main>
  );
}