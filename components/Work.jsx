"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Car, Link2Icon } from "lucide-react";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";
import Badge from "./ui/Badge";

const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: "Lasdasdasda asd ada da da",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Sol Website",
    description: "Lasdasdasda asd ada da da",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Eth Website",
    description: "Lasdasdasda asd ada da da",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: "Lasdasdasda asd ada da da",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Sol Website",
    description: "Lasdasdasda asd ada da da",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Eth Website",
    description: "Lasdasdasda asd ada da da",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Nexa Website",
    description: "Lasdasdasda asd ada da da",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Sol Website",
    description: "Lasdasdasda asd ada da da",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Eth Website",
    description: "Lasdasdasda asd ada da da",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">Lorem aadsad asd adadad dad</p>
          <Link href="/proojects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={Pagination}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project, index) => {
              <SwiperSlide key={index}>
                <Card>
                  <CardHeader>
                    {/* image */}
                    <div className="relative w-full">
                      <Image
                        className="absolute bottom-0 shadow-2xl"
                        src={project.image}
                        width={247}
                        height={250}
                        alt=""
                        priority
                      />
                    </div>
                  </CardHeader>
                  <div className="h-full px-8 py-6">
                    <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">
                      {project.category}
                    </Badge>
                    <h4 className="h4 mb-1">{project.name}</h4>
                    <p className="text-muted-foreground text-lg">
                      {project.description}
                    </p>
                  </div>
                </Card>
              </SwiperSlide>;
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
