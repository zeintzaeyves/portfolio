import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/siteheader";
import { SiteFooter } from "@/components/footer/site-footer";
import { caseStudies } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Projects — Zein Khalid",
  description:
    "Selected frontend development and UI/UX design projects by Zein Khalid.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] px-6 pt-6 text-[#151515] md:px-8 lg:px-10">
      <SiteHeader />

      {/* Page header */}
      <section className="mt-16 grid grid-cols-1 gap-8 border-b border-black/10 pb-16 md:mt-24 md:grid-cols-12 md:items-start md:gap-5 md:pb-20 lg:mt-28 lg:gap-6">
        <div className="md:col-span-7">
          <p className="max-w-[360px] text-[14px] font-normal leading-[1.15] tracking-[-0.04em] text-black/40 md:text-[15px]">
            Selected work across frontend development, UI/UX design, and web
            interface systems. Each project reflects my focus on clean layouts,
            responsive execution, smooth user flow, and building digital
            experiences that feel both functional and visually refined.
          </p>
        </div>

        <div className="md:col-span-5 md:-mt-[18px] lg:-mt-[24px]">
          <h1 className="text-[64px] font-normal leading-[0.86] tracking-[-0.095em] sm:text-[86px] md:text-[112px] lg:text-[138px] xl:text-[156px]">
            Projects
          </h1>
        </div>
      </section>

      {/* Project list */}
      <section>
        {caseStudies.map((study) => (
          <article
            key={study.slug}
            className="grid grid-cols-1 gap-6 border-b border-black/[0.09] py-10 md:grid-cols-[34px_minmax(0,6fr)_minmax(0,5fr)] md:gap-4 md:py-12 lg:grid-cols-[38px_minmax(0,6fr)_minmax(0,5fr)] lg:gap-5"
          >
            <div>
              <p className="text-[12px] font-normal tabular-nums tracking-[-0.02em] text-black/30 md:pt-1">
                {study.number}
              </p>
            </div>

            <div>
              <Link href={`/case-studies/${study.slug}`} className="block">
                <div className="relative h-[230px] overflow-hidden rounded-[24px] bg-black/[0.07] sm:h-[280px] md:h-[320px] lg:h-[360px]">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 52vw"
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>

            <div className="flex flex-col md:pl-4 md:pt-1 lg:pl-5">
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-[12px] font-normal tracking-[-0.03em] text-black/38">
                    {study.year}
                  </span>

                  <span className="h-[3px] w-[3px] rounded-full bg-black/20" />

                  <span
                    className={`rounded-full px-[9px] pb-[3.5px] pt-[3px] text-[11px] font-medium leading-none tracking-[0.01em] ${
                      study.status === "Live"
                        ? "bg-emerald-500/10 text-emerald-700/80"
                        : "bg-black/[0.06] text-black/45"
                    }`}
                  >
                    {study.status}
                  </span>
                </div>

                <h2 className="mb-3 text-[40px] font-normal leading-[0.9] tracking-[-0.085em] sm:text-[50px] md:text-[56px] lg:text-[66px]">
                  {study.title}
                </h2>

                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.055em] text-black/35">
                  {study.role}
                </p>

                <p className="mb-6 max-w-[560px] text-[15px] font-normal leading-[1.22] tracking-[-0.04em] text-black/52 md:text-[16px]">
                  {study.description}
                </p>

                <div className="mb-8 flex flex-wrap gap-[6px]">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/[0.18] px-[13px] pb-[5.5px] pt-[5px] text-[12px] font-normal leading-none tracking-[-0.025em] text-black/48"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3">
                <Link
                  href={`/case-studies/${study.slug}`}
                  style={{ color: "#f3f3f1" }}
                  className="group inline-flex items-center gap-[7px] rounded-full bg-[#151515] px-[18px] pb-[9px] pt-[9px] text-[13px] font-medium leading-none tracking-[-0.03em] transition-opacity duration-200 hover:opacity-70"
                >
                  <span style={{ color: "#f3f3f1" }}>See more</span>

                  <span
                    style={{ color: "#f3f3f1" }}
                    className="transition-transform duration-200 group-hover:translate-x-[3px]"
                  >
                    →
                  </span>
                </Link>

                {study.liveUrl ? (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-[5px] text-[13px] font-normal tracking-[-0.03em] text-black/38 transition-colors duration-200 hover:text-black/80"
                  >
                    Live site
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 9L9 2M9 2H4M9 2V7"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </section>

      <div className="-mx-6 mt-16 md:-mx-8 lg:-mx-10">
        <SiteFooter />
      </div>
    </main>
  );
}