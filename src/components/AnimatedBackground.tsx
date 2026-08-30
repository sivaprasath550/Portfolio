"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import WebGLFallback from "./WebGLFallback";

const SignalFieldCanvas = dynamic(() => import("./SignalField"), {
  ssr: false,
  loading: () => <WebGLFallback />,
});

/**
 * Animated background wrapper.
 * - Dynamically imports the R3F canvas (no SSR, code-split)
 * - Falls back to CSS gradient + SVG grid if WebGL not supported
 * - Fades in over 900ms on load
 */
export default function AnimatedBackground() {
  const [supportsWebGL, setSupportsWebGL] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Detect WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setSupportsWebGL(false);
      }
    } catch {
      setSupportsWebGL(false);
    }
  }, []);

  return (
    <div
      className="transition-opacity duration-[900ms] ease-out"
      style={{ opacity: mounted ? 1 : 0 }}
    >
      {supportsWebGL ? <SignalFieldCanvas /> : <WebGLFallback />}
    </div>
  );
}
