"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const greetings = [
  "Bonjour",
  "Hello",
  "Hola",
  "Ciao",
  "Kumusta",
  "Konnichiwa",
  "Annyeong",
  "Mabuhay",
];

export function AnimatedGreeting() {
  const [index, setIndex] = useState(0);

  const activeGreeting = greetings[index];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % greetings.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <h2 className="max-w-[1180px] text-[52px] font-normal leading-[0.94] tracking-[-0.085em] sm:text-[68px] md:text-[86px] lg:text-[112px] xl:text-[128px]">
      <span className="relative block h-[1.08em] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={activeGreeting}
            initial={{ y: "55%", opacity: 0, filter: "blur(12px)" }}
            animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
            exit={{ y: "-55%", opacity: 0, filter: "blur(12px)" }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-0 block whitespace-nowrap pb-[0.08em]"
          >
            {activeGreeting},
          </motion.span>
        </AnimatePresence>
      </span>

      <span className="block">I am Zein Khalid</span>
    </h2>
  );
}