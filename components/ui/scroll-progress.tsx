"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  className?: string;
  height?: number;
  color?: string;
}

export default function ScrollProgress({
  className,
  height = 3,
  color = "bg-primary",
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(scrollPercent);
    };

    // Update on scroll
    window.addEventListener("scroll", updateProgress, { passive: true });

    // Update on resize (page height might change)
    window.addEventListener("resize", updateProgress, { passive: true });

    // Initial calculation
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 transition-all duration-200 ease-out",
        className
      )}
      style={{ height: `${height}px` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    >
      <div
        className={cn(
          "h-full transition-all duration-200 ease-out shadow-sm",
          color
        )}
        style={{
          width: `${progress}%`,
          boxShadow: progress > 5 ? "0 0 10px rgba(59, 130, 246, 0.5)" : "none",
        }}
      />
    </div>
  );
}
