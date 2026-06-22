import { HeroSection } from "@/components/hero/hero-section";
import { CaseStudiesSection } from "@/components/case-studies/case-studies-section";
import { BiographySection } from "@/components/biography/biography-section";
import { MetricsSection } from "@/components/metrics/metrics-section";
import { QuoteBannerSection } from "@/components/quote-banner/quote-banner-section";
import { SiteFooter } from "@/components/footer/site-footer";
import { InitialLoader } from "@/components/providers/initial-loader";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f3f1] text-[#151515]">
      <InitialLoader />
      <HeroSection />
      <CaseStudiesSection />
      <BiographySection />
      <MetricsSection />
      <QuoteBannerSection />
      <SiteFooter />
    </main>
  );
}