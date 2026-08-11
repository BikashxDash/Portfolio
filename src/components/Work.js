"use client";

import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
  {
    name: "Taskline",
    description:
      "Real-time task management app with live collaboration, built as an internship submission.",
    stack: ["Next.js", "TypeScript", "Socket.IO", "NextAuth.js"],
    github: "https://github.com/BikashxDash/Taskline",
    live: "",
    image: "/projects/taskline.png",
  },
  {
    name: "College Management System",
    description:
      "Role-based platform for attendance and academics with OTP-verified login. My primary solo project.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Socket.IO"],
    github: "https://github.com/BikashxDash/College-Management-System",
    live: "",
    image: "/projects/college-management-system.png",
  },
  {
    name: "Ledger",
    description:
      "Budget tracker with a dark-gold aesthetic, built for both web and native Android.",
    stack: ["React", "Kotlin", "MVVM", "Room"],
    github: "https://github.com/BikashxDash/Ledger",
    live: "",
    image: "/projects/ledger.png",
  },
  {
    name: "Habitual",
    description:
      "Habit tracker with a GitHub-style contribution heatmap and analytics dashboard.",
    stack: ["React", "Recharts"],
    github: "https://github.com/BikashxDash/Habitual",
    live: "",
    image: "/projects/habitual.png",
  },
  {
    name: "Calculator",
    description:
      "A clean, functional calculator built with vanilla HTML, CSS, and JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/BikashxDash/Calculator",
    live: "",
    image: "/projects/calculator.png",
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
      <div className="relative flex h-48 w-full items-center justify-center overflow-hidden border-b border-border bg-bg">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <span className="font-display relative z-0 text-2xl font-semibold text-text-secondary/40 transition-colors duration-300 group-hover:text-accent/60">
          {project.name}
        </span>
        {project.image && (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="relative z-10 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="p-7">
        <h3 className="font-display mb-2 text-xl font-semibold text-text-primary">
          {project.name}
        </h3>
        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-text-secondary">
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

        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:text-text-primary"
          >
            <Code2 size={15} strokeWidth={1.75} />
            Code
          </a>
          <a
            href={project.live || "#"}
            target={project.live ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm text-white transition-opacity hover:opacity-90"
          >
            <ExternalLink size={15} strokeWidth={1.75} />
            Live
          </a>
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
        style={{ background: "radial-gradient(circle, #6366F1, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--text-primary) 1.5px, transparent 1.5px), linear-gradient(to bottom, var(--text-primary) 1.5px, transparent 1.5px)",
          backgroundSize: "48px 48px, 48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4 inline-block rounded-full border border-border bg-surface-glass px-5 py-2 font-mono text-base text-text-secondary"
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}