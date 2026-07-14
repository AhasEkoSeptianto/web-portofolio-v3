import AboutMeSection from "@/src/section/AboutMe";
import IntroSection from "@/src/section/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <IntroSection />
      <AboutMeSection />
    </div>
  );
}
