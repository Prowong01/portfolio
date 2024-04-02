"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { GitHubIcon, Link2Icon } from "lucide-react";
import Badge from "./Badge";
import { RiGithubFill } from "react-icons/ri";

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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">All learn from Youtube :)</p>
          <Link href="/projects">
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
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* {projectData.slice(0, 4).map((project, index) => {
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>;
            })} */}
            <SwiperSlide>
              <Card className="group overflow-hidden relative">
                <CardHeader className="p-0">
                  {/* image */}
                  <div className="relative w-full h-[150px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-wkr_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                    <Image
                      className="absolute bottom-0 shadow-2xl"
                      src={"/work/portfolio.png"}
                      width={247}
                      height={150}
                      alt=""
                      priority
                    />
                    {/* btn links */}
                    <div className="flex gap-x-4">
                      {/* project link */}
                      <Link
                        href={
                          "https://portfolio-prowong01s-projects.vercel.app/"
                        }
                        className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                      >
                        <Link2Icon className="text-white" />
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <div className="h-full px-8 py-6">
                  <h4 className="h4 mb-1">{"Portfolio Website"}</h4>
                  <p className="text-muted-foreground text-lg">
                    {
                      "A dynamic portfolio website using ReactJS to showcase personal projects and skills and follow responsive design principles"
                    }
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="group overflow-hidden relative">
                <CardHeader className="p-0">
                  {/* image */}
                  <div className="relative w-full h-[150px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-wkr_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                    <Image
                      className="absolute bottom-0 shadow-2xl"
                      src={"/work/Imaginify.png"}
                      width={247}
                      height={150}
                      alt=""
                      priority
                    />
                    {/* btn links */}
                    <div className="flex gap-x-4">
                      {/* project link */}
                      <Link
                        href={
                          "https://imaginify-prowong01s-projects.vercel.app/"
                        }
                        className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                      >
                        <Link2Icon className="text-white" />
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <div className="h-full px-8 py-6">
                  <h4 className="h4 mb-1">{"Imaginify Website"}</h4>
                  <p className="text-muted-foreground text-lg">
                    {
                      "Developed an Innovative Saas website that leverages the Cloudinary API to provide image editing feature."
                    }
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="group overflow-hidden relative">
                <CardHeader className="p-0">
                  {/* image */}
                  <div className="relative w-full h-[150px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-wkr_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                    <Image
                      className="absolute bottom-0 shadow-2xl"
                      src={"/work/ecommerce-admin.png"}
                      width={247}
                      height={150}
                      alt=""
                      priority
                    />
                    {/* btn links */}
                    <div className="flex gap-x-4">
                      {/* project link */}
                      <Link
                        href={
                          "https://ecommerce-admin-prowong01s-projects.vercel.app/"
                        }
                        className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                      >
                        <Link2Icon className="text-white" />
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <div className="h-full px-8 py-6">
                  <h4 className="h4 mb-1">{"Ecommerce-Dashboard & CMS"}</h4>
                  <p className="text-muted-foreground text-lg">
                    {
                      "Admin dashboard is going to serve as both CMS, Admin and API & able to control multiple vendors / stores through this single CMS"
                    }
                  </p>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="group overflow-hidden relative">
                <CardHeader className="p-0">
                  {/* image */}
                  <div className="relative w-full h-[150px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-wkr_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                    <Image
                      className="absolute bottom-0 shadow-2xl"
                      src={"/work/ecommerce-store.png"}
                      width={247}
                      height={150}
                      alt=""
                      priority
                    />
                    {/* btn links */}
                    <div className="flex gap-x-4">
                      {/* project link */}
                      <Link
                        href={
                          "https://ecommerce-store-prowong01s-projects.vercel.app/"
                        }
                        className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                      >
                        <Link2Icon className="text-white" />
                      </Link>
                    </div>
                  </div>
                </CardHeader>
                <div className="h-full px-8 py-6">
                  <h4 className="h4 mb-1">{"Ecommerce-Store"}</h4>
                  <p className="text-muted-foreground text-lg">
                    {
                      "An ecommerce store that can search through all categories, products, sizes, colors and checkout by using Stripe"
                    }
                  </p>
                </div>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
