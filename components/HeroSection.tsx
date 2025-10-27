"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import BackgroundScene from "./BackgroundScene";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black px-6 py-24 sm:px-12 lg:px-24">
      <BackgroundScene />

      <div className="relative z-10 max-w-5xl">
        <motion.h1
          className="text-white font-semibold leading-[0.9] tracking-[-0.04em] text-[clamp(2.5rem,4vw,4rem)]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          AI Workforce for Your Business.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-neutral-300 text-lg leading-snug"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          We deploy autonomous AI agents that handle support, sales,
          finance, onboarding, and compliance — inside WhatsApp,
          your internal systems, and your workflow. No fluff.
          Only measurable output.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mt-10"
        >
          <a
            href="#contact"
            className="inline-block rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white hover:text-black transition"
          >
            Talk to an Engineer
          </a>
        </motion.div>
      </div>
    </section>
  );
}
