import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/sidebar/Sidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-[var(--background)]">

      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">

        <Navbar />

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}