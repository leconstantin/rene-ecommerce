"use client";

import { motion } from "motion/react";
import type * as React from "react";

type InfiniteTextMarqueeProps = {
  text?: string;
  link?: string;
  speed?: number;
  fontSize?: string;
  textColor?: string;
};

export const InfiniteTextMarquee: React.FC<InfiniteTextMarqueeProps> = ({
  text = "Let's Get Started",
  speed = 30,
  fontSize = "8rem",
  textColor = "", // optional override
}) => {
  const repeatedText = `${new Array(10).fill(text).join(" - ")} -`;

  return (
    <main className="relative w-vw overflow-hidden">
      <motion.div
        animate={{
          x: [0, -1000],
          transition: {
            repeat: Number.POSITIVE_INFINITY,
            duration: speed,
            ease: "linear",
          },
        }}
        className="whitespace-nowrap"
      >
        <span
          className={`m-0 py-10 font-medium text-lg tracking-tight transition-all ${
            textColor ? "" : "text-foreground"
          }`}
        >
          <span className="hoverable-text">{repeatedText}</span>
        </span>
      </motion.div>
    </main>
  );
};
