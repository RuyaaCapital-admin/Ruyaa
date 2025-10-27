"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const pillars = [
  {
    title: "Support / Client Handling",
    desc: "24/7 front-line agent. Answers, qualifies, updates status, books next step. Runs on WhatsApp, web, or internal dashboard.",
    metric: "↓ response time / ↓ human load",
  },
  {
    title: "Finance / Collections / Ops",
    desc: "Chases unpaid invoices, confirms payments, updates sheets/CRM, sends reminders, tracks proof. Zero emotion. Zero delay.",
    metric: "Faster cash recovery",
  },
  {
    title: "Onboarding / Compliance",
    desc: "Collects IDs, docs, contracts, signatures, rental details, KYC info — and organizes it clean for you.",
    metric: "Audit-ready trail",
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
          Deployed Agents (Today)
        </motion.h2>

        <div className="grid gap-6 lg:grid-cols-3">
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
