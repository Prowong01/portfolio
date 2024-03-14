import Link from "next/link";
import {
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiWhatsappFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <div className="flex gap-x-6 mx-auto xl:mx-0 mb-4">
            <Link href="https://www.linkedin.com/in/eddie-wong-2b1126257/">
              <div className="text-white text-[20px] dark:text-white/70 hover:text-primary transition-all">
                <RiLinkedinFill />
              </div>
            </Link>

            <Link href="https://github.com/Prowong01">
              <div className="text-white text-[20px] dark:text-white/70 hover:text-primary transition-all">
                <RiGithubFill />
              </div>
            </Link>

            <Link href="https://wa.me/601111471631">
              <div className="text-white text-[20px] dark:text-white/70 hover:text-primary transition-all">
                <RiWhatsappFill />
              </div>
            </Link>

            <Link href="https://m.facebook.com/eddiewong.junpen?mibextid=LQQJ4d">
              <div className="text-white text-[20px] dark:text-white/70 hover:text-primary transition-all">
                <RiFacebookFill />
              </div>
            </Link>

            <Link href="https://www.instagram.com/prowong01?igsh=ZWVqOWs3a2cxYTJ2&utm_source=qr">
              <div className="text-white text-[20px] dark:text-white/70 hover:text-primary transition-all">
                <RiInstagramFill />
              </div>
            </Link>
          </div>
          {/* copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Eddie Wong. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
