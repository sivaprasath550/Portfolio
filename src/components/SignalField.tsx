"use client";

import { useRef, useMemo, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── Vertex shader ─────────────────────────────────────────────────────────
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

// ─── Fragment shader — ambient signal field ────────────────────────────────
const fragmentShader = `
  precision mediump float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uScrollProgress;
  uniform float uDesaturation;
  uniform float uIsMobile;

  varying vec2 vUv;

  // Hash for pseudo-random
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  // Smooth noise
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  // Fractal noise for organic flow
  float fbm(vec2 p) {
    float f = 0.0;
    f += 0.5 * noise(p); p *= 2.01;
    f += 0.25 * noise(p); p *= 2.02;
    f += 0.125 * noise(p);
    return f;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);

    // Slow time, further reduced when scrolled
    float speed = mix(1.0, 0.35, uDesaturation);
    float time = uTime * 0.15 * speed;

    // ── Mouse influence (subtle) ──
    vec2 mouseNorm = uMouse / uResolution;
    float mouseDist = length((uv - mouseNorm) * aspect);
    float mouseInfluence = smoothstep(0.3, 0.0, mouseDist) * (1.0 - uIsMobile);

    // ── Perspective grid ──
    // Faint dot-grid instead of full lines
    vec2 gridUv = uv;
    gridUv.y += uScrollProgress * 0.1;
    vec2 gridCell = fract(gridUv * 30.0);
    float dotSize = 0.06 + mouseInfluence * 0.03;
    float gridDot = smoothstep(dotSize, dotSize * 0.5, length(gridCell - 0.5));
    float gridFade = smoothstep(0.0, 0.4, uv.y) * smoothstep(1.0, 0.7, uv.y);
    float gridVal = gridDot * 0.025 * gridFade;

    // ── Flowing energy lines (very thin, faint, organic) ──
    float traces = 0.0;

    for (float i = 0.0; i < 5.0; i++) {
      float yBase = 0.15 + i * 0.175; // spread across viewport
      float freq = 2.0 + i * 0.8;
      float phaseOffset = i * 1.5;
      float ampBase = 0.015 + i * 0.005;

      // Organic wave using multiple sine harmonics
      float wave = sin(uv.x * freq * 3.14159 + time * (0.8 + i * 0.3) + phaseOffset) * ampBase;
      wave += sin(uv.x * freq * 2.0 + time * 0.5 + phaseOffset * 0.7) * ampBase * 0.5;
      wave += fbm(vec2(uv.x * 2.0 + time * 0.2, i * 10.0)) * 0.01;

      float y = uv.y - yBase;
      float dist = abs(y - wave);

      // Very thin trace line with soft glow
      float line = smoothstep(0.0015, 0.0, dist) * 0.6;
      float glow = smoothstep(0.025, 0.0, dist) * 0.08;

      // Fade traces toward left side where text lives
      float leftFade = smoothstep(0.0, 0.35, uv.x);
      // Boost slightly near cursor
      float cursorBoost = 1.0 + mouseInfluence * 0.5;

      traces += (line + glow) * leftFade * cursorBoost;
    }

    // ── Floating particles ──
    float particles = 0.0;
    float particleCount = mix(50.0, 20.0, uIsMobile);

    for (float i = 0.0; i < 50.0; i++) {
      if (i >= particleCount) break;

      vec2 seed = vec2(i * 17.31, i * 9.17);
      float speed2 = 0.015 + hash(seed + 3.0) * 0.01;

      vec2 pos = vec2(
        fract(hash(seed) + time * speed2),
        hash(seed + 2.0)
      );

      // Subtle curl-noise drift
      float n = noise(pos * 4.0 + time * 0.15);
      pos.y += (n - 0.5) * 0.03;

      float dist = length((uv - pos) * aspect);

      // Vary particle size
      float size = 0.002 + hash(seed + 5.0) * 0.002;
      float dot = smoothstep(size, size * 0.3, dist);

      // Brightness variation — pulse gently
      float pulse = 0.5 + 0.5 * sin(time * 3.0 + i * 2.0);
      float brightness = 0.15 + pulse * 0.15;

      // Brighter near cursor
      float mouseProx = smoothstep(0.35, 0.0, length((uv - mouseNorm) * aspect));
      brightness += mouseProx * 0.3 * (1.0 - uIsMobile);

      particles += dot * brightness;
    }

    // ── Compose ──
    vec3 traceColor = vec3(0.357, 0.914, 0.847); // --trace #5BE9D8
    vec3 gridColor = vec3(0.11, 0.15, 0.22);      // --edge subdued

    vec3 color = vec3(0.0);
    color += gridVal * gridColor;
    color += traces * traceColor;
    color += particles * traceColor * 0.6;

    // Desaturation when scrolled past hero
    float luma = dot(color, vec3(0.299, 0.587, 0.114));
    color = mix(color, vec3(luma), uDesaturation * 0.5);

    // Overall opacity — keep it ambient
    float totalBrightness = gridVal + traces + particles;
    float alpha = totalBrightness * mix(0.9, 0.4, uDesaturation);

    gl_FragColor = vec4(color, alpha);
  }
`;

// ─── Signal Field mesh ─────────────────────────────────────────────────────
function SignalFieldMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { size } = useThree();
  const [isMobile, setIsMobile] = useState(false);

  const mouseTarget = useRef(new THREE.Vector2(0.5, 0.5));
  const mouseCurrent = useRef(new THREE.Vector2(0.5, 0.5));
  const scrollProgress = useRef(0);
  const desaturation = useRef(0);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;
      mouseTarget.current.set(e.clientX, window.innerHeight - e.clientY);
    };

    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.85;
      const progress = Math.min(window.scrollY / heroHeight, 1);
      scrollProgress.current = progress;
      desaturation.current = progress;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      uMouse: { value: new THREE.Vector2(size.width / 2, size.height / 2) },
      uScrollProgress: { value: 0 },
      uDesaturation: { value: 0 },
      uIsMobile: { value: 0 },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    const material = meshRef.current.material as THREE.ShaderMaterial;

    material.uniforms.uTime.value = state.clock.elapsedTime;
    material.uniforms.uResolution.value.set(size.width, size.height);

    // Lerp mouse
    mouseCurrent.current.lerp(mouseTarget.current, 0.06);
    material.uniforms.uMouse.value.copy(mouseCurrent.current);

    material.uniforms.uScrollProgress.value = scrollProgress.current;
    material.uniforms.uDesaturation.value = desaturation.current;
    material.uniforms.uIsMobile.value = isMobile ? 1.0 : 0.0;
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

