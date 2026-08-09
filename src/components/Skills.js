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

function SkillCard({ group, index }) {
  const cardRef = useRef(null);
  const GroupIcon = group.icon;

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [10, -10]);
  const rotateY = useTransform(springX, [0, 1], [-10, 10]);
  const shineX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const shineY = useTransform(springY, [0, 1], ["0%", "100%"]);

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
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale: 1.03 }}
        transition={{ scale: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
        className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7"
      >
        {/* Cursor-follow shine */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at ${shineX} ${shineY}, ${group.color}22, transparent 70%)`,
          }}
        />

        {/* Border glow ring */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
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

            <h3 className="font-display text-lg font-semibold text-text-primary">
              {group.tier}
            </h3>
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
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative w-full overflow-hidden px-6 py-24 md:px-16 md:py-32">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {GROUPS.map((group, i) => (
            <SkillCard key={group.tier} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
