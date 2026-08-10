"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Server,
  Braces,
  Boxes,
  Palette,
  GitBranch,
  School,
  GraduationCap,
  BookOpen,
} from "lucide-react";

const GROUPS = [
  {
    tier: "Core",
    icon: Braces,
    color: "#A78BFA",
    items: [
      { label: "Data Structures & Algorithms", icon: Code2 },
      { label: "Java", icon: Code2 },
      { label: "SQL", icon: Database },
    ],
  },
  {
    tier: "Frontend",
    icon: Layout,
    color: "#2997FF",
    items: [
      { label: "Next.js", icon: Layout },
      { label: "React", icon: Boxes },
      { label: "Tailwind CSS", icon: Palette },
    ],
  },
  {
    tier: "Backend",
    icon: Server,
    color: "#34D399",
    items: [
      { label: "Node.js", icon: Server },
      { label: "PostgreSQL", icon: Database },
      { label: "Prisma", icon: GitBranch },
    ],
  },
];

const EDUCATION = [
  {
    tier: "School",
    icon: School,
    color: "#F472B6",
    institute: "Govt. UP High School, Kainfulia",
    detail: "Class 10, BSE",
    years: "2021",
    note: "Built foundation in mathematics and computer science fundamentals.",
  },
  {
    tier: "+2",
    icon: BookOpen,
    color: "#FBBF24",
    institute: "Divine Higher Secondary School, Nayagarh",
    detail: "Science, CHSE",
    years: "2021 – 2023",
    note: "Focused on Physics, Chemistry, and Mathematics with early programming interest.",
  },
  {
    tier: "College",
    icon: GraduationCap,
    color: "#6366F1",
    institute: "BPUT, Rourkela",
    detail: "B.Tech, Computer Science & Engineering",
    years: "2023 – 2027",
    note: "Deepened focus on full-stack development, DSA, and system design.",
  },
];

function TiltCard({ children, className }) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(springY, [0, 1], [10, -10]);
  const rotateY = useTransform(springX, [0, 1], [-10, 10]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.03 }}
        transition={{ scale: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

function SkillCard({ group, index }) {
  const GroupIcon = group.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 0 1px ${group.color}55` }}
        />
        <div style={{ transform: "translateZ(40px)" }} className="relative">
          <div className="mb-6 flex items-center gap-3">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${group.color}1A`, color: group.color }}
            >
              <GroupIcon size={22} strokeWidth={1.75} />
            </div>
            <h3 className="font-display text-lg font-semibold text-text-primary">{group.tier}</h3>
          </div>

          <ul className="flex flex-col gap-4">
            {group.items.map((item) => {
              const ItemIcon = item.icon;
              return (
                <li
                  key={item.label}
                  className="flex items-center gap-3 text-sm text-text-secondary transition-colors duration-300 group-hover:text-text-primary"
                >
                  <ItemIcon size={15} strokeWidth={1.75} className="shrink-0" style={{ color: group.color }} />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </TiltCard>
    </motion.div>
  );
}

function EducationCard({ edu, index }) {
  const EduIcon = edu.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7">
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 0 1px ${edu.color}55` }}
        />
        <div style={{ transform: "translateZ(40px)" }} className="relative">
          <div className="mb-5 flex items-center gap-3">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
              style={{ background: `${edu.color}1A`, color: edu.color }}
            >
              <EduIcon size={22} strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-text-primary">{edu.tier}</h3>
              <p className="font-mono text-xs text-text-secondary">{edu.years}</p>
            </div>
          </div>

          <p className="mb-1 text-base font-medium text-text-primary">{edu.institute}</p>
          <p className="mb-4 text-sm text-text-secondary">{edu.detail}</p>
          <p className="text-sm leading-relaxed text-text-secondary">{edu.note}</p>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full overflow-hidden px-6 py-24 md:px-16 md:py-32">
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
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mb-16 max-w-xl text-3xl font-semibold leading-snug text-text-primary md:text-4xl"
        >
          What I build with.
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GROUPS.map((group, i) => (
            <SkillCard key={group.tier} group={group} index={i} />
          ))}
        </div>

        {/* Education */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mb-16 mt-24 max-w-xl text-3xl font-semibold leading-snug text-text-primary md:text-4xl"
        >
          Education.
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EDUCATION.map((edu, i) => (
            <EducationCard key={edu.tier} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}