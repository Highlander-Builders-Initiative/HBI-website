"use client";

import React from "react";
import { motion } from "motion/react";

const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-sf text-foreground selection:bg-neutral-200">
      <article className="mx-auto max-w-2xl px-6 py-24 md:py-32">
        {/* Header */}
        <motion.header 
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="mb-16"
        >
          <h1 className="font-instrument mb-4 text-4xl font-light tracking-tight md:text-5xl">
            Highlander Builders Initiative (HBI)
          </h1>
          <div className="h-px w-full bg-neutral-100" />
        </motion.header>

        {/* Content */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="space-y-12 text-lg leading-relaxed font-light text-neutral-800"
        >
          {/* Overview */}
          <section>
            <p>
              HBI is a selective student organization at UC Riverside where technically skilled students collaborate on ambitious real-world projects.
            </p>
            <p className="mt-6 text-neutral-500">
              We bring together engineers and creatives to grow as innovators, while forming lasting relationships through our community.
            </p>
          </section>

          {/* What We Do */}
          <section className="space-y-6">
            <h2 className="font-instrument text-2xl font-light italic text-neutral-900 underline decoration-neutral-200 underline-offset-8">
              What We Do
            </h2>
            <ul className="space-y-8">
              <li>
                <strong className="font-medium text-black">Build:</strong> We're always working on projects, which can span multiple quarters. The projects are technical and well designed, sometimes marketed as products. We have objectives like utility, public notability / recognition, and sometimes profit in mind.
              </li>
              <li>
                <strong className="font-medium text-black">Collaborate:</strong> Project teams form organically around what each project needs. We match skills to projects, not people to rigid roles.
              </li>
              <li>
                <strong className="font-medium text-black">Community:</strong> We hope that peers you work alongside with can become friends that you can continue to work with in the future. Members often participate in hackathons and competitions together, representing UCR’s top technical talent. We also host member exclusive events.
              </li>
            </ul>
          </section>

          {/* Who We're Looking For */}
          <section className="space-y-6">
            <h2 className="font-instrument text-2xl font-light italic text-neutral-900 underline decoration-neutral-200 underline-offset-8">
              Who We’re Looking For
            </h2>
            <p>
              Although we are selective, everyone is encouraged to apply. Whether you're technical, creative, strategic, or otherwise, if your abilities align with what we're building, you belong on the team.
            </p>
            <div className="grid grid-cols-1 gap-4 rounded-xl border border-neutral-100 bg-neutral-50/50 p-6 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="font-medium text-black">Developers</p>
                <p className="text-sm text-neutral-500">CS, AI, robotics, embedded systems, etc.</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-black">Designers</p>
                <p className="text-sm text-neutral-500">Art direction, UI/UX, product</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-black">Marketers & Strategists</p>
                <p className="text-sm text-neutral-500">Growth, communications, storytelling</p>
              </div>
              <div className="space-y-1">
                <p className="font-medium text-black">Anyone passionate</p>
                <p className="text-sm text-neutral-500">Pushing ideas into reality</p>
              </div>
            </div>
            <p className="text-neutral-600 italic">
              If you want to help build cool things, HBI is for you. Even if you don't fit any of our existing boxes, if you have a strong case to make for a spot on the team, apply!
            </p>
            <p className="text-sm text-neutral-500">
              We're also open to beginners if we see that you have a strong will to learn / we see potential! (likely demonstrated in some obvious way, not based on vibes)
            </p>
          </section>

          {/* Structure */}
          <section className="space-y-4">
            <h2 className="font-instrument text-2xl font-light italic text-neutral-900 underline decoration-neutral-200 underline-offset-8">
              Structure
            </h2>
            <ul className="list-inside list-disc space-y-2 text-neutral-700">
              <li>Projects run throughout quarters, some spanning multiple.</li>
              <li>Teams are lean and collaborative, where everyone learns together regardless of experience level.</li>
              <li>We host demo days, recruitment events, and community outings.</li>
            </ul>
          </section>

          {/* Our Vision */}
          <section className="space-y-6 pt-6">
            <h2 className="font-instrument text-3xl font-light italic text-neutral-900">
              Our Vision
            </h2>
            <p className="text-xl text-neutral-900 font-light">
              To make UCR a hub for builders who create opportunities instead of waiting for them.
            </p>
            <p className="text-neutral-600">
              We want to see HBI projects evolve into startups, research, and open-source contributions that make an impact beyond campus, with members who go on to lead innovation.
            </p>
          </section>
        </motion.div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-neutral-100 text-sm text-neutral-400 font-light">
          © {new Date().getFullYear()} Highlander Builders Initiative
        </footer>
      </article>
    </main>
  );
}