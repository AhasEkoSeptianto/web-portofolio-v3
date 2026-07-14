"use client";

import { motion, scale, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function AboutImage() {
  const [onHover, setOnHover] = useState(false);
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.2 }}
      whileInView={{ scale: onHover ? 1.1 : 1, opacity: 1 }}
    >
      <Image
        src="/gue.jpeg"
        onMouseOver={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
        alt="profile"
        width={300}
        height={300}
        className="rounded-2xl mx-auto"
      />
    </motion.div>
  );
}
