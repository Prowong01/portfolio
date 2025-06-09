"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";
import { Link2Icon } from "lucide-react";

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
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              src={project.image}
              width={600}
              height={300}
              alt={project.title}
              priority
            />

            {/* Hover overlay with link icon */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Link href={project.link} target="_blank">
                <div className="bg-white rounded-full p-3 hover:bg-primary hover:text-white transition-colors duration-200">
                  <Link2Icon className="w-6 h-6" />
                </div>
              </Link>
            </div>

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="capitalize text-xs font-semibold py-1 px-3 rounded-full bg-white/90 text-primary text-opacity-90 shadow-sm">
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex-grow flex flex-col">
            <div className="flex items-center gap-x-2">
              <Link href={project.link} target="_blank">
                <h3 className="text-xl font-medium mb-2 text-foreground/90 hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </Link>
            </div>
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
