"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      id="cursor-glow"
      className="fixed top-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-primary/10 via-tertiary/10 to-transparent blur-3xl z-0 opacity-75 hidden md:block pointer-events-none"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
}
