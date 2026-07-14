"use client";
import { Skill } from "@/Skill";
import CardBounced from "../components/cardBouncedSkill";
import { motion, useMotionValue, useSpring } from "motion/react";
import AboutImage from "../components/aboutImage";

export default function AboutMeSection() {
  return (
    <section className="min-h-screen flex items-center container p-6 mx-auto">
      <div className="lg:grid grid-cols-2 items-center mt-20 lg:mt-0">
        <AboutImage />

        <div className="space-y-4 p-6">
          <h2 className="text-4xl font-bold text-center lg:text-left">
            About Me
          </h2>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <p>
              My name is Eko and I specialize in web developement that utilizes
              HTML, CSS, JS, and REACT etc
            </p>
            <p>
              I am a highly motivated individual and eternal optimist dedicated
              to writing clear, concise, robust code that works. Striving to
              never stop learning and improving. I like to have my perspective
              and belief systems challenged so that I see the world through new
              eyes.
            </p>
            <p className="mt-2">
              I am very interested in several technologies that I am still
              exploring, including:
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap gap-4 mt-4">
            {Skill.map((skill, idx) => (
              <CardBounced img_path={skill.image} name={skill.name} key={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
