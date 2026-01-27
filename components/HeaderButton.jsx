"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = () => {
  return (
    <motion.button
      className="px-6 py-3 text-sm rounded-full font-semibold text-white/80 shadow-md relative overflow-hidden"
      style={{
        background:
          "linear-gradient(90deg, #005f4f, #004080, #6f004f, #004080, #005f4f)", // Added more blue to balance
        backgroundSize: "500% 100%", // Increased size for smoother motion
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%"],
      }}
      transition={{
        backgroundPosition: {
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 20px rgba(0, 255, 255, 0.5)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={(e) => {
        const ripple = document.createElement("span");
        ripple.className =
          "absolute w-4 h-4 bg-white opacity-50 rounded-full animate-ping";
        ripple.style.left = `${e.nativeEvent.offsetX}px`;
        ripple.style.top = `${e.nativeEvent.offsetY}px`;
        e.currentTarget.appendChild(ripple);
        setTimeout(() => ripple.remove(), 500);
      }}
    >
      Hire Me
    </motion.button>
  );
};

export default AnimatedButton;
