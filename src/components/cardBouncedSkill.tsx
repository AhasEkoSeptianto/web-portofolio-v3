"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Image from "next/image";
import React, { useRef } from "react";

export default function CardBounced({
  name,
  img_path,
}: {
  name: string;
  img_path: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 200,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 200,
    damping: 15,
  });

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const imageX = rect.left + rect.width / 2;
    const imageY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const distance = Math.sqrt((mouseX - imageX) ** 2 + (mouseY - imageY) ** 2);

    const maxDistance = 200;

    if (distance < maxDistance) {
      const force = (maxDistance - distance) / maxDistance;

      const moveX = (imageX - mouseX) * force;
      const moveY = (imageY - mouseY) * force;

      x.set(moveX);
      y.set(moveY);
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.1 }}
        style={{
          x: springX,
          y: springY,
        }}
        className="
          rounded-2xl
          overflow-hidden
          text-center
        "
      >
        <div className="flex flex-col justify-between h-20 p-2">
          <Image
            src={`/interesting/${img_path}`}
            alt={name}
            width={60}
            height={60}
          />
        </div>

        <p>{name}</p>
      </motion.div>
    </div>
  );
}
