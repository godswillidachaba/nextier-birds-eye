"use client";

import { motion } from "framer-motion";

const problems = [
  "Project information scattered across systems",
  "Manual reporting across departments",
  "Revenue visibility challenges",
  "Delayed management decisions",
  "Inconsistent project tracking",
  "Limited opportunity intelligence",
];

const outcomes = [
  { label: "Single source of truth", color: "from-blue-500 to-blue-600" },
  { label: "Faster executive decisions", color: "from-emerald-500 to-emerald-600" },
  { label: "Increased revenue visibility", color: "from-green-500 to-green-600" },
  { label: "Improved project accountability", color: "from-violet-500 to-violet-600" },
  { label: "Automated reporting", color: "from-cyan-500 to-cyan-600" },
  { label: "Better bid conversion rates", color: "from-amber-500 to-amber-600" },
  { label: "AI-powered forecasting", color: "from-purple-500 to-purple-600" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Why This Matters
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            From Fragmented to Unified
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            The way we work today is broken. Here&apos;s how Bird&apos;s Eye changes everything.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-danger/10">
                  <svg className="h-5 w-5 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Current Challenges</h3>
                  <p className="text-sm text-muted-foreground">Problems we face today</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-danger" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-xl border border-border/60 bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <svg className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Business Outcomes</h3>
                  <p className="text-sm text-muted-foreground">What we will achieve</p>
                </div>
              </div>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {outcomes.map((o) => (
                  <div
                    key={o.label}
                    className="flex items-center gap-2.5 rounded-lg border border-border/60 bg-muted/50 px-3.5 py-2.5"
                  >
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${o.color}`} />
                    <span className="text-sm font-medium">{o.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
