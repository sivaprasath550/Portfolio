"use client";

import { useEffect, useState } from "react";

/**
 * CSS-only fallback for when WebGL is unavailable.
 * Renders a static radial gradient + faint SVG grid that looks intentional.
 */
export default function WebGLFallback() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      {/* Radial gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(91,233,216,0.04) 0%, rgba(5,7,14,0) 70%)",
        }}
      />
      {/* Faint grid overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="fallback-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="var(--color-trace, #5BE9D8)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fallback-grid)" />
      </svg>
    </div>
  );
}
