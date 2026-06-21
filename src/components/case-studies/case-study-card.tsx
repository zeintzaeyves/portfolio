"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { caseStudies } from "@/lib/portfolio-data";

type CaseStudy = (typeof caseStudies)[number];

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <motion.article
      initial={{ y: 36, opacity: 0, filter: "blur(8px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="border-t border-black/10 py-8 last:border-b md:py-10"
    >
      <div className="grid grid-cols-12 gap-5 md:gap-8">
        <div className="col-span-12 md:col-span-1">
          <span className="text-[14px] font-normal tracking-[-0.04em] text-black/40 md:text-[16px]">
            {study.number}
          </span>
        </div>

        <div className="col-span-12 overflow-hidden rounded-[26px] bg-black/5 md:col-span-5 lg:col-span-5">
          <div className="relative h-[260px] md:h-[330px] lg:h-[390px]">
            <Image
              src={study.image}
              alt={study.title}
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="col-span-12 flex flex-col justify-between md:col-span-6 lg:col-span-6">
          <div>
            <div className="flex items-start justify-between gap-6">
              <h3 className="max-w-[720px] text-[46px] font-normal leading-[0.9] tracking-[-0.085em] text-black md:text-[64px] lg:text-[82px]">
                {study.title}
              </h3>

              <span className="hidden text-[14px] tracking-[-0.04em] text-black/40 md:block">
                {study.year}
              </span>
            </div>

            <p className="mt-4 text-[15px] font-normal leading-[1.15] tracking-[-0.045em] text-black/45 md:text-[17px]">
              {study.role}
            </p>

            <p className="mt-8 max-w-[560px] text-[18px] font-normal leading-[1.18] tracking-[-0.055em] text-black/75 md:text-[22px]">
              {study.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 px-4 py-2 text-[13px] leading-none tracking-[-0.035em] text-black/55"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/case-studies/${study.slug}`}
              className="group inline-flex items-center gap-2 text-[15px] font-normal tracking-[-0.045em] text-black transition-opacity duration-300 hover:opacity-55"
            >
              <span>See more</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
