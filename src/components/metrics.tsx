"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "100%", label: "Project Visibility", sub: "All projects tracked", gradient: "from-blue-500 to-blue-600" },
  { value: "100%", label: "Bid Visibility", sub: "Complete pipeline view", gradient: "from-emerald-500 to-emerald-600" },
  { value: "95%", label: "Data Accuracy", sub: "Trusted intelligence", gradient: "from-green-500 to-green-600" },
  { value: "80%", label: "Reporting Reduction", sub: "From manual to automated", gradient: "from-amber-500 to-amber-600" },
  { value: "90%", label: "Executive Adoption", sub: "Leadership buy-in", gradient: "from-violet-500 to-violet-600" },
];

export default function Metrics() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Success Metrics
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Targets by December 2026
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Measurable outcomes that define success for the Bird&apos;s Eye Platform.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg"
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${m.gradient}`} />
              <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-accent-light to-accent-light/50">
                <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="mt-4 font-display text-3xl font-bold">{m.value}</p>
              <p className="mt-1 font-medium">{m.label}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
