"use client";
import { motion } from "motion/react";

const texts = [
  "Concierge Service.",
  "Fast Payouts.",
  "Consign with Us.",
  "Up to 80% commission.",
  "Concierge Service.",
  "Fast Payouts.",
  "Consign with Us.",
  "Up to 80% commission.",
  "Concierge Service.",
  "Fast Payouts.",
  "Consign with Us.",
  "Up to 80% commission.",
];
export default function Cta() {
  return (
    <div className="overflow-hidden whitespace-nowrap border-t py-10">
      <motion.div
        animate={{
          x: [0, -1000],
          transition: {
            repeat: Number.POSITIVE_INFINITY,
            duration: 30,
            ease: "linear",
          },
        }}
        className="inline-flex gap-16 px-4"
      >
        {texts.map((text, index) => (
          <span className="font-medium text-lg tracking-tight" key={index}>
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
