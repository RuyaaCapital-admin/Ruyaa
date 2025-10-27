"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-32 sm:px-12 lg:px-24 border-t border-white/10"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h3
          className="text-white font-semibold leading-[0.9] tracking-[-0.04em] text-[clamp(2rem,3vw,3rem)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20%" }}
        >
          Tell us what to ship first.
        </motion.h3>

        <motion.p
          className="mt-4 text-neutral-400 text-base leading-relaxed max-w-xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={1}
          viewport={{ once: true, margin: "-20%" }}
        >
          Brief us on the bottleneck and preferred channels (WhatsApp, web,
          CRM, internal tools). We’ll assess feasibility and propose a
          phased rollout.
        </motion.p>

        <motion.form
          className="mt-12 grid gap-6 sm:grid-cols-2"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={2}
          viewport={{ once: true, margin: "-20%" }}
        >
          <div className="flex flex-col">
            <label className="text-sm text-neutral-300 mb-2">Name</label>
            <input
              className="bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-white/30"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-neutral-300 mb-2">Company / Org</label>
            <input
              className="bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-white/30"
              placeholder="Company / Project"
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label className="text-sm text-neutral-300 mb-2">WhatsApp / Direct line</label>
            <input
              className="bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-white/30"
              placeholder="+971..."
            />
          </div>

          <div className="flex flex-col sm:col-span-2">
            <label className="text-sm text-neutral-300 mb-2">
              What do you want automated first?
            </label>
            <textarea
              rows={4}
              className="bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-white/30 resize-none"
              placeholder="Example: Launch AI agent for inbound leads, sync to CRM, build KPI dashboard, and ship landing page."
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white hover:text-black transition"
            >
              Submit & Get Assessment
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
