"use client";

import Image from "next/image";
import { motion, scale, useMotionValue, useSpring } from "motion/react";
import { Button } from "@heroui/react";
import { Project } from "@/Project";

export default function ProjectSection() {
  return (
    <section className="min-h-screen flex-col flex items-center p-6 space-y-20">
      {Project.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ scale: 0.2 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-7xl mx-auto"
        >
          <div className="shadow-lg p-2">
            <div className="flex justify-between">
              <div>
                <p className="font-bold text-lg">
                  {project.name}{" "}
                  <span className="text-sm font-normal opacity-80">
                    {project.tech}
                  </span>
                </p>
                <p className="text-md w-1/2">{project.desc}</p>
              </div>
              <div className="flex items-center space-x-4">
                {project.site_preview ? (
                  <a href={project.site_preview} target="__blank">
                    <Button size="lg">Demo</Button>
                  </a>
                ) : null}
                {project.github_code ? (
                  <a href={project.github_code} target="__blank">
                    <Button size="lg" variant="tertiary">
                      Github
                    </Button>
                  </a>
                ) : null}
              </div>
            </div>
            <Image
              src={project.image}
              alt={project.name}
              width={1500}
              height={1000}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
