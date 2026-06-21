"use client";

import { motion } from "motion/react";
import { SiteHeader } from "@/components/siteheader";
import { HeroInfo } from "@/components/hero/hero-info";
import { ProjectPreviewGrid } from "@/components/hero/project-preview-grid";
import { AnimatedGreeting } from "@/components/hero/animated-greeting";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen overflow-hidden bg-[#f3f3f1] px-6 pb-8 pt-6 text-[#151515] md:px-8 lg:px-10"
    >
      <SiteHeader />

      <div className="mt-[90px] grid grid-cols-12 items-end gap-8 md:mt-[120px] md:gap-6 lg:mt-[145px]">
        <HeroInfo />

        <motion.div
          initial={{ y: 34, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-start-5 md:col-span-8 lg:col-start-5 lg:col-span-8"
        >
          <AnimatedGreeting />
        </motion.div>
      </div>

      <ProjectPreviewGrid />
    </section>
  );
}