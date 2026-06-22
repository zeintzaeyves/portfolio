import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/siteheader";
import { SiteFooter } from "@/components/footer/site-footer";
import { caseStudies } from "@/lib/portfolio-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f3f3f1] px-6 pb-0 pt-6 text-[#151515] md:px-8 lg:px-10">
      <SiteHeader />

      {/* Page header */}
      <section className="mt-16 grid grid-cols-1 gap-8 border-b border-black/10 pb-16 md:mt-24 md:grid-cols-12 md:items-start md:gap-5 md:pb-20 lg:mt-28 lg:gap-6">
        <div className="md:col-span-7">
          <Link
            href="/projects"
            className="inline-flex w-fit items-center gap-2 text-[14px] font-normal leading-none tracking-[-0.04em] text-black/45 transition-colors duration-300 hover:text-black"
          >
            <span>←</span>
            <span>Back to Projects</span>
          </Link>

          <div className="mt-10 max-w-[360px]">
            <p className="text-[14px] font-normal leading-[1.15] tracking-[-0.04em] text-black/40 md:text-[15px]">
              {study.number} / {study.year}
            </p>

            <p className="mt-3 text-[15px] font-normal leading-[1.18] tracking-[-0.045em] text-black/55 md:text-[16px]">
              {study.role}
            </p>
          </div>
        </div>

        <div className="md:col-span-5 md:-mt-[12px] lg:-mt-[18px]">
          <h1 className="text-[58px] font-normal leading-[0.86] tracking-[-0.095em] sm:text-[76px] md:text-[92px] lg:text-[112px] xl:text-[128px]">
            {study.title}
          </h1>

          <p className="mt-7 max-w-[620px] text-[17px] font-normal leading-[1.18] tracking-[-0.055em] text-black/65 md:text-[19px] lg:text-[21px]">
            {study.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            {study.liveUrl ? (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#151515] px-[18px] pb-[9px] pt-[9px] text-[13px] font-medium leading-none tracking-[-0.03em] transition-opacity duration-200 hover:opacity-70"
                style={{ color: "#f3f3f1" }}
              >
                <span style={{ color: "#f3f3f1" }}>Live site</span>
                <span
                  style={{ color: "#f3f3f1" }}
                  className="transition-transform duration-200 group-hover:translate-x-[3px]"
                >
                  →
                </span>
              </a>
            ) : (
              <p className="text-[15px] font-normal tracking-[-0.045em] text-black/45">
                Site is still in progress
              </p>
            )}

            <span className="rounded-full border border-black/10 px-4 py-2 text-[13px] leading-none tracking-[-0.035em] text-black/45">
              {study.status}
            </span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="mt-10 md:mt-12">
        <div className="relative h-[260px] overflow-hidden rounded-[24px] bg-black/[0.07] sm:h-[340px] md:h-[460px] lg:h-[560px]">
          <Image
            src={study.image}
            alt={study.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Details */}
      <section className="mt-24 grid grid-cols-1 gap-10 border-t border-black/10 pt-10 md:mt-32 md:grid-cols-12 md:gap-6">
        <div className="md:col-span-4">
          <h2 className="text-[44px] font-normal leading-none tracking-[-0.08em] md:text-[56px] lg:text-[64px]">
            Overview
          </h2>
        </div>

        <div className="space-y-10 md:col-span-8">
          <DetailBlock title="Overview" content={study.overview} />
          <DetailBlock title="Challenge" content={study.challenge} />
          <DetailBlock title="Solution" content={study.solution} />
          <DetailBlock title="Result" content={study.result} />
        </div>
      </section>

      {/* Stack */}
      <section className="mt-24 border-t border-black/10 pt-10 md:mt-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-4">
            <h2 className="text-[44px] font-normal leading-none tracking-[-0.08em] md:text-[56px] lg:text-[64px]">
              Stack
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 md:col-span-8 md:pt-2">
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
      </section>

      <div className="-mx-6 mt-20 md:-mx-8 lg:-mx-10">
        <SiteFooter />
      </div>
    </main>
  );
}

function DetailBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="border-t border-black/10 pt-8 first:border-t-0 first:pt-0">
      <p className="text-[14px] font-medium tracking-[-0.04em] text-black/40">
        {title}
      </p>

      <p className="mt-3 max-w-[820px] text-[18px] font-normal leading-[1.25] tracking-[-0.055em] text-black/70 md:text-[21px]">
        {content}
      </p>
    </div>
  );
}