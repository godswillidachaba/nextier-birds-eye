"use client";

import { motion } from "framer-motion";

const modules = [
  {
    number: "01",
    title: "Project Intelligence",
    desc: "Portfolio dashboard, project health scoring, weighted task completion, milestone tracking, and risk monitoring.",
    features: [
      "Portfolio dashboard",
      "Project health scoring",
      "Weighted task completion",
      "Milestone tracking",
      "Risk monitoring",
    ],
    gradient: "from-blue-500/20 to-blue-600/5",
    accent: "border-blue-500/30",
    icon: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    number: "02",
    title: "Revenue Intelligence",
    desc: "Contract value tracking, expected vs actual revenue, outstanding receivables, and forecasting.",
    features: [
      "Contract value tracking",
      "Expected revenue",
      "Actual revenue",
      "Outstanding receivables",
      "Forecasting",
    ],
    gradient: "from-emerald-500/20 to-emerald-600/5",
    accent: "border-emerald-500/30",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    number: "03",
    title: "Bid Intelligence",
    desc: "Automated bid sourcing, UNGM integration, development partner opportunities, tender monitoring, and win-rate analytics.",
    features: [
      "Automated bid sourcing",
      "UNGM integration",
      "Development partner opportunities",
      "Tender monitoring",
      "Bid alerts",
      "Win-rate analytics",
    ],
    gradient: "from-amber-500/20 to-amber-600/5",
    accent: "border-amber-500/30",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  },
  {
    number: "04",
    title: "Resource Intelligence",
    desc: "Consultant allocation, capacity planning, utilization tracking, and skills inventory management.",
    features: [
      "Consultant allocation",
      "Capacity planning",
      "Utilization tracking",
      "Skills inventory",
    ],
    gradient: "from-cyan-500/20 to-cyan-600/5",
    accent: "border-cyan-500/30",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
  {
    number: "05",
    title: "Executive Intelligence",
    desc: "CEO dashboard, real-time KPIs, strategic alerts, and AI-powered recommendations.",
    features: [
      "CEO dashboard",
      "Real-time KPIs",
      "Strategic alerts",
      "AI recommendations",
    ],
    gradient: "from-violet-500/20 to-violet-600/5",
    accent: "border-violet-500/30",
    icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
  },
  {
    number: "06",
    title: "Machine Intelligence",
    desc: "Revenue forecasting, bid recommendations, project risk prediction, and natural language querying.",
    features: [
      "Revenue forecasting",
      "Bid recommendations",
      "Project risk prediction",
      "Automated reporting",
      "Executive summaries",
      "Natural language querying",
    ],
    gradient: "from-purple-500/20 to-purple-600/5",
    accent: "border-purple-500/30",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

export default function Modules() {
  return (
    <section id="modules" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Platform Architecture
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Platform Modules
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Six integrated modules that comprise the Bird&apos;s Eye intelligence platform.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${mod.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-muted-foreground/20">{mod.number}</span>
                  <svg className="h-6 w-6 text-muted-foreground/40 group-hover:text-accent transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={mod.icon} />
                  </svg>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">{mod.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {mod.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {mod.features.map((f) => (
                    <span
                      key={f}
                      className={`rounded-md border px-2 py-0.5 text-xs ${mod.accent} text-muted-foreground`}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
