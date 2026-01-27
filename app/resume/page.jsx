"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: "About Me",
  description:
    "I am a passionate full-stack developer skilled in building dynamic, user-friendly web applications. I have expertise in front-end technologies like HTML, CSS, JavaScript, React, and Tailwind CSS, and hands-on experience with back-end tools like Node.js and Python. I'm currently expanding my knowledge in Next.js and modern frameworks, striving to deliver scalable, high-quality solutions that solve real-world problems.",
  infos: [
    {
      fieldName: "Name",
      fieldValue: "Hossam Elsahafy",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+20) 01501083054",
    },
    {
      fieldName: "Experiance",
      fieldValue: "Projects Experience",
    },
    {
      fieldName: "GitHub",
      fieldValue: "hossamelsahafy",
    },
    {
      fieldName: "Email",
      fieldValue: "hossamelsa7afy54@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic, English",
    },
  ],
};

const Education = {
  icon: "/cap.svg",
  title: "Education",
  description:
    "I graduated from the Faculty of Commerce, English Section, but discovered my passion for technology. To pursue this passion, I joined the ALX Software Engineering program, a year-long intensive course where I gained skills and knowledge in MERN stack development, deployment, Python, MySQL, and scripting languages.",
  edus: [
    {
      name: "ALX SE Program",
      grade: "Full Stack Foundation: 125.83%, Back-end Specialization: 138.93%",

      duration: "2023-2024",
      description: "Software Engineering",
      image: "ALXSE.png",
    },
    {
      name: "DEPI",
      grade: "Very Good",
      duration: "6/2024 - 11/2024",
      description: "Certified in React.js",
    },
    {
      name: "Faculty Of Commerce, English Section",
      grade: "Very Good",
      duration: "2019-2023",
      description: "Bachelor's degree in Accounting",
      image: "/Graduation.jpg",
    },
  ],
};
const Skills = {
  title: "My skills",
  description:
    "Proficient in web development technologies including HTML, CSS, JavaScript, React, Next, and more.",
  SkillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNode />,
      name: "node.js",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
  ],
};
const Experience = {
  title: "My Experience",
  des: "This experience was gained through freelance work and during my time working as a freelance developer with ByteForce Company.",
  projects: [
    {
      project: "GigaByte Damietta",
      image: "GigaByte.png",
      des: "An e-commerce application focused on selling computer components, accessories, and laptops. Built with a clean user interface to provide a smooth shopping experience.",
      link: "https://gb-d.vercel.app/",
    },
    {
      project: "Art Packaging",
      image: "Art.png",
      des: "A simple e-commerce platform showcasing the owner's products. To place an order, users can directly contact the seller via WhatsApp for a more personal buying experience.",
      link: "https://art.mohsinalbasalah.com/en",
    },
    {
      project: "Novo",
      image: "Novo.jpg",
      des: "An e-commerce application dedicated to selling pharmaceutical products. The platform provides users with an easy way to browse and order medicines.",
      link: "https://novo-orcin-alpha.vercel.app/en",
    },
    {
      project: "BC Pharma",
      image: "bc_pharma.jpg",
      des: "A full-stack application focused on animal health. Built with Next.js, Payload CMS, and enhanced with Framer Motion animations, it allows users to send inquiries via email to get the information they need.",
      link: "https://best-choice-pharma.com/",
    },
    {
      project: "Rehla Marketing",
      image: "Rehla.jpg",
      des: "A digital marketing agency helping brands grow through creative campaigns, data-driven strategies, and innovative solutions across marketing, branding, advertising, content, analytics, and software development.",
      link: "https://rehlamarketing.com/en",
    },
    {
      project: "Shadows",
      image: "Shadows.png",
      des: "A modern e-commerce web app built with Next.js, Payload CMS, and Framer Motion, designed to deliver smooth animations, secure authentication, and scalable admin workflows across product management, cart & checkout, multi-language support, and order processing.",
      link: "https://shadows-navy.vercel.app/en",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="aboutme">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4l font-bold">{Education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {Education.description}
                </p>
                <ScrollArea className="h-[200px]">
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
                    {Education.edus.map((edu, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2323] h-auto py-6 px-10 rounded-xl flex flex-col justify-between gap-4 md:px-6 md:py-5"
                        >
                          <div className="flex flex-wrap justify-between items-center w-full">
                            <span className="text-sm text-gray-400 whitespace-nowrap md:text-xs">
                              {edu.duration}
                            </span>
                            <h3 className="font-semibold text-lg sm:text-base text-gray-200 md:text-sm">
                              {edu.description}
                            </h3>
                          </div>

                          <div className="mt-3 flex flex-wrap justify-between items-start w-full gap-2">
                            <p className="text-sm lg:text-base font-bold text-white/80 md:text-sm">
                              {typeof window !== "undefined" &&
                              window.innerWidth >= 768 &&
                              edu.name.includes(",")
                                ? edu.name.split(",").map((part, i) => (
                                    <span
                                      key={i}
                                      className="block md:inline text-start"
                                    >
                                      {part.trim()}
                                      {i < edu.name.split(",").length - 1 &&
                                        ", "}
                                    </span>
                                  ))
                                : edu.name}
                            </p>
                            {/* Grade */}
                            <div className="text-sm text-gray-400 md:text-xs text-start">
                              {typeof edu.grade === "string"
                                ? edu.grade
                                    .split(",")
                                    .map((line, i) => <p key={i}>{line}</p>)
                                : ""}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{Skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {Skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap[30px] gap-4 xl:gap-[30px]">
                  {Skills.SkillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#2323] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="experience"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{Experience.title}</h3>

                {/* Main description */}
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {Experience.des}
                </p>

                <ScrollArea className="h-[400px]">
                  {/* Project cards */}
                  <div className="grid grid-cols-1 mb-4 md:grid-cols-2 gap-6 max-w-[900px] mx-auto xl:mx-0">
                    {Experience.projects.map((proj, idx) => (
                      <div
                        key={idx}
                        className="bg-[#2323] flex flex-col p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-white/10"
                      >
                        <h4 className="text-xl font-semibold text-white mb-2">
                          {proj.project}
                        </h4>
                        <img
                          src={proj.image}
                          alt={proj.project}
                          className="w-full rounded my-4"
                        />
                        <p className="text-white/60 text-sm mb-4">{proj.des}</p>

                        {proj.link !== "Null" && (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm transition-all mt-auto font-bold duration-300 hover:text-[#00FF99]"
                          >
                            Visit Project
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent
              value="aboutme"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.infos.map((info, index) => (
                    <li
                      className="flex items-center justify-center xl:justify-start gap-4"
                      key={index}
                    >
                      <span className="text-white/60">{info.fieldName}</span>
                      <span className="text-sm text-white font-medium whitespace-nowrap overflow-ellipsis overflow-hidden max-w-full">
                        {info.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
