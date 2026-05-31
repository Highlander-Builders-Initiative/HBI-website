import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background font-sf text-foreground selection:bg-neutral-200">
      <article className="mx-auto max-w-2xl px-6 py-24 md:py-32">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-instrument mb-4 text-4xl font-light tracking-tight md:text-5xl">
            Projects
          </h1>
          <p className="text-neutral-500 font-light text-lg">
            Ambitious systems, products, and platforms designed and built by Highlander Builders Initiative.
          </p>
          <div className="h-px w-full bg-neutral-100 mt-6" />
        </header>

        {/* Projects List */}
        <div className="space-y-16">
          {/* Project Card: Highlander Hub */}
          <section className="group relative rounded-2xl border border-neutral-100 bg-neutral-50/30 p-6 transition-all duration-300 hover:bg-neutral-50/70 hover:shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <h2 className="font-instrument text-2xl font-light italic text-neutral-900 group-hover:text-black">
                Highlander Hub
              </h2>
            </div>

            <p className="text-neutral-800 text-lg font-light leading-relaxed mb-6">
              The premier student event discovery and community engagement platform at UC Riverside. Highlander Hub acts as UCR&rsquo;s centralized event registry, bringing student organizations, builders, and community leads into a single, cohesive feed.
            </p>

            {/* Context/Problem & Solution Details */}
            <div className="space-y-6 text-sm text-neutral-600 font-light border-l border-neutral-200 pl-4 mb-6">
              <div>
                <strong className="font-medium text-neutral-800 block text-xs uppercase tracking-wider mb-1">
                  The Problem
                </strong>
                <p>
                  Campus event information at UC Riverside was historically fragmented across dozens of Discord servers, Instagram accounts, and private channels, making it difficult for students to discover community happenings.
                </p>
              </div>

              <div>
                <strong className="font-medium text-neutral-800 block text-xs uppercase tracking-wider mb-1">
                  The Solution
                </strong>
                <p>
                  A high-speed, intuitive event portal. Club leads and student organizers can seamlessly submit events via a streamlined `/submit` pipeline, which compiles directly into a beautiful, lightning-fast public events feed.
                </p>
              </div>

              <div>
                <strong className="font-medium text-neutral-800 block text-xs uppercase tracking-wider mb-1">
                  Core Innovations
                </strong>
                <ul className="list-inside list-disc space-y-1 mt-1 text-neutral-500">
                  <li>Real-time dynamic feed aggregating diverse organization events</li>
                  <li>Unified `/submit` portal prioritizing ease-of-use and UX aesthetics</li>
                  <li>Intelligent search and tag-based filtering for frictionless discovery</li>
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href="https://highlanderhub.app" target="_blank" className="inline-block">
                <Button variant="fancy" className="rounded-full px-4 py-1.5 font-instrument text-sm">
                  View Website
                </Button>
              </Link>
              <Link href="https://github.com/Highlander-Builders-Initiative/HighlanderHub" target="_blank" className="inline-block">
                <Button variant="fancy-outline" className="rounded-full px-4 py-1.5 font-instrument text-sm">
                  View Repository
                </Button>
              </Link>
            </div>
          </section>

          {/* Project Card: Future Projects Placeholder */}
          <section className="rounded-2xl border border-dashed border-neutral-200 p-6 text-center bg-transparent">
            <h3 className="font-instrument text-xl font-light text-neutral-400 italic mb-2">
              Ambitious systems in development...
            </h3>
            <p className="text-sm text-neutral-400 font-light max-w-md mx-auto">
              Our teams are constantly conceiving and iterating on open source infrastructure, developer tooling, and smart systems for UCR students.
            </p>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-neutral-100 text-sm text-neutral-400 font-light">
          © {new Date().getFullYear()} Highlander Builders Initiative
        </footer>
      </article>
    </main>
  );
}
