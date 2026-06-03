"use client";

import { motion } from "framer-motion";

const kpis = [
  { label: "Start Date", value: "1 May 2026", sub: "Kick-off" },
  { label: "MVP Delivery", value: "1 Jul 2026", sub: "2 months" },
  { label: "Full Delivery", value: "31 Dec 2026", sub: "8 months" },
  { label: "Current Status", value: "Planning", sub: "Phase 0", highlight: true },
];

export default function WIG() {
  return (
    <section id="wig" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-accent-light/50 px-4 py-1.5 text-xs font-medium text-accent">
            4DX Discipline 1
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Wildly Important Goal
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-blue-600/5 to-purple-600/5 p-8 shadow-lg">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.08),transparent_50%)]" />
            <div className="relative">
              <h3 className="font-display text-xl font-bold leading-relaxed sm:text-2xl">
                From fragmented project visibility to a unified enterprise
                intelligence system, deliver and institutionalize the
                Bird&apos;s Eye Platform by{" "}
                <span className="text-gradient">31 December 2026</span>,
                providing leadership with real-time visibility into 100% of
                projects, opportunities, expected revenue, actual revenue,
                weighted progress, bid pipelines, consultant utilization, and
                organizational performance metrics.
              </h3>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className={`rounded-xl border p-5 transition-all hover:shadow-md ${
                kpi.highlight
                  ? "border-accent/30 bg-accent-light/20"
                  : "border-border bg-card"
              }`}
            >
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {kpi.label}
              </p>
              <p className={`mt-2 text-2xl font-bold ${kpi.highlight ? "text-accent" : ""}`}>
                {kpi.value}
              </p>
              <p className="mt-0.5 text-sm text-muted-foreground">{kpi.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
