"use client";

import { motion } from "motion/react";

export function HeroInfo() {
  return (
    <motion.aside
      initial={{ x: -24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="col-span-12 flex max-w-[420px] flex-col gap-12 self-end md:col-span-4 md:gap-20 lg:col-span-3"
    >
      <p className="max-w-[360px] text-[15px] font-normal leading-[1.15] tracking-[-0.045em] text-black/80 md:text-[17px] lg:text-[18px]">
        Frontend Developer and UI/UX Web Designer based in the Philippines,
        building clean, responsive, and user-centered digital experiences.
      </p>

      <div className="flex items-center gap-8 text-[12px] tracking-[-0.035em] text-black/55 md:gap-10 md:text-[13px]">
        <span>Last updated</span>
        <span className="text-black/75">06 - 21 - 2026</span>
      </div>
    </motion.aside>
  );
}