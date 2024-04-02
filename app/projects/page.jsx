"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { TabsContent } from "@radix-ui/react-tabs";

const projectData = [
  {
    image: "/work/portfolio.png",
    category: "react js",
    name: "Portfolio Website",
    description:
      "A dynamic portfolio website using ReactJS to showcase personal projects and skills and follow responsive design principles",
    link: "https://portfolio-prowong01s-projects.vercel.app/",
    github: "/",
  },
  {
    image: "/work/Imaginify.png",
    category: "next js",
    name: "Imaginify Website",
    description:
      "Developed an Innovative Saas website that leverages the Cloudinary API to provide image editing feature.",
    link: "https://imaginify-prowong01s-projects.vercel.app/",
    github: "/",
  },
  {
    image: "/work/ecommerce-admin.png",
    category: "next js",
    name: "Ecommerce-Dashboard & CMS",
    description:
      "Admin dashboard is going to serve as both CMS, Admin and API & able to control multiple vendors / stores through this single CMS",
    link: "https://ecommerce-admin-prowong01s-projects.vercel.app/",
    github: "/",
  },
  {
    image: "/work/ecommerce-store.png",
    category: "next js",
    name: "Ecommerce-Store",
    description:
      "An ecommerce store that can search through all categories, products, sizes, colors and checkout by using Stripe",
    link: "https://ecommerce-store-prowong01s-projects.vercel.app/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category = all projects return all else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue="all projects" className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[500px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[62px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
