import { SiteHeader } from "@/components/siteheader";
import { AnimatedGreeting } from "@/components/hero/animated-greeting";
import { HeroInfo } from "@/components/hero/hero-info";
import { ProjectPreviewGrid } from "@/components/hero/project-preview-grid";

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen overflow-hidden bg-[#f3f3f1] px-6 pt-6 text-[#151515] md:px-8 lg:px-10"
    >
      <SiteHeader />

      <div className="mt-16 grid grid-cols-1 gap-8 md:mt-24 md:grid-cols-12 md:items-end md:gap-6 lg:mt-28">
        <div className="order-1 md:order-2 md:col-span-8">
          <AnimatedGreeting />
        </div>

        <div className="order-2 md:order-1 md:col-span-4">
          <HeroInfo />
        </div>
      </div>

      <div className="mt-12 md:mt-16 lg:mt-20">
        <ProjectPreviewGrid />
      </div>
    </section>
  );
}