"use client";

import Lenis from "lenis";
import type { ReactNode } from "react";
import { useEffect } from "react";

type PortfolioLenis = {
  scrollTo: (
    target: string | number | HTMLElement,
    options?: {
      duration?: number;
      immediate?: boolean;
      offset?: number;
    },
  ) => void;
};

type PortfolioWindow = Window & {
  __portfolioLenis?: PortfolioLenis;
  __isPopStateNavigation?: boolean;
};

const easing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.35,
      easing,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.2,
      anchors: {
        duration: 1.2,
        easing,
      },
    });

    const portfolioWindow = window as PortfolioWindow;
    portfolioWindow.__portfolioLenis = lenis;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handlePopState = () => {
      portfolioWindow.__isPopStateNavigation = true;
    };

    window.addEventListener("popstate", handlePopState);

    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("popstate", handlePopState);
      lenis.destroy();
      portfolioWindow.__portfolioLenis = undefined;
    };
  }, []);

  return <>{children}</>;
}