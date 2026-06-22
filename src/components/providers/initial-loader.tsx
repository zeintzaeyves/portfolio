"use client";

import { useEffect, useRef, useState } from "react";

const LOADING_DURATION = 2600;

let hasShownHomeLoader = false;

export function InitialLoader() {
  const shouldShow = !hasShownHomeLoader;
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);
  const restoredRef = useRef(false);

  useEffect(() => {
    // Skip if already shown this session
    if (!shouldShow) return;

    hasShownHomeLoader = true;

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

    const startedAt = Date.now();

    const interval = window.setInterval(() => {
      const elapsed = Date.now() - startedAt;
      const nextProgress = Math.min(
        Math.round((elapsed / LOADING_DURATION) * 100),
        100,
      );

      setProgress(nextProgress);

      if (nextProgress >= 100) {
        window.clearInterval(interval);

        window.setTimeout(() => {
          restoreScroll();
          setVisible(false);
        }, 200);

        window.setTimeout(() => {
          setDone(true);
        }, 650);
      }
    }, 30);

    return () => {
      window.clearInterval(interval);
      restoreScroll();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Never rendered on SSR, and skip if already shown
  if (!shouldShow || done) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f3f3f1",
        opacity: visible ? 1 : 0,
        transition: "opacity 450ms cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: visible ? "auto" : "none",
        fontFamily: "Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#151515",
            fontSize: "clamp(72px, 10vw, 120px)",
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: "-0.09em",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          {progress}%
        </p>

        <div
          style={{
            marginTop: "28px",
            width: "180px",
            height: "1px",
            overflow: "hidden",
            background: "rgba(0, 0, 0, 0.15)",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "#151515",
              transition: "width 160ms cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}