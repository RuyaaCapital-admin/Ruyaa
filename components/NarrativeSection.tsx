"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function NarrativeSection() {
  return (
    <section className="bg-black text-white px-6 py-32 sm:px-12 lg:px-24 border-t border-white/10 border-b border-white/10">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
        <motion.div
          className="text-[clamp(1.5rem,2vw,2rem)] font-medium leading-[1.1] tracking-[-0.03em]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          <p>
            You don’t need “another chatbot.”
            You need a reliable AI workforce
            that actually does the work:
            answers clients, qualifies leads,
            sends follow-ups, collects documents,
            pushes updates, closes tickets,
            and never goes offline.
          </p>
        </motion.div>

        <motion.div
          className="text-neutral-400 text-base leading-relaxed max-w-md"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true, margin: "-20%" }}
        >
          <p className="mb-6">
            RuyaaCapital deploys production-grade AI agents into
            high-friction channels (WhatsApp, internal ops, finance,
            government services, rental logistics). These agents follow
            your rules, log everything, and report to you.
          </p>
          <p>
            This is not demo tech. This is headcount replacement,
            response-time compression, and zero-excuse accountability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
