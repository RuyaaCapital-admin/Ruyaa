"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const pillars = [
  {
    title: "Autonomous AI Agents",
    desc: "Deploy agents for support, sales, onboarding, and ops across WhatsApp, web, and internal tools.",
    metric: "↓ response time / ↑ throughput",
  },
  {
    title: "CRM & Pipeline Automation",
    desc: "Custom CRM flows, lead scoring, follow‑ups, enrichment, and bi‑directional sync with your stack.",
    metric: "↑ conversion consistency",
  },
  {
    title: "Analytics Dashboards",
    desc: "Operational dashboards with KPIs, alerts, and audit logs. Single source of truth for decisions.",
    metric: "Data you can trust",
  },
  {
    title: "Website & Landing Pages",
    desc: "Fast, conversion‑focused sites with A/B testing hooks and analytics. Built for speed and SEO.",
    metric: "↑ qualified leads",
  },
  {
    title: "Integrations & Automations",
    desc: "Wire into your ERP, payments, email, WhatsApp, and data warehouse with reliability and observability.",
    metric: "Fewer manual steps",
  },
  {
    title: "Compliance & Governance",
    desc: "KYC, PII handling, consent tracking, audit logs, and role‑based controls baked into workflows.",
    metric: "Lower risk, clear trail",
  },
];

export default function PillarsSection() {
  return (
    <section className="bg-black text-white px-6 py-32 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-white font-semibold leading-[0.9] tracking-[-0.04em] text-[clamp(2rem,3vw,3rem)] mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          Services
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              className="border border-white/10 bg-white/[0.02] p-6 rounded-2xl flex flex-col justify-between"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true, margin: "-20%" }}
            >
              <div>
                <div className="text-white text-lg font-medium tracking-[-0.03em] leading-tight">
                  {p.title}
                </div>
                <div className="mt-4 text-neutral-400 text-sm leading-relaxed">
                  {p.desc}
                </div>
              </div>

              <div className="mt-8 text-xs text-neutral-500 uppercase tracking-wider">
                {p.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
