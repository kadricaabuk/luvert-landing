"use client";
import { motion, Transition } from "motion/react";

interface LuvertWordmarkProps {
  className?: string;
  animated?: boolean;
  size?: "sm" | "md" | "lg";
}

export function LuvertWordmark({ className = "", animated = false, size = "md" }: LuvertWordmarkProps) {
  // Wordmark dimensions based on viewBox (102x25)
  const aspectRatio = 102 / 25;
  const heights = {
    sm: 18, // ~text-lg equivalent
    md: 24, // ~text-2xl equivalent  
    lg: 36  // ~text-4xl equivalent
  };
  const height = heights[size];
  const width = height * aspectRatio;
  // Wordmark paths from logo.svg (paths 6-11, indices 5-10)
  // These represent the "LUVERT" text in order: R, L, U, V, E, T
  // Note: paths are in reverse order in SVG, but we'll render them as-is
  const wordmarkPaths = [
    { d: "M31 21.557V2H33.9507V19.0169H42.8125V21.557H31Z", delay: 0 }, // R
    { d: "M58.7552 2H61.7155V14.8629C61.7155 16.2317 61.394 17.4444 60.751 18.5012C60.108 19.5517 59.204 20.3793 58.039 20.9841C56.874 21.5825 55.5084 21.8817 53.9423 21.8817C52.3826 21.8817 51.0202 21.5825 49.8552 20.9841C48.6902 20.3793 47.7862 19.5517 47.1432 18.5012C46.5002 17.4444 46.1787 16.2317 46.1787 14.8629V2H49.1295V14.6242C49.1295 15.5091 49.3236 16.2953 49.712 16.9829C50.1067 17.6704 50.6637 18.2116 51.3831 18.6063C52.1025 18.9946 52.9555 19.1888 53.9423 19.1888C54.9354 19.1888 55.7917 18.9946 56.5111 18.6063C57.2368 18.2116 57.7907 17.6704 58.1727 16.9829C58.561 16.2953 58.7552 15.5091 58.7552 14.6242V2Z", delay: 0.1 }, // L
    { d: "M67.7146 2L73.1577 17.9283H73.3774L78.8205 2H82.01L74.9721 21.557H71.563L64.5251 2H67.7146Z", delay: 0.2 }, // U
    { d: "M84.8342 21.557V2H97.0956V4.54012H87.785V10.4989H96.4558V13.0295H87.785V19.0169H97.2102V21.557H84.8342Z", delay: 0.3 }, // V
    { d: "M101.037 21.557V2H108.008C109.523 2 110.781 2.26101 111.78 2.78304C112.786 3.30507 113.537 4.02764 114.034 4.95074C114.53 5.86748 114.779 6.92745 114.779 8.13067C114.779 9.32752 114.527 10.3811 114.024 11.2915C113.528 12.1955 112.776 12.899 111.771 13.4019C110.771 13.9048 109.514 14.1563 107.999 14.1563H102.718V11.6162H107.731C108.686 11.6162 109.463 11.4793 110.061 11.2056C110.666 10.9318 111.108 10.5339 111.389 10.0119C111.669 9.48985 111.809 8.86278 111.809 8.13067C111.809 7.39219 111.666 6.75238 111.379 6.21125C111.099 5.67012 110.656 5.25632 110.052 4.96984C109.453 4.67699 108.667 4.53057 107.693 4.53057H103.988V21.557H101.037ZM110.691 12.7334L115.523 21.557H112.162L107.426 12.7334H110.691Z", delay: 0.4 }, // E
    { d: "M117.405 4.54012V2H132.54V4.54012H126.438V21.557H123.497V4.54012H117.405Z", delay: 0.5 } // T
  ];

  const MotionWrapper = animated ? motion.svg : "svg";
  const motionProps = animated
    ? {
        initial: { opacity: 0, y: 4 },
        animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
    : {};
  const transitionProps = (path: { delay: number; }) => animated
    ? {
      pathLength: { duration: 0.6, ease: "easeOut", delay: path.delay },
      opacity: { duration: 0.3, delay: path.delay }
    }
    : {};

  return (
    <MotionWrapper
      width={width}
      height={height}
      viewBox="31 0 102 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`luvert-wordmark ${className}`}
      {...motionProps}
    >
      {wordmarkPaths.map((path, index) => (
        <motion.path
          key={index}
          d={path.d}
          fill="currentColor"
          initial={animated ? { pathLength: 0, opacity: 0 } : undefined}
          animate={animated ? { pathLength: 1, opacity: 1 } : undefined}
          transition={
            animated
              ? transitionProps(path) as Transition<SVGPathElement>
              : undefined
          }
        />
      ))}
    </MotionWrapper>
  );
}
