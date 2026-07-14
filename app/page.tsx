import AboutMeSection from "@/src/section/AboutMe";
import IntroSection from "@/src/section/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white text-black space-y-4">
      <IntroSection />
      <AboutMeSection />
    </div>
  );
}
