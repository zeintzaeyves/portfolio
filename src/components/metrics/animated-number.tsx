"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type AnimatedNumberProps = {
  value: number;
  suffix?: string;
};

const DURATION = 1400;

function easeOutExpo(progress: number) {
  return progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
}

export function AnimatedNumber({ value, suffix = "" }: AnimatedNumberProps) {
  const elementRef = useRef<HTMLSpanElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const hasAnimatedRef = useRef(false);
  const [count, setCount] = useState(0);

  const startAnimation = useCallback(() => {
    if (hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    const startedAt = performance.now();

    const update = (time: number) => {
      const elapsed = time - startedAt;
      const progress = Math.min(elapsed / DURATION, 1);
      const easedProgress = easeOutExpo(progress);

      setCount(Math.round(easedProgress * value));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(update);
      }
    };

    frameRef.current = requestAnimationFrame(update);
  }, [value]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [startAnimation]);

  return (
    <span ref={elementRef} className="inline-block tabular-nums">
      {count}
      {suffix}
    </span>
  );
}