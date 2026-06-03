"use client";

import { motion } from "framer-motion";

const kpis = [
  { label: "Total Project Value", value: "$124.5M", color: "from-blue-500 to-blue-600" },
  { label: "Expected Revenue", value: "$38.2M", color: "from-emerald-500 to-emerald-600" },
  { label: "Revenue Received", value: "$22.8M", color: "from-green-500 to-green-600" },
  { label: "Active Bids", value: "47", color: "from-amber-500 to-amber-600" },
  { label: "Project Health", value: "86%", color: "from-violet-500 to-violet-600" },
  { label: "Team Utilization", value: "74%", color: "from-cyan-500 to-cyan-600" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-light/20 via-transparent to-background pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-accent-light/50 px-4 py-1.5 text-xs font-medium text-accent">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              Nextier IT Department — Strategy 2026
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Bird&apos;s Eye{" "}
              <span className="text-gradient">Platform</span>
            </h1>
            <p className="mt-3 text-xl font-semibold text-muted-foreground sm:text-2xl">
              One Platform. Complete Visibility. Smarter Decisions.
            </p>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Transforming Nextier into a data-driven consulting organization
              through real-time project intelligence, bid monitoring, revenue
              visibility, and machine-assisted decision making.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#roadmap"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30 hover:scale-[1.02]"
              >
                View Roadmap
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold transition-all hover:bg-muted"
              >
                Explore Modules
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-1 shadow-2xl">
              <div className="rounded-xl border border-border bg-background/95">
                <div className="flex items-center gap-2 border-b border-border px-5 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-danger" />
                    <div className="h-3 w-3 rounded-full bg-warning" />
                    <div className="h-3 w-3 rounded-full bg-success" />
                  </div>
                  <span className="text-xs text-muted-foreground">Bird&apos;s Eye — Executive Dashboard</span>
                </div>
                <div className="p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold">Portfolio Overview</h3>
                    <span className="rounded-md bg-accent-light px-2 py-0.5 text-xs font-medium text-accent">Live</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {kpis.map((kpi, i) => (
                      <motion.div
                        key={kpi.label}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                        className="rounded-xl border border-border bg-muted/50 p-3"
                      >
                        <p className="text-xs text-muted-foreground">{kpi.label}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <div className={`h-2 w-2 rounded-full bg-gradient-to-br ${kpi.color}`} />
                          <p className="text-lg font-bold">{kpi.value}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-accent-light/30 px-4 py-2.5">
                    <svg className="h-4 w-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <p className="text-xs font-medium text-accent">
                      <span className="font-bold">AI Insight:</span> 3 projects at risk — recommend resource reallocation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 h-20 w-20 rounded-xl bg-gradient-to-br from-accent/10 to-purple-500/10 blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
