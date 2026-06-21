"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function BiographySection() {
  return (
    <section
      id="about"
      className="w-full bg-[#f3f3f1] px-6 pt-8 pb-16 text-[#151515] md:px-8 md:pt-10 md:pb-20 lg:px-10 lg:pt-12 lg:pb-24"
    >
      <motion.div
        initial={{ y: 28, opacity: 0, filter: "blur(8px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div className="w-full space-y-5">
          <p className="w-full text-[18px] font-normal leading-[1.18] tracking-[-0.045em] text-black/60 md:text-[23px] lg:text-[30px]">
            I am{" "}
            <span className="font-bold text-black">Zein Khalid Bulaclac</span>,
            a freelance{" "}
            <span className="font-bold text-black">
              UI/UX Web Designer and Front-end developer
            </span>{" "}
            based in the Philippines. Since 2024, I have been working on thesis
            projects and side projects, helping clients bring their ideas to
            life through clean design and functional web experiences.
          </p>

          <p className="w-full text-[18px] font-normal leading-[1.18] tracking-[-0.045em] text-black/60 md:text-[23px] lg:text-[30px]">
            With a strong focus on frontend development and design, I also have{" "}
            <span className="font-bold text-black">
              background in backend development and AI integration
            </span>
            , allowing me to build more complete and modern digital solutions. I
            enjoy creating user-friendly interfaces and continuously improving
            my skills to keep up with evolving technologies.
          </p>
        </div>

        <Link
          href="/biography"
          className="group mt-7 inline-flex w-fit items-center gap-2 text-[15px] font-normal tracking-[-0.045em] text-black transition-opacity duration-300 hover:opacity-55"
        >
          <span>Learn more about me</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
