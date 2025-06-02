"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { motion } from "framer-motion";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";

// Project data
const projectData = [
  {
    id: 1,
    category: "Web",
    title: "Portfolio Website",
    description:
      "A dynamic portfolio website using ReactJS to showcase personal projects and skills and follow responsive design principles",
    image: "/work/portfolio.png",
    link: "https://portfolio-prowong01s-projects.vercel.app/",
    hasGithub: false,
    technologies: ["React", "NextJS", "TailwindCSS", "Framer Motion"],
  },
  {
    id: 2,
    category: "Saas",
    title: "Imaginify Website",
    description:
      "Developed an Innovative Saas website that leverages the Cloudinary API to provide image editing feature.",
    image: "/work/imaginify.png",
    link: "https://imaginify-prowong01s-projects.vercel.app/",
    hasGithub: false,
    technologies: ["NextJS", "Cloudinary API", "TailwindCSS", "TypeScript"],
  },
  {
    id: 3,
    category: "Ecommerce",
    title: "Ecommerce-Dashboard & CMS",
    description:
      "Admin dashboard is going to serve as both CMS, Admin and API & able to control multiple vendors / stores through this single CMS",
    image: "/work/ecommerce-admin.png",
    link: "https://ecommerce-admin-prowong01s-projects.vercel.app/",
    hasGithub: false,
    technologies: ["NextJS", "Prisma", "MySQL", "TailwindCSS"],
  },
  {
    id: 4,
    category: "Ecommerce",
    title: "Ecommerce-Store",
    description:
      "An ecommerce store that can search through all categories, products, sizes, colors and checkout by using Stripe",
    image: "/work/ecommerce-store.png",
    link: "https://ecommerce-store-prowong01s-projects.vercel.app/",
    hasGithub: false,
    technologies: ["NextJS", "TailwindCSS", "Stripe", "Zustand"],
  },
];

const Work = () => {
  return (
    <section>
      <div className="container mx-auto mb-4">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
