"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g transform="translate(2.5, 2.5) scale(0.79)">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </g>
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g transform="translate(2.5, 2.5) scale(0.79)">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.94.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.26 5.67.42.36.79 1.08.79 2.18v3.24c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
      </g>
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <g transform="translate(2.5, 2.5) scale(0.79)">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g transform="translate(2.5, 2.5) scale(0.79)">
        <path d="M18.24 3H21l-6.55 7.49L22.2 21h-6.2l-4.86-6.36L5.5 21H2.72l7.02-8.03L2.1 3h6.35l4.4 5.82L18.24 3zm-1.08 16.2h1.72L7.9 4.7H6.05l11.11 14.5z" />
      </g>
    </svg>
  );
}

function SubstackIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g transform="translate(2, 2) scale(0.83)">
        <path d="M3 3h18v3.2H3V3zm0 5.6h18V12H3V8.6zm0 5.6h18v6.1L12 16.8 3 20.3v-6.1z" />
      </g>
    </svg>
  );
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com/in/bikashxdash", icon: LinkedInIcon },
  { label: "GitHub", href: "https://github.com/BikashxDash", icon: GithubIcon },
  { label: "Instagram", href: "https://instagram.com/bikashxdash", icon: InstagramIcon },
  { label: "X", href: "https://x.com/BikashxDash", icon: XIcon },
  { label: "Substack", href: "https://bikashdash.substack.com", icon: SubstackIcon },
];

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
    <section id="home" className="relative min-h-screen w-full overflow-hidden" aria-label="Introduction">
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
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-10 px-4 pb-16 pt-28 lg:flex-row lg:justify-center lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl text-center lg:text-left"
        >
          <p className="mb-4 inline-block rounded-full border border-border bg-surface-glass px-5 py-2 font-mono text-base text-text-secondary">
            Bikash Dash
          </p>

          <div>
            <h1 className="font-display text-2xl font-semibold leading-tight text-text-primary md:text-5xl">
              Full-stack developer, building toward SDE roles.
            </h1>
            <p className="mt-5 max-w-md text-base text-text-secondary md:text-lg mx-auto lg:mx-0">
              Final-year CS student who ships real products, not just
              projects — from database schema to pixel-perfect UI. Currently
              deep in DSA prep, chasing an SDE role at Atlassian.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="/resume.pdf"
              download
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:bg-surface-glass"
            >
              Get in touch
            </a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex items-center justify-center gap-6 lg:justify-start">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-all duration-300 hover:scale-125 hover:text-accent"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Profile picture, right side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-56 w-56 shrink-0 overflow-hidden rounded-full border border-border md:h-72 md:w-72 lg:h-96 lg:w-96"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-surface font-display text-4xl text-text-secondary">
            BD
          </div>
          <Image
            src="/Bikash.jpg"
            alt="Bikash Dash"
            fill
            priority
            sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
            className="relative z-10 object-cover scale-90"
          />
        </motion.div>
      </div>
    </section>
  );
}