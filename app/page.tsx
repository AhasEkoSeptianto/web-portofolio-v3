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

  // High-performance spotlight card & 3D tilt effect (desktop only)
  useEffect(() => {
    // Only run on desktop devices with hover & fine pointer
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktop) return;

    let activeCard: HTMLElement | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const card = target?.closest?.(".spotlight-card") as HTMLElement | null;

      // If moved off the previous card, reset its transform
      if (activeCard && activeCard !== card) {
        activeCard.style.transform = "";
        activeCard = null;
      }

      if (card) {
        activeCard = card;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        card.style.transform = `perspective(1000px) rotateX(${-deltaY * 3}deg) rotateY(${deltaX * 3}deg) translateY(-4px)`;
      }
    };

    const handleMouseLeave = () => {
      if (activeCard) {
        activeCard.style.transform = "";
        activeCard = null;
      }
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (activeCard) {
        activeCard.style.transform = "";
      }
    };
  }, []);

  // Scroll reveal observer for elements with .reveal-element
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const revealEls = document.querySelectorAll(".reveal-element");
    revealEls.forEach((el) => observer.observe(el));

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
