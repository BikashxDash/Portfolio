"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 z-50 w-full px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Pill 1: name */}
        <div className="glass-panel rounded-full px-5 py-2.5">
          <a href="#" className="font-display text-sm font-semibold text-text-primary">
            <span className="md:hidden">B</span>
            <span className="hidden md:inline">Bikash Dash</span>
          </a>
        </div>

        {/* Pill 2: links (desktop) / toggle + hamburger (mobile) */}
        <div className="glass-panel flex items-center gap-1 rounded-full px-2 py-2">
          <ul className="hidden items-center gap-6 px-3 md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <a
            href="/resume.pdf"
            download
            className="ml-1 hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:block"
          >
            Resume
          </a>

          {/* Hamburger, mobile only */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-8 w-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:text-text-primary md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel mx-auto mt-2 max-w-6xl rounded-2xl px-6 py-4 md:hidden"
          >
            <ul className="flex flex-col gap-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block text-base text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="block text-base text-accent"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}