"use client";

import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";

interface Props {
  setIntro: (state: boolean) => void;
}

export default function IntroSection(props: Props) {
  const [scope, animate] = useAnimate();

  const [expand, setExpand] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [displayText, setDisplayText] = useState("");

  const text = "Hi!, I'm Eko. I build website and mobile apps";

  // Typing effect
  useEffect(() => {
    if (!expanded2) return;

    let index = 0;

    const timer = setInterval(() => {
      setDisplayText(text.slice(0, index));

      index++;

      if (index > text.length) {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [expanded2]);
  return (
    <div className="relative h-screen w-screen place-content-center bg-white">
      <motion.div
        className="
          mx-auto 
          h-20 
          w-20 
          overflow-hidden 
          rounded-full 
          bg-gray-800
        "
        animate={
          expand
            ? {
                width: "100vw",
                height: "100vh",
                borderRadius: 0,
              }
            : {
                y: [-300, 0, -200, 0, -100, 0],
              }
        }
        transition={{
          duration: expand ? 0.2 : 2,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => {
          if (!expand) {
            setExpand(true);
          } else {
            setExpanded2(true);
            props.setIntro(false);
          }
        }}
      >
        {expanded2 && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="
                absolute 
                inset-0
                z-10
                bg-[url('/images-background.jpg')]
                bg-cover
                bg-center
              "
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="
                relative
                z-30
                flex
                h-full
                w-full
                items-center
                justify-center
                bg-black/70
              "
            >
              {/* Typing text */}
              <div
                className="
                  text-3xl
                  font-bold
                  whitespace-nowrap
                  text-white
                "
              >
                {displayText}

                <motion.span
                  className="inline-block ml-1"
                  animate={{
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  |
                </motion.span>
              </div>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}
