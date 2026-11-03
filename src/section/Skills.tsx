"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Skill, type SkillProps } from "@/Skill";

type Category = "all" | "frontend" | "backend" | "database" | "tools" | "design";

const categoryLabels: Record<Category, string> = {
  all: `All (${Skill.length})`,
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools",
  design: "Design",
};

const colorMap: Record<
  string,
  { bar: string; text: string; bg: string; border: string }
> = {
  frontend: {
    bar: "bg-tertiary",
    text: "text-tertiary",
    bg: "bg-tertiary/10",
    border: "border-tertiary/30",
  },
  backend: {
    bar: "bg-primary",
    text: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/30",
  },
  database: {
    bar: "bg-secondary",
    text: "text-secondary",
    bg: "bg-secondary/10",
    border: "border-secondary/30",
  },
  tools: {
    bar: "bg-emerald-400",
    text: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
  },
  design: {
    bar: "bg-amber-400",
    text: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/30",
  },
};

function SkillCard({ skill }: { skill: SkillProps }) {
  const colors = colorMap[skill.category] || colorMap.frontend;
  return (
    <div className="tech-card spotlight-card group p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 hover:border-tertiary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between gap-4">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center group-hover:scale-110 transition-transform overflow-hidden">
          <Image
            src={`/interesting${skill.image}`}
            alt={skill.name}
            width={24}
            height={24}
            className="w-6 h-6 object-contain"
          />
        </div>
        {skill.label && (
          <span
            className={`px-2 py-0.5 rounded font-mono text-[10px] ${colors.bg} ${colors.text} font-semibold uppercase tracking-wider`}
          >
            {skill.label}
          </span>
        )}
      </div>
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <h4
            className={`font-headline font-bold text-sm text-white group-hover:${colors.text} transition-colors`}
          >
            {skill.name}
          </h4>
          <span className="font-mono text-xs text-outline capitalize">
            {skill.category}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 flex-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div
              className={`h-full ${colors.bar} rounded-full skill-bar-fill`}
              style={{ width: `${skill.proficiency}%` }}
            />
          </div>
          <span className={`font-mono text-[10px] ${colors.text} font-bold`}>
            {skill.proficiency}%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredSkills =
    activeCategory === "all"
      ? Skill
      : Skill.filter((s) => s.category === activeCategory);

  return (
    <section
      className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 py-16"
      id="skills"
    >
      {/* Section Header & Filter Tabs */}
      <div className="reveal-element flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-tertiary uppercase tracking-widest font-bold">
              01 // Skills
            </span>
            <div className="h-px w-12 bg-tertiary/40" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">
            The Technical Arsenal
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base max-w-xl">
            Technologies and tools I use to build modern, responsive, and scalable web applications.
          </p>
        </div>

        {/* Category Filter Tabs with horizontal overflow on mobile */}
        <div className="flex items-center gap-1 p-1 rounded-2xl sm:rounded-full bg-surface-container-low border border-outline-variant/60 self-start md:self-auto shadow-inner overflow-x-auto max-w-full">
          {(Object.keys(categoryLabels) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-xl sm:rounded-full font-mono text-xs whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? "font-bold bg-primary text-surface shadow-sm"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid with smooth fade transition (no y jump on mobile) */}
      <div className="min-h-[280px] mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3 Pillars of Competence */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="spotlight-card bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300 group shadow-sm hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-surface transition-colors">
              <span className="material-symbols-outlined text-[22px]">code</span>
            </div>
            <span className="font-mono text-xs text-primary font-bold px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20">
              Frontend // 92%
            </span>
          </div>
          <h3 className="font-headline text-lg font-bold text-white">
            Frontend Architecture
          </h3>
          <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-primary h-full rounded-full skill-bar-fill"
              style={{ width: "92%" }}
            />
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Building responsive, performant user interfaces with React, Next.js App Router, Tailwind CSS, and component systems.
          </p>
          <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-outline">
            <span className="px-2 py-0.5 rounded bg-surface-container">React</span>
            <span className="px-2 py-0.5 rounded bg-surface-container">Next.js</span>
            <span className="px-2 py-0.5 rounded bg-surface-container">Tailwind</span>
          </div>
        </div>

        <div className="spotlight-card bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300 group shadow-sm hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center text-tertiary group-hover:bg-tertiary group-hover:text-surface transition-colors">
              <span className="material-symbols-outlined text-[22px]">dns</span>
            </div>
            <span className="font-mono text-xs text-tertiary font-bold px-2.5 py-0.5 rounded-full bg-tertiary/10 border border-tertiary/20">
              Backend // 88%
            </span>
          </div>
          <h3 className="font-headline text-lg font-bold text-white">
            Backend &amp; API Systems
          </h3>
          <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-tertiary h-full rounded-full skill-bar-fill"
              style={{ width: "88%" }}
            />
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Designing RESTful APIs with Node.js, Express, Laravel, and Django. Managing databases with MongoDB and MySQL.
          </p>
          <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-outline">
            <span className="px-2 py-0.5 rounded bg-surface-container">Express.js</span>
            <span className="px-2 py-0.5 rounded bg-surface-container">MongoDB</span>
            <span className="px-2 py-0.5 rounded bg-surface-container">MySQL</span>
          </div>
        </div>

        <div className="spotlight-card bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 p-6 rounded-2xl flex flex-col gap-4 transition-all duration-300 group shadow-sm hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-surface transition-colors">
              <span className="material-symbols-outlined text-[22px]">tune</span>
            </div>
            <span className="font-mono text-xs text-secondary font-bold px-2.5 py-0.5 rounded-full bg-secondary/10 border border-secondary/20">
              DevOps // 78%
            </span>
          </div>
          <h3 className="font-headline text-lg font-bold text-white">
            DevOps &amp; Design
          </h3>
          <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-secondary h-full rounded-full skill-bar-fill"
              style={{ width: "78%" }}
            />
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Deployment workflows, Docker containerization, Linux environments, and design system authoring with Figma and Photoshop.
          </p>
          <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[11px] text-outline">
            <span className="px-2 py-0.5 rounded bg-surface-container">Docker</span>
            <span className="px-2 py-0.5 rounded bg-surface-container">Figma</span>
            <span className="px-2 py-0.5 rounded bg-surface-container">Linux</span>
          </div>
        </div>
      </div>
    </section>
  );
}
