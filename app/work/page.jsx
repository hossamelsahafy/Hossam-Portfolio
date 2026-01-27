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
    category: "Fullstack",
    title: "Rehla Marketing",
    description:
      "Rehla Marketing is a full-stack digital marketing platform dedicated to helping brands thrive in the modern digital landscape. Built with Next.js and powered by Payload CMS, the platform showcases Rehla’s expertise in marketing, branding, advertising, content creation, analytics, and custom software development. Businesses can easily connect with the team through integrated inquiry forms and explore tailored digital solutions designed to elevate their brand presence. Featuring smooth, modern animations with Framer Motion, the site delivers a fast, responsive, and immersive experience a reflection of Rehla’s commitment to innovation and results-driven marketing",
    video: "https://www.youtube.com/embed/ZHFTGtwLwTk?si=HgxjxNPvfW1D8_4X",
    stack: [
      { name: "Next.js" },
      { name: "Payload CMS" },
      { name: "Framer Motion" },
    ],
    github: "https://github.com/hossamelsahafy/Rehla",
    live: "https://rehlamarketing.com/",
  },

  {
    num: "02",
    category: "Fullstack",
    title: "BC Pharma",
    description:
      "BC Pharma is a full-stack web application focused on animal health. Built using Next.js and Payload CMS, the platform provides businesses and individuals with essential information about animal care. Users can easily send inquiries via email directly through the website to get the information they need. The app is built in English only, with smooth, modern animations powered by Framer Motion to enhance the user experience. Fast, responsive, and reliable designed to support the animal health industry with accessible digital solutions.",
    video: "https://www.youtube.com/embed/LNBt3oIwCqs?si=i1Ss4j0xHt1IUDWY",
    stack: [
      { name: "Next.js" },
      { name: "Payload CMS" },
      { name: "Framer Motion" },
    ],
    github: "https://github.com/hossamelsahafy/bc_pharma",
    live: "https://best-choice-pharma.com/",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "Shadows",
    description:
      "Shadows E-commerce is a modern full-stack shopping platform built to deliver fast, secure, and immersive online shopping experiences. Built with Next.js and powered by Payload CMS, the app demonstrates expertise in e-commerce workflows, admin customization, authentication, and dynamic content management. Customers can browse products, manage carts, and complete checkout securely with JWT-based authentication and email verification, while admins control shipping costs, products, and orders from a centralized dashboard. Featuring smooth, modern animations with Framer Motion, the site offers a responsive, engaging experience that reflects Shadows’ commitment to innovation and real-world commerce.",
    video: "https://www.youtube.com/embed/Cnhy2LTvA90?si=f9k8u1NrV_gSmcFm",
    stack: [
      { name: "Next.js" },
      { name: "Payload CMS" },
      { name: "Framer Motion" },
    ],
    github: "https://github.com/hossamelsahafy/Shadows.git",
    live: "https://shadows-navy.vercel.app/en",
  },
  {
    num: "04",
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
    live: "https://novo-orcin-alpha.vercel.app/en",
  },

  {
    num: "05",
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
    num: "06",
    category: "Frontend",
    title: "Art Packaging",
    description:
      "Art Packaging is a multilingual, responsive frontend web application built using Next.js and Tailwind CSS. Designed for a small business selling handmade products, the app supports both English and Arabic for a broader audience reach. It features a clean, modern interface to showcase products, and allows users to place orders directly via WhatsApp. The system integrates Payload CMS to give admins a user-friendly dashboard for managing product listings. Lightweight, fast, and simple — ideal for small-scale e-commerce needs.",
    video: "https://www.youtube.com/embed/KBpDcjDqgfc?si=AjfSCkxx45J98UAB",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }],
    github: "https://github.com/hossamelsahafy/art_packaging",
    live: "https://artpackaging.com.sa/en",
  },

  {
    num: "07",
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
    num: "08",
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
    github: "https://github.com/hossamelsahafy/PizzaHub.git",
    live: "",
  },
];

const Work = () => {
  const [project, setproject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const current = swiper.activeIndex;
    setproject(projects[current]);
  };
  const videoRefs = useRef([]);

  const pauseAllVideos = () => {
    videoRefs.current.forEach((iframe) => {
      if (iframe?.src?.includes("youtube.com/embed")) {
        iframe.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*",
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
              onSlideChange={(swiper) => {
                handleSlideChange(swiper);
                pauseAllVideos();
              }}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] xl:h-[670px] md:h-[500px] relative group flex justify-center items-center bg-primary rounded-[8px] overflow-hidden">
                      <div className="relative w-full h-full z-20">
                        <iframe
                          src={`${project.video}${
                            project.video.includes("?") ? "&" : "?"
                          }enablejsapi=1`}
                          className="w-full h-full rounded-[8px] z-50"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{
                            objectFit: "contain",
                            width: "100%",
                            height: "100%",
                          }}
                          ref={(el) => (videoRefs.current[index] = el)}
                          onLoad={() =>
                            videoRefs.current[
                              index
                            ]?.contentWindow?.postMessage(
                              '{"event":"listening","id":1}',
                              "*",
                            )
                          }
                        ></iframe>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex items-center absolute inset-0 justify-between px-4 z-20 pointer-events-none"
                btnStyles="p-3 rounded-full shadow-md hover:scale-105 transition pointer-events-auto"
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
