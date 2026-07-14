"use client";
import AboutMeSection from "@/src/section/AboutMe";
import IntroSection from "@/src/section/Intro";
import ProjectSection from "@/src/section/Project";
import WorkExperienceSection from "@/src/section/WorkExpreience";
import ContactSection from "@/src/section/Contact";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isIntro, setIsIntro] = useState(true);
  return (
    <div className="bg-white text-black space-y-8">
      <IntroSection setIntro={(state) => setIsIntro(state)} />
      {isIntro ? null : (
        <>
          <AboutMeSection />
          <ProjectSection />
          <WorkExperienceSection />
          <ContactSection />
        </>
      )}
    </div>
  );
}
