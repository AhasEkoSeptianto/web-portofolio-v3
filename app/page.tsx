"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/src/components/Navbar";
import CursorGlow from "@/src/components/CursorGlow";
import AmbientOrbs from "@/src/components/AmbientOrbs";
import ShaderBackground from "@/src/components/ShaderBackground";
import HeroSection from "@/src/section/Hero";
import MarqueeSection from "@/src/section/Marquee";
import SkillsSection from "@/src/section/Skills";
import ProjectSection from "@/src/section/Project";
import StorySection from "@/src/section/Story";
import ContactSection from "@/src/section/Contact";
import Footer from "@/src/components/Footer";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  // Spotlight card effect + 3D tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".spotlight-card");
      cards.forEach((el) => {
        const card = el as HTMLElement;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        // 3D tilt only when hovering
        if (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        ) {
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const deltaX = (x - centerX) / centerX;
          const deltaY = (y - centerY) / centerY;
          card.style.transform = `perspective(1000px) rotateX(${-deltaY * 3}deg) rotateY(${deltaX * 3}deg) translateY(-4px)`;
        }
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("spotlight-card")) {
        target.style.transform = "";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            if (entry.target.classList.contains("skill-bar-fill")) {
              entry.target.classList.add("animated");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealEls = document.querySelectorAll(".reveal-element");
    revealEls.forEach((el) => observer.observe(el));

    const skillBars = document.querySelectorAll(".skill-bar-fill");
    skillBars.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ShaderBackground />
      <CursorGlow />
      <AmbientOrbs />
      <Navbar />
      <main className="w-full pt-28 pb-16 relative z-10" ref={mainRef}>
        <div className="flex flex-col w-full">
          <HeroSection />
          <MarqueeSection />
          <SkillsSection />
          <ProjectSection />
          <StorySection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
