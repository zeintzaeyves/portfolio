"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const LOADING_DURATION = 2600;

export function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const restoredRef = useRef(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const restoreScroll = () => {
      if (restoredRef.current) return;

      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
      restoredRef.current = true;
    };

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const startedAt = performance.now();
    let frameId = 0;
    let closeTimeout = 0;

    const updateProgress = (time: number) => {
      const elapsed = time - startedAt;
      const currentProgress = Math.min((elapsed / LOADING_DURATION) * 100, 100);

      setProgress(Math.round(currentProgress));

      if (currentProgress < 100) {
        frameId = requestAnimationFrame(updateProgress);
        return;
      }

      closeTimeout = window.setTimeout(() => {
        restoreScroll();
        setIsLoading(false);
      }, 350);
    };

    frameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(closeTimeout);
      restoreScroll();
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f3f3f1]/45 text-[#151515] backdrop-blur-[18px]"
        >
          <motion.div
            initial={{ y: 18, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-center"
          >
            <p className="text-[72px] font-normal leading-none tracking-[-0.09em] text-black md:text-[96px]">
              {progress}%
            </p>

            <div className="mt-7 h-[1px] w-[180px] overflow-hidden bg-black/15">
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{
                  duration: 0.25,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="h-full bg-black"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}