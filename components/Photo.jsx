"use client";
import { delay, easeIn, motion } from "framer-motion";
import Image from "next/image";
import PF from "../public/PF.png";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
        />
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
          <Image
            src={PF}
            quality={100}
            fill
            sizes="(max-width: 1280px) 298px, 498px"
            alt="Profile Picture"
            className="object-contain rounded-full pt-[15px]"
          />
        </div>

        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="none"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="url(#gradientStroke)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="150 50"
            strokeDashoffset="0"
            initial={{
              rotate: 0,
              opacity: 0.8,
            }}
            animate={{
              rotate: 360,
              strokeDashoffset: [0, -200],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <defs>
            <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00ff99" />
              <stop offset="50%" stopColor="#0099ff" />
              <stop offset="100%" stopColor="#ff0099" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
