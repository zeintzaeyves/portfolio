"use client";

import { motion } from "motion/react";
import { HeroSection } from "@/components/hero/hero-section";
import { CaseStudiesSection } from "@/components/case-studies/case-studies-section";
import { BiographySection } from "@/components/biography/biography-section";
import { MetricsSection } from "@/components/metrics/metrics-section";
import { QuoteBannerSection } from "@/components/quote-banner/quote-banner-section";
import { SiteFooter } from "@/components/footer/site-footer";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="min-h-screen bg-[#f3f3f1] text-[#151515]"
    >
      <HeroSection />
      <CaseStudiesSection />
      <BiographySection />
      <MetricsSection />
      <QuoteBannerSection />
      <SiteFooter />
    </motion.main>
  );
}