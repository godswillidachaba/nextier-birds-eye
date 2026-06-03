"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const impacts = [
  {
    value: 5,
    suffix: "x",
    label: "Faster Decision Making",
    desc: "Leadership decisions in hours, not weeks",
    gradient: "from-blue-500/20 to-blue-600/5",
  },
  {
    value: 100,
    suffix: "%",
    label: "Revenue Visibility",
    desc: "Complete financial picture at all times",
    gradient: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    value: 60,
    suffix: "%",
    label: "Bid Capture Increase",
    desc: "More wins through intelligence-driven bidding",
    gradient: "from-amber-500/20 to-amber-600/5",
  },
  {
    value: 80,
    suffix: "%",
    label: "Reporting Cost Reduction",
    desc: "From manual effort to automated insights",
    gradient: "from-violet-500/20 to-violet-600/5",
  },
  {
    value: 25,
    suffix: "%",
    label: "Consultant Utilization",
    desc: "Better resource allocation across projects",
    gradient: "from-cyan-500/20 to-cyan-600/5",
  },
  {
    value: 90,
    suffix: "%",
    label: "Project Governance",
    desc: "Standardized tracking across all engagements",
    gradient: "from-purple-500/20 to-purple-600/5",
  },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const steps = 30;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground">
            Business Impact
          </span>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Expected Business Impact
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            The measurable difference Bird&apos;s Eye will make across the organization.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impacts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="relative">
                <p className="font-display text-4xl font-bold tabular-nums">
                  <Counter end={item.value} suffix={item.suffix} />
                </p>
                <p className="mt-2 font-semibold">{item.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
