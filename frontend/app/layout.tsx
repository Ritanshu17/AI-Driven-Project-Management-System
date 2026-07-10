import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


import "./globals.css";
import ThemeProvider from "@/components/layout/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Engineering Workspace",
    template: "%s | Engineering Workspace",
  },
  description:
    "AI-powered engineering collaboration platform for planning, building, and shipping software faster.",
  applicationName: "Engineering Workspace",
  keywords: [
    "Project Management",
    "AI",
    "Kanban",
    "Engineering",
    "Collaboration",
    "Next.js",
  ],
  authors: [
    {
      name: "Ritanshu Mankar",
    },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}