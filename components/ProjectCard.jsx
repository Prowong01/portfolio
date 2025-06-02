"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="group overflow-hidden relative h-full border border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-md rounded-xl">
        <div className="flex flex-col h-full">
          {/* Project image */}
          <div className="relative h-[180px] overflow-hidden rounded-t-lg">
            <Image
              className="object-cover w-full h-full"
              src={project.image}
              width={600}
              height={300}
              alt={project.title}
              priority
            />

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="capitalize text-xs font-semibold py-1 px-3 rounded-full bg-white/90 text-primary text-opacity-90 shadow-sm">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex-grow flex flex-col">
            <h3 className="text-xl font-medium mb-2 text-foreground/90">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tech stack tags */}
            {project.technologies && (
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs py-1 px-2.5 bg-accent/50 rounded-full text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
