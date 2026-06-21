import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <main className="min-h-screen bg-[#f3f3f1] px-6 py-8 text-[#151515] md:px-10 lg:px-[70px]">
      <header className="grid grid-cols-3 items-start">
        <Link
          href="/#projects"
          className="w-fit text-[14px] font-normal leading-none tracking-[-0.04em] text-black"
        >
          Back
        </Link>

        <Link
          href="/"
          className="justify-self-center text-[14px] font-bold leading-none tracking-[-0.045em] text-black"
        >
          zeinkhalid.
        </Link>

        <a
          href="mailto:bulaclaczeinkhalidjornadal@gmail.com"
          className="justify-self-end border-b border-black text-[14px] font-normal leading-none tracking-[-0.04em] text-black"
        >
          let&apos;s connect
        </a>
      </header>

      <section className="mt-24 grid grid-cols-12 gap-6 md:mt-32 lg:mt-40">
        <div className="col-span-12 md:col-span-4">
          <p className="text-[15px] font-normal leading-[1.1] tracking-[-0.045em] text-black/45">
            {study.number} / {study.year}
          </p>

          <p className="mt-3 max-w-[280px] text-[15px] font-normal leading-[1.15] tracking-[-0.045em] text-black/55">
            {study.role}
          </p>
        </div>

        <div className="col-span-12 md:col-span-8">
          <h1 className="text-[58px] font-normal leading-[0.9] tracking-[-0.09em] md:text-[88px] lg:text-[124px]">
            {study.title}
          </h1>

          <p className="mt-8 max-w-[850px] text-[18px] font-normal leading-[1.22] tracking-[-0.055em] text-black/70 md:text-[22px]">
            {study.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {study.liveUrl ? (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[16px] font-normal tracking-[-0.045em] text-black transition-opacity duration-300 hover:opacity-55"
              >
                <span>Live site</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            ) : (
              <p className="text-[16px] font-normal tracking-[-0.045em] text-black/45">
                Site is still in progress
              </p>
            )}

            <span className="rounded-full border border-black/10 px-4 py-2 text-[13px] leading-none tracking-[-0.035em] text-black/45">
              {study.status}
            </span>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="relative h-[320px] overflow-hidden rounded-[28px] bg-black/5 md:h-[520px] lg:h-[620px]">
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

      <section className="mt-24 grid grid-cols-12 gap-8 border-t border-black/10 pt-10 md:mt-32">
        <div className="col-span-12 md:col-span-4">
          <h2 className="text-[34px] font-normal leading-none tracking-[-0.075em] md:text-[48px]">
            Overview
          </h2>
        </div>

        <div className="col-span-12 space-y-10 md:col-span-8">
          <DetailBlock title="Overview" content={study.overview} />
          <DetailBlock title="Challenge" content={study.challenge} />
          <DetailBlock title="Solution" content={study.solution} />
          <DetailBlock title="Result" content={study.result} />
        </div>
      </section>

      <section className="mt-24 border-t border-black/10 pt-10 md:mt-32">
        <h2 className="text-[34px] font-normal leading-none tracking-[-0.075em] md:text-[48px]">
          Stack
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 px-4 py-2 text-[13px] leading-none tracking-[-0.035em] text-black/55"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

function DetailBlock({ title, content }: { title: string; content: string }) {
  return (
    <div className="border-t border-black/10 pt-7 first:border-t-0 first:pt-0">
      <p className="text-[14px] font-medium tracking-[-0.04em] text-black/40">
        {title}
      </p>

      <p className="mt-3 max-w-[820px] text-[18px] font-normal leading-[1.25] tracking-[-0.055em] text-black/70 md:text-[22px]">
        {content}
      </p>
    </div>
  );
}
