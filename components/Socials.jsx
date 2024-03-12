"use client";

import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <>
      <div className="flex gap-x-6 mx-auto xl:mx-0">
        <Link href="/">
          <div className="text-foreground text-[22px] hover:text-primary">
            <RiYoutubeFill />
          </div>
        </Link>

        <Link href="/">
          <div className="text-foreground text-[22px] hover:text-primary">
            <RiLinkedinFill />
          </div>
        </Link>

        <Link href="/">
          <div className="text-foreground text-[22px] hover:text-primary">
            <RiGithubFill />
          </div>
        </Link>

        <Link href="/">
          <div className="text-foreground text-[22px] hover:text-primary">
            <RiFacebookFill />
          </div>
        </Link>

        <Link href="/">
          <div className="text-foreground text-[22px] hover:text-primary">
            <RiInstagramFill />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Socials;
