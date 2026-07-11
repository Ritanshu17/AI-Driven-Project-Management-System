"use client";

import Hero from "./Hero";
import Features from "./Features";
import CTA from "./CTA";
import Footer from "./Footer";

export default function HomeView() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">

      {/* Hero Section */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />

    </main>
  );
}