// ─── Main canvas component ─────────────────────────────────────────────────
export default function SignalFieldCanvas() {
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [frameloopState, setFrameloopState] = useState<"always" | "never">("always");

  useEffect(() => {
    // Check reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);

    // Visibility change — pause when tab is hidden
    const handleVisibility = () => {
      if (document.hidden) {
        setFrameloopState("never");
      } else {
        setFrameloopState("always");
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      mq.removeEventListener("change", handler);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // If reduced motion, render one static frame then stop
  useEffect(() => {
    if (prefersReducedMotion) {
      const timer = setTimeout(() => setFrameloopState("never"), 100);
      return () => clearTimeout(timer);
    }
  }, [prefersReducedMotion]);

  const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio : 1, 1.5);

  const handleContextLost = useCallback((e: Event) => {
    e.preventDefault();
    setIsVisible(false);
  }, []);

  const handleContextRestored = useCallback(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      {isVisible ? (
        <Canvas
          dpr={dpr}
          frameloop={frameloopState}
          gl={{
            alpha: true,
            antialias: false,
            powerPreference: "low-power",
            failIfMajorPerformanceCaveat: true,
          }}
          onCreated={({ gl }) => {
            gl.domElement.addEventListener("webglcontextlost", handleContextLost);
            gl.domElement.addEventListener("webglcontextrestored", handleContextRestored);
          }}
          style={{ position: "absolute", inset: 0 }}
          camera={{ position: [0, 0, 1] }}
        >
          <SignalFieldMesh />
        </Canvas>
      ) : null}
    </div>
  );
}
