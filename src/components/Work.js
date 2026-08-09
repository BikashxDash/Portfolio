"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    name: "Taskline",
    description:
      "Real-time full-stack task management app with live collaboration, built as an internship submission.",
    stack: ["Next.js", "TypeScript", "Socket.IO", "NextAuth.js"],
    github: "https://github.com/BikashxDash/Taskline",
    live: "",
    image: "Taskline.webp",
  },
  {
    name: "College Management System",
    description:
      "Role-based platform for attendance, records, and academics with real-time updates and OTP-verified login. My primary solo-built project.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Socket.IO"],
    github: "https://github.com/BikashxDash/College-Management-System",
    live: "",
    image: "public/CMS.jpg",
  },
  {
    name: "Ledger",
    description:
      "Budget tracker with a dark-gold aesthetic — built for web and as a native Android app.",
    stack: ["React", "Kotlin", "MVVM", "Room"],
    github: "https://github.com/BikashxDash/Ledger",
    live: "",
    image: null,
  },
  {
    name: "Habitual",
    description:
      "Habit tracker with a GitHub-style contribution heatmap and analytics dashboard.",
    stack: ["React", "Recharts"],
    github: "https://github.com/BikashxDash/Habitual",
    live: "",
    image: null,
  },
  {
    name: "Calculator",
    description:
      "A clean, functional calculator built with vanilla HTML, CSS, and JavaScript — no frameworks.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BikashxDash/Calculator",
    live: "",
    image: null,
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* Preview area — placeholder until real screenshots are added */}
      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden border-b border-border bg-bg">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #F5F5F7 1px, transparent 1px), linear-gradient(to bottom, #F5F5F7 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <span className="font-display relative text-2xl font-semibold text-text-secondary/40 transition-colors duration-300 group-hover:text-accent/60">
          {project.name}
        </span>
      </div>

      <div className="p-7">
        <h3 className="font-display mb-2 text-xl font-semibold text-text-primary">
          {project.name}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-3 py-1 font-mono text-xs text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              <Code2 size={15} strokeWidth={1.75} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              <ExternalLink size={15} strokeWidth={1.75} />
              Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative w-full overflow-hidden px-6 py-24 md:px-16 md:py-32">
      <div
        className="pointer-events-none absolute -right-40 top-1/4 h-[400px] w-[400px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "radial-gradient(circle, #2997FF, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F5F5F7 1px, transparent 1px), linear-gradient(to bottom, #F5F5F7 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3 font-mono text-sm text-text-secondary"
        >
          Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mb-16 max-w-xl text-3xl font-semibold leading-snug text-text-primary md:text-4xl"
        >
          Selected projects.
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}