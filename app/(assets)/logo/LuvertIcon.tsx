"use client";
import { motion } from "motion/react";

interface LuvertIconProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export function LuvertIcon({ size = 28, className = "", animated = false }: LuvertIconProps) {
  // Calculate aspect ratio based on original viewBox (20x25)
  const aspectRatio = 20 / 25;
  const height = size / aspectRatio;

  // Icon paths from logo-icon.svg
  const iconPaths = [
    { d: "M0 0.25H3.5V20.25H8.5V23.75H0V0.25Z", delay: 0.05 }, // L
    { d: "M18.75 1.62989L12.8563 14L9.75 12.3701L15.6437 0L18.75 1.62989Z", delay: 0.15 },
    { d: "M19.75 21.7623L17.1495 24.1836L10.75 15.6048L13.3505 13.1836L19.75 21.7623Z", delay: 0.45 },
    { d: "M11.25 16C12.6307 16 13.75 14.8807 13.75 13.5C13.75 12.1193 12.6307 11 11.25 11C9.86929 11 8.75 12.1193 8.75 13.5C8.75 14.8807 9.86929 16 11.25 16Z", delay: 0.3 }
  ];

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 20 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {iconPaths.map((path, index) => (
        <motion.path
          key={index}
          d={path.d}
          fill="currentColor"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
          transition={
            animated
              ? {
                pathLength: { duration: 0.8, ease: "easeOut", delay: path.delay },
                opacity: { duration: 0.3, delay: path.delay }
              }
              : undefined
          }
        />
      ))}
    </svg>
  );
}
