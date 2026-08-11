"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

// Custom inline icons — lucide-react removed brand/logo icons, so these are hand-drawn to avoid future breakage
function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.94.57.1.78-.25.78-.55v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.26 5.67.42.36.79 1.08.79 2.18v3.24c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.24 3H21l-6.55 7.49L22.2 21h-6.2l-4.86-6.36L5.5 21H2.72l7.02-8.03L2.1 3h6.35l4.4 5.82L18.24 3zm-1.08 16.2h1.72L7.9 4.7H6.05l11.11 14.5z" />
    </svg>
  );
}

const LINKS = [
  {
    label: "Email",
    value: "contact.bikashdash.com",
    href: "mailto:your-email@example.com",
    icon: (props) => <Mail {...props} size={(props.size || 16) + 3} strokeWidth={1.75} />,
  },
  {
    label: "LinkedIn",
    value: "bikash-dash",
    href: "https://linkedin.com/in/bikash-dash-844b70338",
    icon: (props) => <LinkedInIcon {...props} />,
  },
  {
    label: "GitHub",
    value: "BikashxDash",
    href: "https://github.com/BikashxDash",
    icon: (props) => <GithubIcon {...props} />,
  },
  {
    label: "Instagram",
    value: "@bikashxdash",
    href: "https://instagram.com/bikashxdash",
    icon: (props) => <InstagramIcon {...props} />,
  },
  {
    label: "X",
    value: "@IAMBIKASHDASH",
    href: "https://x.com/IAMBIKASHDASH",
    icon: (props) => <XIcon {...props} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative w-full overflow-hidden px-6 py-24 md:px-16 md:py-32">
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(circle, #6366F1, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 inline-block rounded-full border border-border bg-surface-glass px-5 py-2 text-base font-mono text-text-secondary"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mb-6 max-w-xl text-3xl font-semibold leading-snug text-text-primary md:text-4xl"
        >
          Let&apos;s talk.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-lg text-base leading-relaxed text-text-secondary md:text-lg"
        >
          Open to SDE roles and full-stack opportunities. Reach out directly —
          I usually reply within a day.
        </motion.p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {LINKS.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 6 }}
                className="group flex items-center justify-between rounded-2xl border border-border bg-surface px-6 py-5 transition-colors hover:border-accent/40"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={14} />
                  </div>
                  <div>
                    <p className="text-xs text-text-secondary">{link.label}</p>
                    <p className="text-base text-text-primary">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.75}
                  className="text-text-secondary transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}