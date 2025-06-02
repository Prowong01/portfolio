"use client";
import DevImg from "./DevImg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  PhoneIcon,
  GraduationCap,
  Calendar,
  Briefcase,
  HomeIcon,
} from "lucide-react";

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "SMK St.Anthony,Sarawak",
        standard: "SPM ",
        result: "3A+, 5A, 1A-, 1B+",
      },
      {
        university: "Kolej Matrikulaksi Labuan (KML)",
        standard: "Matriculation",
        result: "CGPA 4.00",
      },
      {
        university: "Universiti Teknologi Malaysia (UTM)",
        standard: "Bachelor of Computer Science",
        result: "CGPA 3.85",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "Top Glove",
        role: "Intern",
        years: "September 2023 - June 2024",
      },
      {
        company: "Numen Cyber Technology",
        role: "Web Developer",
        years: "July 2024 - March 2025",
      },
      {
        company: "Beyondosoft (Malaysia)",
        role: "Web Developer",
        years: "March 2025 - Present",
      },
    ],
  },
];

// 技能分类数据
const skillCategories = [
  {
    id: "frontend",
    title: "Front-End",
    skills: [
      {
        name: "React.js",
        icon: "/skills/react.svg",
      },
      {
        name: "Next.js",
        icon: "/skills/next.svg",
      },
      {
        name: "Vue.js",
        icon: "/skills/vue.svg",
      },
      {
        name: "React Native",
        icon: "/skills/react-native.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "/skills/tailwindcss.svg",
      },
    ],
  },
  {
    id: "backend",
    title: "Back-End",
    skills: [
      {
        name: "Node.js",
        icon: "/skills/nodejs.svg",
      },
      {
        name: "Express",
        icon: "/skills/express.svg",
      },
      {
        name: "Python",
        icon: "/skills/python.svg",
      },
      {
        name: "Django",
        icon: "/skills/django.svg",
      },
    ],
  },
  {
    id: "tools",
    title: "Databases & Tools",
    skills: [
      {
        name: "Git",
        icon: "/skills/git.svg",
      },
      {
        name: "Figma",
        icon: "/skills/figma.svg",
      },
      {
        name: "AWS",
        icon: "/skills/aws.svg",
      },
      {
        name: "Docker",
        icon: "/skills/docker.svg",
      },
      {
        name: "Postman",
        icon: "/skills/postman.svg",
      },
      {
        name: "Axios",
        icon: "/skills/axios.png",
      },
    ],
  },
];

