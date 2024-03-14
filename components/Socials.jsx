"use client";

import Link from "next/link";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

const Socials = () => {
  return (
    <>
      <div className="flex gap-x-6 mx-auto xl:mx-0">
        <Link href="https://www.linkedin.com/in/eddie-wong-2b1126257/">
          <div className="text-foreground text-[22px] hover:text-primary">
            <RiLinkedinFill />
          </div>
        </Link>

        <Link href="https://github.com/Prowong01">
          <div className="text-foreground text-[22px] hover:text-primary">
            <RiGithubFill />
          </div>
        </Link>

        <Link href="https://wa.me/601111471631">
          <div className="text-foreground text-[22px] hover:text-primary">
            <RiWhatsappFill />
          </div>
        </Link>

        <Link href="https://m.facebook.com/eddiewong.junpen?mibextid=LQQJ4d">
          <div className="text-foreground text-[22px] hover:text-primary">
            <RiFacebookFill />
          </div>
        </Link>

        <Link href="https://www.instagram.com/prowong01?igsh=ZWVqOWs3a2cxYTJ2&utm_source=qr">
          <div className="text-foreground text-[22px] hover:text-primary">
            <RiInstagramFill />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Socials;
