"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-border px-6 py-8 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-text-secondary md:flex-row">
        <p>© {year} Bikash Dash. All rights reserved.</p>
        <p>Made with ❤️</p>
      </div>
    </footer>
  );
}