// 技能图标组件
const SkillIcon = ({ skill }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-2 md:gap-3"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center p-3 md:p-4 hover:shadow-xl hover:scale-110 transition-all duration-300 border border-border/10">
        <div className="relative w-10 h-10 md:w-12 md:h-12">
          <Image
            src={skill.icon}
            fill
            alt={skill.name}
            className="object-contain"
            sizes="(max-width: 768px) 40px, 48px"
          />
        </div>
      </div>
      <span className="text-xs md:text-sm font-medium text-center">
        {skill.name}
      </span>
    </motion.div>
  );
};

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <section>
      <div className="container mx-auto my-4">
        <motion.h2
          className="section-title mb-6 md:mb-8 xl:mb-16 text-center mx-auto"
          {...fadeInAnimation}
          transition={{ ...fadeInAnimation.transition, delay: 0.1 }}
        >
          About me
        </motion.h2>
        <div className="flex justify-center">
          {/* tabs */}
          <div className="w-full max-w-4xl px-4">
            <Tabs defaultValue="skills">
              <motion.div
                className="flex justify-center gap-4 mb-8 md:mb-12"
                {...fadeInAnimation}
                transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
              >
                <TabsList className="grid grid-cols-2 w-full max-w-[280px] md:max-w-[320px] h-[48px]">
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="qualifications">
                    Qualifications
                  </TabsTrigger>
                </TabsList>
              </motion.div>

              {/* tabs content */}
              <div className="text-base md:text-lg mt-6 xl:mt-6">
                {/* skills */}
                <TabsContent value="skills">
                  <motion.div
                    {...fadeInAnimation}
                    transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
                  >
                    <h3 className="h3 mb-4 md:mb-6 text-center">My Skills</h3>
                    <p className="subtitle text-center max-w-[600px] mx-auto mb-6 md:mb-10">
                      I work with various technologies to build modern and
                      scalable applications
                    </p>

                    <Tabs defaultValue="frontend" className="mt-6 md:mt-8">
                      <div className="overflow-x-auto">
                        <TabsList className="grid grid-cols-3 w-full max-w-[520px] h-[40px] md:h-[48px] mx-auto mb-6 md:mb-10 text-xs md:text-sm gap-2 md:gap-3 min-w-[400px]">
                          <TabsTrigger value="frontend">Front-End</TabsTrigger>
                          <TabsTrigger value="backend">Back-End</TabsTrigger>
                          <TabsTrigger value="tools">
                            Databases & Tools
                          </TabsTrigger>
                        </TabsList>
                      </div>

                      {skillCategories.map((category) => (
                        <TabsContent key={category.id} value={category.id}>
                          <div className="bg-white/5 rounded-2xl p-6 md:p-8 shadow-md border border-border/20 hover:border-primary/20 transition-all duration-300">
                            <h4 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-center text-primary/90">
                              {category.title}
                            </h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 justify-items-center">
                              {category.skills.map((skill, index) => (
                                <SkillIcon key={index} skill={skill} />
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                      ))}
                    </Tabs>
                  </motion.div>
                </TabsContent>

                {/* qualifications */}
                <TabsContent value="qualifications">
                  <motion.div
                    {...fadeInAnimation}
                    transition={{ ...fadeInAnimation.transition, delay: 0.4 }}
                  >
                    <h3 className="h3 mb-4 text-center">
                      My Experience & Education
                    </h3>
                    <p className="subtitle text-center max-w-[500px] mx-auto mb-8">
                      My journey through education and professional experience.
                    </p>

                    <Tabs defaultValue="education" className="mt-8">
                      <TabsList className="grid grid-cols-2 w-full h-[48px] mx-auto mb-8">
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                      </TabsList>

                      {/* Education Tab */}
                      <TabsContent value="education">
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:via-border before:from-transparent before:to-transparent">
                          {/* 使用qualificationData来渲染教育信息 */}
                          {getData(qualificationData, "education").data.map(
                            (item, index) => (
                              <div
                                key={index}
                                className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group"
                              >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow shrink-0 lg:order-1 lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2 z-10">
                                  <GraduationCap className="w-5 h-5 text-primary" />
                                </div>

                                <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] p-4 rounded-lg bg-background shadow-md border border-border">
                                  <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-primary">
                                      {item.university}
                                    </div>
                                    <time className="font-caveat font-medium text-xs text-muted-foreground">
                                      {/* 这里可以添加年份，如果数据中有的话 */}
                                    </time>
                                  </div>
                                  <div className="text-sm font-medium mb-1">
                                    {item.standard}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {item.result}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </TabsContent>

                      {/* Experience Tab */}
                      <TabsContent value="experience">
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:mx-auto lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:via-border before:from-transparent before:to-transparent">
                          {/* 使用qualificationData来渲染经验信息 */}
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => (
                              <div
                                key={index}
                                className="relative flex items-center justify-between lg:justify-normal lg:odd:flex-row-reverse group"
                              >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow shrink-0 lg:order-1 lg:group-odd:-translate-x-1/2 lg:group-even:translate-x-1/2 z-10">
                                  <Briefcase className="w-5 h-5 text-primary" />
                                </div>

                                <div className="w-[calc(100%-4rem)] lg:w-[calc(50%-2.5rem)] p-4 rounded-lg bg-background shadow-md border border-border">
                                  <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-primary">
                                      {item.company}
                                    </div>
                                    <time className="font-caveat font-medium text-xs text-muted-foreground">
                                      {item.years}
                                    </time>
                                  </div>
                                  <div className="text-sm font-medium mb-1">
                                    {item.role}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {/* 这里可以添加描述，如果数据中有的话 */}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
