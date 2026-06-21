"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { projectPreviews } from "@/lib/portfolio-data";

const middleIndex = Math.ceil(projectPreviews.length / 2);

const firstRow = projectPreviews.slice(0, middleIndex);
const secondRow = projectPreviews.slice(middleIndex);
type ProjectPreview = (typeof projectPreviews)[number];

function ProjectCard({ project }: { project: ProjectPreview }) {
  return (
    <article
      className={[
        project.width,
        "pointer-events-none relative h-[190px] shrink-0 select-none overflow-hidden rounded-[20px]",
        "bg-black/5 shadow-[0_18px_60px_rgba(0,0,0,0.08)]",
        "sm:h-[220px]",
        "md:h-[280px] md:rounded-[28px]",
        "lg:h-[320px]",
      ].join(" ")}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 420px, (max-width: 1024px) 560px, 640px"
        className="select-none object-cover"
        draggable={false}
        priority={project.title === "AI Assistant"}
      />
    </article>
  );
}

function MarqueeRow({
  projects,
  reverse = false,
}: {
  projects: ProjectPreview[];
  reverse?: boolean;
}) {
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="relative mt-12 flex w-full flex-col gap-4 overflow-hidden md:mt-16 md:gap-6">
      <div
        className={[
          "flex w-max gap-5 pr-5 md:gap-6 md:pr-6",
          reverse ? "portfolio-marquee-reverse" : "portfolio-marquee",
        ].join(" ")}
      >
        {duplicatedProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
}

export function ProjectPreviewGrid() {
  return (
    <motion.div
      initial={{ y: 45, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.95, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="relative left-1/2 mt-14 flex w-screen -translate-x-1/2 flex-col gap-5 overflow-hidden md:mt-16 md:gap-6"
    >
      <MarqueeRow projects={firstRow} />
      <MarqueeRow projects={secondRow} reverse />
    </motion.div>
  );
}
