import { Suspense } from "react";
import { RouteTransition } from "@/components/providers/route-transition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <RouteTransition>{children}</RouteTransition>
    </Suspense>
  );
}