"use client";

// Same custom icons as Contact.js — kept local here so Footer has no dependency on Contact
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

function SubstackIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g transform="translate(3.5, 3.5) scale(0.7)">
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-border px-6 py-10 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="text-sm text-text-secondary">
          © {year} Bikash Dash. All rights reserved.
        </p>
        <p className="text-sm text-text-secondary">Made with ❤️</p>

        <div className="mt-2 flex items-center gap-7 rounded-full border border-border bg-transparent px-2 py-2">
          {SOCIALS.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-text-secondary transition-all duration-300 hover:scale-125 hover:text-text-primary"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}