"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 pb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Hero Text (Left - 7 Cols) */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low/90 border border-tertiary/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary shadow-[0_0_8px_#38bdf8]" />
            </span>
            <span className="font-mono text-xs text-tertiary uppercase tracking-widest font-semibold">
              Open to Work — Frontend Developer
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl lg:text-[58px] lg:leading-[1.1] font-bold text-white tracking-tight">
            Building web experiences with{" "}
            <span className="shimmer-headline text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-secondary">
              clean code
            </span>{" "}
            &amp; creative passion.
          </h1>

          <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Hi, I&apos;m{" "}
            <strong className="text-white font-semibold">Eko</strong>. A
            Frontend Developer with 4+ years of experience specializing in
            React, Next.js, and full-stack web applications with modern
            architecture.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              className="px-7 py-3 rounded-full bg-gradient-to-r from-primary to-tertiary text-surface font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-[0_0_24px_rgba(129,140,248,0.35)] hover:shadow-[0_0_36px_rgba(56,189,248,0.6)] hover:-translate-y-0.5 flex items-center gap-2 group"
              href="#projects"
            >
              <span>View Works</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
            <a
              className="px-7 py-3 rounded-full bg-surface-container-low hover:bg-surface-container-high text-white font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 border border-outline-variant/60 flex items-center gap-2 hover:-translate-y-0.5 shadow-sm"
              href="/CV_Ahas_Eko_Septianto.pdf"
              download="CV_Ahas_Eko_Septianto.pdf"
            >
              <span className="material-symbols-outlined text-[18px] text-tertiary">
                download
              </span>
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        {/* Hero Image Portrait (Right - 5 Cols) */}
        <motion.div
          className="lg:col-span-5 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="relative group w-full max-w-[340px] sm:max-w-[370px]">
            {/* Outer Glow Frame */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-tertiary/40 via-primary/30 to-secondary/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-700 animate-glow-ring" />
            <div className="relative rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/60 shadow-2xl">
              <div className="w-full aspect-[4/5] overflow-hidden bg-surface-container">
                <Image
                  src="/gue.jpeg"
                  alt="Eko — Frontend Developer"
                  width={370}
                  height={463}
                  className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              {/* Floating Info Badge on Image */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-surface-container-lowest/85 backdrop-blur-md border border-outline-variant/50 flex items-center justify-between animate-float-badge">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span className="font-headline font-semibold text-sm text-white">
                    Eko
                  </span>
                </div>
                <span className="font-mono text-[11px] text-tertiary uppercase tracking-wider font-semibold">
                  Frontend Dev
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Metrics Row */}
      <motion.div
        className="mt-12 w-full bg-surface-container-low/70 backdrop-blur-md border border-outline-variant/40 p-6 rounded-2xl grid grid-cols-2 lg:grid-cols-4 gap-6 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex flex-col gap-1 group">
          <span className="font-headline text-3xl sm:text-4xl font-bold text-white group-hover:text-primary transition-colors">
            4+ Yrs
          </span>
          <span className="font-mono text-xs text-outline uppercase tracking-wider">
            Professional Experience
          </span>
        </div>
        <div className="flex flex-col gap-1 group">
          <span className="font-headline text-3xl sm:text-4xl font-bold text-tertiary group-hover:text-white transition-colors">
            6+
          </span>
          <span className="font-mono text-xs text-outline uppercase tracking-wider">
            Production Projects
          </span>
        </div>
        <div className="flex flex-col gap-1 group">
          <span className="font-headline text-3xl sm:text-4xl font-bold text-primary group-hover:text-tertiary transition-colors">
            20+
          </span>
          <span className="font-mono text-xs text-outline uppercase tracking-wider">
            Technologies Mastered
          </span>
        </div>
        <div className="flex flex-col gap-1 group">
          <span className="font-headline text-3xl sm:text-4xl font-bold text-secondary group-hover:text-white transition-colors">
            2
          </span>
          <span className="font-mono text-xs text-outline uppercase tracking-wider">
            Companies Served
          </span>
        </div>
      </motion.div>
    </section>
  );
}

