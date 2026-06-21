"use client";

import { motion } from "motion/react";
import { caseStudies } from "@/lib/portfolio-data";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";

export function CaseStudiesSection() {
  return (
    <section
      id="projects"
      className="bg-[#f3f3f1] px-6 pt-24 pb-8 text-[#151515] md:px-8 md:pt-32 md:pb-10 lg:px-10 lg:pt-40 lg:pb-12"
    >
      <div className="grid grid-cols-12 gap-6">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-span-4 lg:col-span-3"
        >
          <p className="text-[17px] font-medium leading-none tracking-[-0.055em]">
            Case Studies
          </p>

          <p className="mt-4 max-w-[280px] text-[15px] font-normal leading-[1.15] tracking-[-0.045em] text-black/45 md:text-[17px]">
            Selected work focused on interface design, frontend development,
            responsive systems, and polished digital experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 36, opacity: 0, filter: "blur(8px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-12 md:col-span-8 lg:col-span-9"
        >
          <h2 className="max-w-[980px] text-[58px] font-normal leading-[0.9] tracking-[-0.09em] md:text-[86px] lg:text-[112px] xl:text-[126px]">
            Selected case studies and interface explorations.
          </h2>
        </motion.div>
      </div>

      <div className="mt-20 md:mt-28">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.title} study={study} />
        ))}
      </div>
    </section>
  );
}