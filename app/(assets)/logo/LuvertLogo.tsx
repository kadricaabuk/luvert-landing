import { motion } from "motion/react";
import { LuvertIcon } from "./LuvertIcon";
import { LuvertWordmark } from "./LuvertWordmark";

interface LuvertLogoProps {
  variant?: "horizontal" | "stacked" | "icon-only" | "wordmark-only";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
  interactive?: boolean;
}

export function LuvertLogo({
  variant = "horizontal",
  size = "md",
  animated = false,
  className = "",
  interactive = false
}: LuvertLogoProps) {
  const iconSizes = {
    sm: 20,
    md: 28,
    lg: 40
  };

  // Text sizes are now handled by the SVG component itself

  if (variant === "icon-only") {
    const Wrapper = interactive ? motion.div : "div";
    const interactiveProps = interactive
      ? {
          whileHover: { opacity: 0.8 },
          transition: { duration: 0.2 }
        }
      : {};

    return (
      <Wrapper className={`inline-flex ${className}`} {...interactiveProps}>
        <LuvertIcon size={iconSizes[size]} animated={animated} />
      </Wrapper>
    );
  }

  if (variant === "wordmark-only") {
    const Wrapper = interactive ? motion.div : "div";
    const interactiveProps = interactive
      ? {
          whileHover: { opacity: 0.8 },
          transition: { duration: 0.2 }
        }
      : {};

    return (
      <Wrapper className={`inline-flex ${className}`} {...interactiveProps}>
        <LuvertWordmark size={size} animated={animated} />
      </Wrapper>
    );
  }

  const Wrapper = interactive ? motion.div : "div";
  const interactiveProps = interactive
    ? {
        whileHover: { opacity: 0.8 },
        transition: { duration: 0.2 }
      }
    : {};

  if (variant === "stacked") {
    return (
      <Wrapper
        className={`inline-flex flex-col items-center gap-3 ${className}`}
        {...interactiveProps}
      >
        <LuvertIcon size={iconSizes[size]} animated={animated} />
        <LuvertWordmark size={size} animated={animated} />
      </Wrapper>
    );
  }

  // Horizontal (default)
  return (
    <Wrapper
      className={`inline-flex items-center gap-3 ${className}`}
      {...interactiveProps}
    >
      <LuvertIcon size={iconSizes[size]} animated={animated} />
      <LuvertWordmark size={size} animated={animated} />
    </Wrapper>
  );
}
