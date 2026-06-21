"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

const SEGMENTS = 36;
const SIZE = 260;
const CENTER = SIZE / 2;
const INNER_RADIUS = 90;
const OUTER_RADIUS = 118;
const GAP_DEG = 3.5;

function fixed(value: number) {
  return Number(value.toFixed(3));
}

function buildSegmentPath(index: number): string {
  const segAngle = 360 / SEGMENTS;
  const startAngle = segAngle * index - 90;
  const endAngle = startAngle + segAngle - GAP_DEG;

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  const x1 = fixed(CENTER + INNER_RADIUS * Math.cos(toRad(startAngle)));
  const y1 = fixed(CENTER + INNER_RADIUS * Math.sin(toRad(startAngle)));
  const x2 = fixed(CENTER + OUTER_RADIUS * Math.cos(toRad(startAngle)));
  const y2 = fixed(CENTER + OUTER_RADIUS * Math.sin(toRad(startAngle)));
  const x3 = fixed(CENTER + OUTER_RADIUS * Math.cos(toRad(endAngle)));
  const y3 = fixed(CENTER + OUTER_RADIUS * Math.sin(toRad(endAngle)));
  const x4 = fixed(CENTER + INNER_RADIUS * Math.cos(toRad(endAngle)));
  const y4 = fixed(CENTER + INNER_RADIUS * Math.sin(toRad(endAngle)));

  return [
    `M ${x1} ${y1}`,
    `L ${x2} ${y2}`,
    `A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 0 1 ${x3} ${y3}`,
    `L ${x4} ${y4}`,
    `A ${INNER_RADIUS} ${INNER_RADIUS} 0 0 0 ${x1} ${y1}`,
    "Z",
  ].join(" ");
}

export function SegmentedProgress({ value = 62 }: { value?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-120px",
  });

  const [progress, setProgress] = useState(0);

  const segments = useMemo(() => {
    return Array.from({ length: SEGMENTS }).map((_, index) => ({
      id: index,
      d: buildSegmentPath(index),
    }));
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setProgress(latest);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  const activeSegments = Math.round((progress / 100) * SEGMENTS);

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      <svg
        width={SIZE}
        height={SIZE}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="overflow-visible"
        aria-hidden="true"
      >
        {/* Background track ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={(INNER_RADIUS + OUTER_RADIUS) / 2}
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={OUTER_RADIUS - INNER_RADIUS}
        />

        {/* Segments */}
        {segments.map((segment, index) => {
          const isActive = index < activeSegments;

          return (
            <path
              key={segment.id}
              d={segment.d}
              fill={isActive ? "#ffffff" : "#282828"}
              opacity={isActive ? 1 : 0.7}
              className="transition-all duration-300 ease-out"
            />
          );
        })}
      </svg>

      {/* Center label */}
      <div className="absolute flex flex-col items-center gap-0 pointer-events-none">
        <span
          className="text-white leading-none"
          style={{
            fontSize: 52,
            fontWeight: 400,
            letterSpacing: "-0.06em",
          }}
        >
          {Math.round(progress)}
        </span>
        <span
          className="text-white/45 uppercase tracking-widest"
          style={{ fontSize: 13, fontWeight: 400, marginTop: 4 }}
        >
          percent
        </span>
      </div>
    </div>
  );
}