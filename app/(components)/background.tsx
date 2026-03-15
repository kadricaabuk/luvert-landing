"use client";
import { useEffect, useState } from "react";

export function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to 0-1 range
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate parallax offset (subtle movement)
  const parallaxX = (mousePosition.x - 0.5) * 100;
  const parallaxY = (mousePosition.y - 0.5) * 100;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Deep black base layer */}
      <div className="absolute inset-0 bg-background" />

      {/* Precise grid pattern with perspective and parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `perspective(1200px) rotateX(1deg) translate(${parallaxX}px, ${parallaxY}px)`,
          transformOrigin: 'center center',
        }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
          style={{ opacity: 0.25 }}
        >
          <defs>
            {/* Grid pattern - uses foreground color for light/dark mode visibility */}
            <pattern
              id="infrastructure-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <line x1="0" y1="0" x2="0" y2="40" stroke="var(--foreground)" strokeWidth="0.5" />
              <line x1="0" y1="0" x2="40" y2="0" stroke="var(--foreground)" strokeWidth="0.5" />
            </pattern>

            {/* Radial gradient for vignette effect */}
            <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="50%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0.1" />
            </radialGradient>

            <mask id="grid-mask">
              <rect width="100%" height="100%" fill="url(#vignette)" />
            </mask>
          </defs>

          <rect width="100%" height="100%" fill="url(#infrastructure-grid)" mask="url(#grid-mask)" />
        </svg>
      </div>

      {/* Additional soft vignette overlay for depth with parallax */}
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-out"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, transparent 40%, var(--background) 70%, var(--background) 100%)',
          opacity: 0.8,
          transform: `translate(${parallaxX * -0.5}px, ${parallaxY * -0.5}px)`,
        }}
      />

      {/* Subtle top-to-bottom gradient for atmosphere */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, transparent 60%, var(--background) 100%)',
          opacity: 0.3,
        }}
      />
    </div>
  );
}
