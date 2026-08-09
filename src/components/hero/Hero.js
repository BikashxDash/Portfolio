"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";

export default function Hero() {
  const bgRef = useRef(null);
  const isMobile = useIsMobile();
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (isMobile || reducedMotion) return;
    const el = bgRef.current;
    if (!el) return;

    const handleMove = (e) => {
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [isMobile, reducedMotion]);

  return (
    <section id="about" className="relative min-h-screen w-full overflow-hidden" aria-label="Introduction">
      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Cursor-follow spotlight */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute inset-0"
        style={{
          "--x": "50%",
          "--y": "40%",
          background:
            "radial-gradient(600px circle at var(--x) var(--y), rgba(99,102,241,0.12), transparent 70%)",
          transition: reducedMotion ? "none" : "background 0.05s linear",
        }}
      />

      {/* Soft ambient glow */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #6366F1, transparent 70%)" }}
      />

      {/* Content: text left, photo right */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-10 px-6 pb-16 pt-28 md:flex-row md:justify-center md:gap-24 md:px-16" >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-center md:text-left"
        >
          <p className="mb-4 inline-block rounded-full border border-border bg-surface-glass px-5 py-2 font-mono text-base text-text-secondary">
            Bikash Dash
          </p>
          <h1 className="font-display text-3xl font-semibold leading-tight text-text-primary md:text-6xl">
            Full-stack developer, building toward SDE roles.
          </h1>
          <p className="mt-5 max-w-md text-base text-text-secondary md:text-lg">
            Final-year B.Tech CSE at BPUT. I design and ship complete products — from database to interface.
          </p>
          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-glass"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        {/* Profile picture, right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-56 w-56 shrink-0 overflow-hidden rounded-full border border-border md:h-96 md:w-96"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-surface font-display text-4xl text-text-secondary">
            BD
          </div>
          <Image
            src="/Bikash.jpg"
            alt="Bikash Dash"
            fill
            sizes="288px"
            className="relative z-10 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}