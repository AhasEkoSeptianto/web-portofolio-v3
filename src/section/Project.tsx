"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Project, type ProjectProps } from "@/Project";

type FilterCategory = "all" | "fullstack" | "enterprise" | "tools";

/* ─── Project Modal ─── */
function ProjectModal({
  project,
  onClose,
}: {
  project: ProjectProps | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container */}
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface-container-low border border-outline-variant/60 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/40 bg-surface-container-lowest/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_#38bdf8]" />
            <span className="font-mono text-xs uppercase tracking-widest text-outline">
              // Case Study
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-white transition-all group"
          >
            <span className="material-symbols-outlined text-[18px] group-hover:rotate-90 transition-transform">
              close
            </span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 flex flex-col gap-6">
          {/* Title */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {project.name}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full font-mono text-xs bg-tertiary/15 text-tertiary border border-tertiary/30 font-semibold capitalize">
                  {project.category}
                </span>
              </div>
              <p className="font-mono text-sm text-outline">{project.tech}</p>
            </div>
          </div>

          {/* Big Preview */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/40 shadow-inner group">
            <Image
              src={project.image}
              alt={project.name}
              width={1200}
              height={675}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex gap-2">
                {project.techPills.map((pill) => (
                  <span
                    key={pill}
                    className="px-2.5 py-1 rounded-md bg-surface-container-lowest/80 backdrop-blur-md font-mono text-xs text-tertiary border border-tertiary/30"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Row */}
          {project.stats && project.stats.length >= 3 && (
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-surface-container-lowest border border-outline-variant/40">
              {project.stats.map((stat, i) => {
                const colors = ["text-tertiary", "text-primary", "text-emerald-400"];
                return (
                  <div key={i} className="flex flex-col">
                    <span className="font-mono text-[10px] text-outline uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <span className={`font-headline text-lg sm:text-xl font-bold ${colors[i]}`}>
                      {stat.val}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Challenge & Solution */}
          {(project.challenge || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.challenge && (
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-tertiary uppercase tracking-wider font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">troubleshoot</span>
                    The Challenge
                  </span>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-xs text-primary uppercase tracking-wider font-bold flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px]">memory</span>
                    Solution
                  </span>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/30">
            <span className="font-mono text-xs text-outline uppercase tracking-wider">
              Description
            </span>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {project.desc}
            </p>
          </div>

          {/* Technologies Deployed */}
          <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/30">
            <span className="font-mono text-xs text-outline uppercase tracking-wider">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techPills.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-surface-container border border-outline-variant/40 font-mono text-xs text-on-surface hover:text-tertiary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-outline-variant/40 bg-surface-container-lowest/80 backdrop-blur-md">
          <button
            className="px-4 py-2 rounded-xl text-on-surface-variant hover:text-white font-mono text-xs transition-colors"
            onClick={onClose}
          >
            Close Window
          </button>
          <div className="flex items-center gap-3">
            <a
              className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high border border-outline-variant/50 text-white font-mono text-xs flex items-center gap-1.5 transition-all group"
              href={project.github_code}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]">code</span>
              <span>Source Code</span>
            </a>
            {project.site_preview && (
              <a
                className="px-5 py-2 rounded-xl bg-gradient-to-r from-primary to-tertiary text-surface font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(129,140,248,0.4)] hover:shadow-[0_0_24px_rgba(56,189,248,0.6)] flex items-center gap-1.5"
                href={project.site_preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Live Demo</span>
                <span className="material-symbols-outlined text-[16px]">launch</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Project Section ─── */
export default function ProjectSection() {
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  const filtered =
    filter === "all"
      ? Project
      : Project.filter((p) => p.category === filter);

  const filterButtons: { key: FilterCategory; label: string }[] = [
    { key: "all", label: `All (${Project.length})` },
    { key: "fullstack", label: "Full-Stack" },
    { key: "enterprise", label: "Enterprise" },
    { key: "tools", label: "Tools" },
  ];

  return (
    <section
      className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 py-16"
      id="projects"
    >
      {/* Header & Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-tertiary uppercase tracking-widest font-bold">
              02 // Projects
            </span>
            <div className="h-px w-12 bg-tertiary/40" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Selected Works
          </h2>
          <p className="text-on-surface-variant text-sm sm:text-base">
            Showcase of production projects. Click any card to explore full
            details.
          </p>
        </div>
        <div className="flex items-center gap-1 p-1 rounded-full bg-surface-container-low border border-outline-variant/60 self-start md:self-auto shadow-inner">
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setFilter(btn.key)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs transition-all ${
                filter === btn.key
                  ? "font-bold bg-primary text-surface shadow-sm"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* 2-Column Bento Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filtered.map((project, idx) => {
          const accentColors = [
            "hover:border-tertiary/60",
            "hover:border-secondary/60",
            "hover:border-primary/60",
            "hover:border-emerald-400/60",
          ];
          const titleHoverColors = [
            "group-hover:text-tertiary",
            "group-hover:text-secondary",
            "group-hover:text-primary",
            "group-hover:text-emerald-400",
          ];
          const dotColors = ["bg-tertiary", "bg-secondary", "bg-primary", "bg-emerald-400"];
          const accent = accentColors[idx % accentColors.length];
          const titleHover = titleHoverColors[idx % titleHoverColors.length];
          const dot = dotColors[idx % dotColors.length];

          return (
            <motion.div
              key={project.name}
              className={`project-item spotlight-card group flex flex-col bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/40 ${accent} transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer`}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative w-full aspect-video overflow-hidden bg-surface-container">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  {project.techPills.slice(0, 2).map((pill) => (
                    <span
                      key={pill}
                      className="px-2.5 py-1 rounded-md bg-surface-container-lowest/80 backdrop-blur-md font-mono text-xs text-tertiary border border-tertiary/30"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3
                    className={`font-headline text-2xl font-bold text-white ${titleHover} transition-colors`}
                  >
                    {project.name}
                  </h3>
                  <span className="font-mono text-xs text-outline capitalize">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
                <div className="pt-2 flex items-center justify-between border-t border-outline-variant/30">
                  <div className="flex items-center gap-2 text-tertiary font-mono text-xs">
                    <span className={`w-1.5 h-1.5 rounded-full ${dot} group-hover:animate-ping`} />
                    <span>{project.tech}</span>
                  </div>
                  <button
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-white font-semibold group-hover:text-tertiary transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
