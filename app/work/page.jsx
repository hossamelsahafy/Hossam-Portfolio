"use client";
import { motion } from "framer-motion";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/workSliderBtns";
const projects = [
  {
    num: "01",
    category: "Full-Stack",
    title: "PizzaHub",
    description:
      "Developed a full-stack pizza delivery app using the MERN stack. I handled user authentication and authorization with JSON Web Tokens (JWT) to ensure security. Implemented email notifications, including password recovery and resending verification emails, allowing users to manage their accounts. Worked on key features like the menu page, signup, login, and user profile updates, creating a seamless experience for customers",
    video: "https://www.youtube.com/embed/Co7ECRWMU9k",
    stack: [
      { name: "TypeScript" },
      { name: "Express" },
      { name: "React" },
      { name: "MongoDB" },
    ],
    // image: { pOne, pTwo, pThree, pAppetizers, pFour, pFive, pSix },
    github: "https://github.com/Wessam18/PizzaHub",
    live: "",
  },
  {
    num: "02",
    category: "Full-Stack",
    title: "CareClinic",
    description:
      "Care Clinic is an appointment management system streamlining patient-doctor scheduling in clinics. I developed the Admin Dashboard, enabling management of doctors, departments, and appointments. Key features include CRUD operations for doctor profiles, department organization, appointment tracking, email notifications, and authentication with OAuth (Google, Facebook). The system also supports user sign-out, enhancing security and accessibility",
    video: "https://www.youtube.com/embed/XT47il8ANUI",
    stack: [
      { name: "NodeJs" },
      { name: "Express" },
      { name: "React" },
      { name: "MongoDB" },
    ],
    github: "https://github.com/MoSalem149/care-clinics",
    live: "",
  },
  {
    num: "03",
    category: "Full-Stack",
    title: "GigaByte-Damietta",
    description:
      "GigaByte-Damietta is a full-stack e-commerce platform built with Next.js and Payload CMS. The application allows users to browse products, add them to the cart, and complete purchases. The admin panel provides the ability to manage collections, add products, and view orders. Key features include a streamlined checkout process, user authentication with OAuth (Google), and dynamic product management. The system also integrates Cloudinary for media hosting and allows admins to easily manage product images.",
    video: "https://www.youtube.com/embed/D_2owbb-vew",
    stack: [{ name: "Next.js" }, { name: "Payload CMS" }, { name: "MongoDB" }],
    github: "https://github.com/hossamelsahafy/GigaByte",
    live: "https://gb-d.vercel.app",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Art Packaging",
    description:
      "Art Packaging is a multilingual, responsive frontend web application built using Next.js and Tailwind CSS. Designed for a small business selling handmade products, the app supports both English and Arabic for a broader audience reach. It features a clean, modern interface to showcase products, and allows users to place orders directly via WhatsApp. The system integrates Payload CMS to give admins a user-friendly dashboard for managing product listings. Lightweight, fast, and simple — ideal for small-scale e-commerce needs.",
    video: "https://www.youtube.com/embed/KBpDcjDqgfc?si=AjfSCkxx45J98UAB",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    github: "https://github.com/hossamelsahafy/art_packaging",
    live: "https://art.mohsinalbasalah.com/en",
  },
  {
    num: "05",
    category: "Full-Stack",
    title: "NovoApp",
    description:
      "NovoApp is a bilingual, responsive frontend web application built with Next.js, Payload CMS, and Tailwind CSS. Designed for Interpharma Corporation (IPC), the platform promotes health and wellness through probiotics and innovative veterinary solutions. Supporting both Arabic and English, the site delivers a seamless user experience with optimized SEO and fast performance. It features informative sections like About Us, Products, Careers, Articles, and Contact, while also offering newsletter subscriptions and dynamic content management via Payload CMS. NovoApp reflects IPC’s vision to be a leading health product supplier in Egypt and the MENA region.",
    video: "https://www.youtube.com/embed/3yU029GUWeY?si=t7kzaOCTVNAGaXaK",
    stack: [
      { name: "Next.js" },
      { name: "Payload CMS" },
      { name: "Tailwind CSS" },
    ],
    github: "https://github.com/hossamelsahafy/Novo",
    live: "https://novoeg.co/en",
  },
  {
    num: "06",
    category: "Fullstack",
    title: "BC Pharma",
    description:
      "BC Pharma is a full-stack web application focused on animal health. Built using Next.js and Payload CMS, the platform provides businesses and individuals with essential information about animal care. Users can easily send inquiries via email directly through the website to get the information they need. The app is built in English only, with smooth, modern animations powered by Framer Motion to enhance the user experience. Fast, responsive, and reliable — designed to support the animal health industry with accessible digital solutions.",
    video: "https://www.youtube.com/embed/LNBt3oIwCqs?si=i1Ss4j0xHt1IUDWY",
    stack: [
      { name: "Next.js" },
      { name: "Payload CMS" },
      { name: "Framer Motion" },
    ],
    github: "https://github.com/hossamelsahafy/bc_pharma",
    live: "https://best-choice-pharma.com/",
  },
];

const Work = () => {
  const [project, setproject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const current = swiper.activeIndex;
    setproject(projects[current]);
  };
  const videoRefs = useRef([]);

  const handleVideoPlay = (currentIndex) => {
    videoRefs.current.forEach((iframe, index) => {
      if (index !== currentIndex && iframe) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    });
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              <p className="text-lg font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-sm">
                {project.description.split(". ").map((sentence, index) => (
                  <span key={index} className="block mb-2">
                    {sentence}.
                  </span>
                ))}
              </p>
              <ul className="flex gap-4">
                {project.stack.map((s, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {s.name}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20" />
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent  " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent  " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] flex items-center">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] xl:h-[670px] md:h-[500px] relative group flex justify-center items-center bg-primary rounded-[8px] overflow-hidden">
                      <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300 z-10 pointer-events-none rounded-[8px]"></div>

                      <div className="relative w-full h-full">
                        <iframe
                          src={project.video}
                          className="w-full h-full pointer-events-auto rounded-[8px]"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                          }}
                          onPlay={() => handleVideoPlay(index)}
                        ></iframe>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex items-center absolute top-1/2 -translate-y-1/2 w-full justify-between px-4 z-20"
                btnStyles="p-3 rounded-full shadow-md hover:scale-105 transition"
                iconStyles="text-white w-6 h-6"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
