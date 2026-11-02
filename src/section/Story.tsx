"use client";

import { motion } from "motion/react";

const milestones = [
  {
    title: "Frontend Developer",
    company: "PT Media Pintarin Bersama",
    period: "Mei 2023 — Jul 2026",
    description:
      "Build and maintenance frontend web application company for administration and users client. Build and maintenance frontend mobile application company for users client.",
    tags: ["React", "Next.js", "Mobile App", "Production"],
    color: "primary",
    dotShadow: "shadow-[0_0_10px_#818cf8]",
    dotBg: "bg-primary",
  },
  {
    title: "Frontend Developer",
    company: "PT Soegee Futures",
    period: "Jun 2021 — Apr 2023",
    description:
      "Build and maintenance frontend web application company for administration and users client. Build and maintenance frontend mobile application company for users client.",
    tags: ["React", "Frontend", "Trading Platform", "Mobile"],
    color: "tertiary",
    dotShadow: "shadow-[0_0_10px_#38bdf8]",
    dotBg: "bg-tertiary",
  },
  {
    title: "Staff Administrasi",
    company: "Stikom Cipta Karya Informatika",
    period: "Apr 2019 — Mei 2020",
    description:
      "Regulate the implementation of classes between lecturers and students. Admin media social Instagram and Facebook and create design to post.",
    tags: ["Administration", "Social Media", "Design"],
    color: "secondary",
    dotShadow: "shadow-[0_0_10px_#c084fc]",
    dotBg: "bg-secondary",
  },
  {
    title: "College",
    company: "Stikom CKI",
    period: "Education",
    description:
      "Exploring the world of the internet during college. Building foundation in programming and web development.",
    tags: ["Education", "Web Dev", "Programming"],
    color: "emerald",
    dotShadow: "shadow-[0_0_10px_#34d399]",
    dotBg: "bg-emerald-400",
  },
];

export default function StorySection() {
  return (
    <section
      className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 py-16"
      id="story"
    >
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs text-tertiary uppercase tracking-widest font-bold">
            03 // Story Line
          </span>
          <div className="h-px w-12 bg-tertiary/40" />
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">
          The Career Trajectory
        </h2>
        <p className="text-on-surface-variant text-sm sm:text-base max-w-xl">
          From college student to professional frontend developer — building
          real-world applications.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        <div className="flex flex-col relative pl-6 sm:pl-8">
          {/* Glowing Line */}
          <div className="absolute left-2 sm:left-3 top-3 bottom-3 w-px bg-gradient-to-b from-primary via-tertiary to-outline-variant" />

          {milestones.map((milestone, idx) => (
            <motion.div
              key={idx}
              className={`relative flex flex-col gap-2 ${idx < milestones.length - 1 ? "pb-12" : ""} group`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="absolute -left-6 sm:-left-8 top-1.5 w-4 h-4 rounded-full bg-surface-container-lowest flex items-center justify-center">
                <span
                  className={`w-2.5 h-2.5 rounded-full ${milestone.dotBg} ${milestone.dotShadow}`}
                />
              </div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-headline text-lg sm:text-xl font-bold text-white">
                  {milestone.title}
                </h3>
                <span
                  className={`font-mono text-xs font-semibold ${
                    milestone.color === "primary"
                      ? "text-primary"
                      : milestone.color === "tertiary"
                        ? "text-tertiary"
                        : milestone.color === "secondary"
                          ? "text-secondary"
                          : "text-emerald-400"
                  }`}
                >
                  {milestone.company}
                </span>
                <span className="font-mono text-xs text-outline ml-auto">
                  {milestone.period}
                </span>
              </div>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {milestone.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs text-outline">
                {milestone.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-md bg-surface-container border border-outline-variant/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

