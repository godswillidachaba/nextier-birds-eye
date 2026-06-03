"use client";

import { motion } from "framer-motion";

const phases = [
  {
    period: "Months 1–2",
    title: "Bird's Eye MVP",
    status: "Q2 2026",
    items: [
      "Project registry",
      "Revenue tracking",
      "Basic dashboards",
      "User authentication",
      "Reporting",
    ],
    outcome: "Working system already providing value",
    gradient: "from-blue-500 to-blue-600",
    active: true,
  },
  {
    period: "Months 3–6",
    title: "Expansion",
    status: "H2 2026",
    items: [
      "Bid sourcing engine",
      "Project weighting engine",
      "Executive dashboards",
      "Automation workflows",
    ],
    gradient: "from-emerald-500 to-emerald-600",
    active: false,
  },
  {
    period: "Months 7–12",
    title: "Enterprise Intelligence",
    status: "H2 2026",
    items: [
      "AI insights",
      "Predictive analytics",
      "Resource planning",
      "Cross-system integrations",
    ],
    gradient: "from-violet-500 to-violet-600",
    active: false,
  },
  {
    period: "Phase 4",
    title: "Institutionalization",
    status: "2027+",
    items: [
      "Organization-wide adoption",
      "Full governance",
      "Continuous intelligence layer",
    ],
    gradient: "from-amber-500 to-amber-600",
    active: false,
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24">
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
            Delivery Roadmap
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The Path to Delivery
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            A phased approach from MVP to enterprise-wide institutionalization.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-blue-500 via-emerald-500 via-violet-500 to-amber-500 hidden md:block" />

          <div className="space-y-12">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-0 md:pl-16"
              >
                <div className={`absolute top-1.5 left-0 hidden h-3 w-3 rounded-full bg-gradient-to-r ${phase.gradient} ring-4 ring-background md:block ${phase.active ? "animate-pulse" : ""}`} />

                <div className={`rounded-xl border p-6 transition-all ${
                  phase.active
                    ? "border-blue-500/30 bg-blue-500/5 shadow-lg shadow-blue-500/5"
                    : "border-border bg-card"
                }`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className={`rounded-md bg-gradient-to-r ${phase.gradient} px-2.5 py-0.5 text-xs font-semibold text-white`}>
                          {phase.period}
                        </span>
                        {phase.active && (
                          <span className="flex items-center gap-1 text-xs font-medium text-accent">
                            <span className="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                            Current Phase
                          </span>
                        )}
                      </div>
                      <h3 className="mt-3 font-display text-xl font-bold">{phase.title}</h3>
                    </div>
                    <span className="text-sm text-muted-foreground">{phase.status}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {phase.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-border/60 bg-muted/50 px-3 py-1.5 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted/80 px-4 py-2.5">
                    <svg className="h-4 w-4 text-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-medium text-muted-foreground">
                      Outcome: <span className="text-foreground">{phase.outcome}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
