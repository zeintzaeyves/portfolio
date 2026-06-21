"use client";

import { motion } from "motion/react";
import { usePathname, useSearchParams } from "next/navigation";
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

export function RouteTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const search = searchParams.toString();
  const routeKey = `${pathname}${search ? `?${search}` : ""}`;

  useEffect(() => {
    const portfolioWindow = window as PortfolioWindow;

    const timeout = window.setTimeout(() => {
      const hash = window.location.hash;
      const isBrowserBack = portfolioWindow.__isPopStateNavigation;

      portfolioWindow.__isPopStateNavigation = false;

      if (hash) {
        portfolioWindow.__portfolioLenis?.scrollTo(hash, {
          duration: 1.2,
          offset: 0,
        });

        return;
      }

      if (isBrowserBack) {
        const savedScroll = sessionStorage.getItem(`scroll:${routeKey}`);
        const scrollTarget = savedScroll ? Number(savedScroll) : 0;

        portfolioWindow.__portfolioLenis?.scrollTo(scrollTarget, {
          duration: 1.15,
        });

        return;
      }

      portfolioWindow.__portfolioLenis?.scrollTo(0, {
        immediate: true,
      });
    }, 80);

    return () => {
      sessionStorage.setItem(`scroll:${routeKey}`, String(window.scrollY));
      window.clearTimeout(timeout);
    };
  }, [routeKey]);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 22,
        filter: "blur(12px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        y: -14,
        filter: "blur(8px)",
      }}
      transition={{
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}