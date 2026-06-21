"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SegmentedProgress } from "@/components/metrics/segmented-progress";
import { AnimatedNumber } from "@/components/metrics/animated-number";

export function MetricsSection() {
  return (
    <section
      id="metrics"
      className="bg-[#f3f3f1] px-6 pt-10 pb-16 text-[#151515] md:px-8 md:pt-12 md:pb-20 lg:px-10 lg:pt-14 lg:pb-24"
    >
      <motion.div
        initial={{ y: 36, opacity: 0, filter: "blur(8px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="grid w-full grid-cols-1 gap-4 md:grid-cols-12 md:gap-5"
      >
        <div className="relative min-h-[520px] overflow-hidden rounded-[28px] bg-black/5 md:col-span-4 md:row-span-2">
          <Image
            src="/images/archi1.png"
            alt="Architecture inspired visual"
            fill
            sizes="(max-width: 768px) 100vw, 34vw"
            className="object-cover"
          />
        </div>

        <div className="rounded-[28px] bg-[#e4e4e1] p-7 md:col-span-4">
          <p className="text-[14px] font-medium tracking-[-0.04em] text-black/55">
            Tech Stacks
          </p>

          <h3 className="mt-11 max-w-[380px] text-[30px] font-medium leading-[0.98] tracking-[-0.075em] md:text-[34px] lg:text-[38px]">
            Figma, React, Tailwind, JavaScript, TypeScript, Open AI, Next.js &
            Node.js
          </h3>

          <div className="mt-9 flex justify-end">
            <Link
              href="/biography"
              className="inline-flex h-10 items-center justify-center rounded-full bg-white px-7 text-[13px] font-medium tracking-[-0.035em] text-black transition-opacity duration-300 hover:opacity-70"
            >
              View More
            </Link>
          </div>
        </div>

        <div className="flex min-h-[260px] items-center justify-center rounded-[28px] bg-[#e4e4e1] p-7 text-center md:col-span-4">
          <div>
            <p className="text-[14px] font-medium tracking-[-0.04em] text-black/45">
              Projects Delivered
            </p>

            <h3 className="mt-3 max-w-[330px] text-[38px] font-medium leading-[0.95] tracking-[-0.08em] md:text-[44px] lg:text-[52px]">
              <AnimatedNumber value={12} suffix="+" /> Projects since 2024
            </h3>
          </div>
        </div>

        <div className="rounded-[28px] bg-[#e4e4e1] p-7 md:col-span-4">
          <h3 className="text-[30px] font-medium leading-none tracking-[-0.075em] md:text-[34px] lg:text-[38px]">
            Currently Building
          </h3>

          <div className="mt-6 flex min-h-[340px] items-center justify-center rounded-[24px] bg-[#070707] p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.22)]">
            <div className="flex flex-col items-center justify-center">
              <SegmentedProgress value={62} />

              <div className="-mt-3 text-center">
                <h4 className="mt-4  text-[30px] font-normal leading-none tracking-[-0.075em] text-white">
                  Elevate
                </h4>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-[13px] tracking-[-0.04em] text-black/45">
            <span>62% Progress</span>

            <Link
              href="#projects"
              className="transition-colors hover:text-black"
            >
              View More
            </Link>
          </div>
        </div>

        <div className="relative min-h-[260px] overflow-hidden rounded-[28px] bg-[#111] p-7 text-white md:col-span-4">
          <Image
            src="/images/archi2.png"
            alt="Contact visual"
            fill
            sizes="(max-width: 768px) 100vw, 34vw"
            className="object-cover opacity-55"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/50" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <h3 className="max-w-[360px] text-[31px] font-medium leading-[0.98] tracking-[-0.075em] md:text-[36px] lg:text-[40px]">
                Got a project? I’ve got Wi-Fi and opinions.
              </h3>

              <p className="mt-3 text-[14px] tracking-[-0.04em] text-white/55">
                Good ideas start with a simple hello.
              </p>
            </div>

            <div className="flex justify-end">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bulaclaczeinkhalidjornadal@gmail.com&su=Project%20Inquiry&body=Hi%20Zein%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#000000" }}
                className="relative z-10 inline-flex h-10 items-center justify-center rounded-full bg-white px-7 text-[13px] font-medium tracking-[-0.035em] transition-opacity duration-300 hover:opacity-80"
              >
                Say Hello
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
