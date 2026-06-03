"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-accent-light/10 to-background pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Future Vision
          </span>
          <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            The Operating System of{" "}
            <span className="text-gradient">Nextier</span>
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-4">
            <p className="text-lg leading-relaxed text-muted-foreground">
              The Bird&apos;s Eye Platform will evolve from a project monitoring
              solution into the digital operating system of Nextier, connecting
              projects, people, revenue, opportunities, and intelligence into a
              unified decision-making environment powered by automation and
              machine intelligence.
            </p>
          </div>
          <div className="mt-10 flex justify-center gap-2">
            {["Projects", "People", "Revenue", "Opportunities", "Intelligence"].map((word) => (
              <span
                key={word}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-accent/30 hover:bg-accent-light/20 hover:text-accent"
              >
                {word}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
