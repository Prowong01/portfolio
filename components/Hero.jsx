"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { RiBriefcase4Fill, RiArrowDownSLine, RiTodoFill } from "react-icons/ri";
import { motion } from "framer-motion";
import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section className="py-12 xl:py-24 xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-primary/5 rounded-full -top-20 -left-20 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] bg-secondary/10 rounded-full bottom-10 right-10 blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />

      <div className="container mx-auto relative z-10">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <motion.div
              className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.2 }}
            >
              Web Developer
            </motion.div>
            <motion.h1
              className="h1 mb-4"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.4 }}
            >
              Hello, My name is Eddie Wong
            </motion.h1>
            <motion.p
              className="subtitle max-w-[490px] mx-auto xl:mx-0"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.6 }}
            >
              Proficient Full-Stack Typescript Developer with 1+ years of
              experience specializing in modern web frameworks.
            </motion.p>

            {/* buttons */}
            <motion.div
              className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12"
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.8 }}
            >
              <Link href="/contact">
                <Button className="gap-x-2 group transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                  Contact me
                  <Send
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                </Button>
              </Link>
              <Link href="/cv/Resume_Eddie.pdf" target="_blank">
                <Button
                  variant="secondary"
                  className="gap-x-2 group transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                >
                  Download CV
                  <Download
                    size={18}
                    className="group-hover:translate-y-[2px] transition-transform"
                  />
                </Button>
              </Link>
            </motion.div>

            {/* socials */}
            <motion.div
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 1 }}
            >
              <Socials iconsStyles="text-foreground text-[22px] hover:text-primary hover:scale-125 transition-all duration-300" />
            </motion.div>
          </div>

          {/* image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="z-10"
            >
              <Badge
                containerStyles="absolute top-[24%] -left-[5rem]"
                icon={<RiBriefcase4Fill />}
                endCountNum={1}
                badgeText="Year of Experience"
              />
            </motion.div>

            {/* badge 2 */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="z-10"
            >
              <Badge
                containerStyles="absolute top-[55%] -right-8"
                icon={<RiTodoFill />}
                endCountNum={8}
                badgeText="Finished Projects"
              />
            </motion.div>

            <motion.div
              className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <DevImg
                containerStyles="bg-hero_shape w-[510px] h-[500px] bg-no-repeat relative bg-bottom"
                imgSrc="/hero/profile.png"
              />
            </motion.div>
          </div>
        </div>

        {/* icon */}
        <motion.div
          className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1.6,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.2,
          }}
        >
          <RiArrowDownSLine className="text-3xl text-primary" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
