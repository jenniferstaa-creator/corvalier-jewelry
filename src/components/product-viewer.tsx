"use client";

import { useEffect, useRef, useState } from "react";

type ProductViewerProps = {
  src: string;
  alt: string;
  poster?: string;
  tones: [string, string, string];
};

/**
 * A maison-grade 3D viewer built on Google's <model-viewer>.
 * Supports: drag to rotate, scroll / pinch to zoom, idle auto-rotate,
 * and full touch responsiveness on mobile (touch-action: pan-y so the
 * page can still be scrolled past the viewer).
 */
export function ProductViewer({ src, alt, poster, tones }: ProductViewerProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading"
  );
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onLoad = () => setStatus("ready");
    const onError = () => setStatus("error");

    el.addEventListener("load", onLoad);
    el.addEventListener("error", onError);

    // In case the element loaded before listeners attached.
    if ((el as unknown as { loaded?: boolean }).loaded) setStatus("ready");

    return () => {
      el.removeEventListener("load", onLoad);
      el.removeEventListener("error", onError);
    };
  }, [src]);

  // Reflect the autoRotate toggle onto the custom element.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (autoRotate) el.setAttribute("auto-rotate", "");
    else el.removeAttribute("auto-rotate");
  }, [autoRotate]);

  const resetView = () => {
    const el = ref.current as
      | (HTMLElement & {
          cameraOrbit?: string;
          fieldOfView?: string;
          resetTurntableRotation?: () => void;
        })
      | null;
    if (!el) return;
    el.setAttribute("camera-orbit", "0deg 75deg 105%");
    el.setAttribute("field-of-view", "30deg");
    el.resetTurntableRotation?.();
  };

  return (
    <div className="group relative">
      <div
        className="relative aspect-square w-full overflow-hidden rounded-[2px] sm:aspect-[4/5]"
        style={{
          background: `radial-gradient(120% 120% at 30% 20%, ${tones[2]}22 0%, ${tones[0]} 55%, ${tones[1]}33 100%)`,
        }}
      >
        {/* loading veil */}
        {status === "loading" && (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <span className="h-10 w-10 animate-spin rounded-full border border-champagne/30 border-t-champagne" />
              <span className="font-sans text-[0.62rem] uppercase tracking-maison text-ivory/70">
                Rendering the piece
              </span>
            </div>
          </div>
        )}

        <model-viewer
          ref={ref as never}
          src={src}
          alt={alt}
          poster={poster}
          camera-controls=""
          auto-rotate=""
          auto-rotate-delay="2400"
          rotation-per-second="14deg"
          interaction-prompt="none"
          shadow-intensity="1.1"
          shadow-softness="1"
          exposure="1.05"
          tone-mapping="neutral"
          camera-orbit="0deg 75deg 105%"
          min-camera-orbit="auto auto 60%"
          max-camera-orbit="auto auto 180%"
          field-of-view="30deg"
          touch-action="pan-y"
          loading="eager"
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            opacity: status === "ready" ? 1 : 0,
            transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1)",
            ["--poster-color" as string]: "transparent",
          }}
        >
          <div slot="progress-bar" />
        </model-viewer>

        {status === "error" && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 px-8 text-center">
            <span className="font-display text-2xl text-ivory">
              {alt}
            </span>
            <span className="font-sans text-[0.62rem] uppercase tracking-maison text-ivory/70">
              Presented in the salon
            </span>
          </div>
        )}

        {/* corner frame */}
        <div className="pointer-events-none absolute inset-5 z-0 border border-champagne/15" />
      </div>

      {/* controls */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-5">
          <button
            type="button"
            onClick={() => setAutoRotate((v) => !v)}
            className="font-sans text-[0.62rem] uppercase tracking-wide2 text-espresso/70 transition-colors hover:text-champagne-deep"
          >
            {autoRotate ? "Pause rotation" : "Resume rotation"}
          </button>
          <button
            type="button"
            onClick={resetView}
            className="font-sans text-[0.62rem] uppercase tracking-wide2 text-espresso/70 transition-colors hover:text-champagne-deep"
          >
            Reset view
          </button>
        </div>
        <span className="hidden font-sans text-[0.58rem] uppercase tracking-wide2 text-espresso/40 sm:inline">
          Drag to rotate · Scroll to zoom
        </span>
      </div>
    </div>
  );
}
