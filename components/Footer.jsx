import Link from "next/link";
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Socials */}

          <div className="flex gap-x-6 mx-auto xl:mx-0 mb-4">
            <Link href="/">
              <div className="text-white text-[20px] dark:text-white/70 hover:text-primary transition-all">
                <RiYoutubeFill />
              </div>
            </Link>

            <Link href="/">
              <div className="text-white text-[20px] dark:text-white/70 hover:text-primary transition-all">
                <RiLinkedinFill />
              </div>
            </Link>

            <Link href="/">
              <div className="text-white text-[20px] dark:text-white/70 hover:text-primary transition-all">
                <RiGithubFill />
              </div>
            </Link>

            <Link href="/">
              <div className="text-white text-[20px] dark:text-white/70 hover:text-primary transition-all">
                <RiFacebookFill />
              </div>
            </Link>

            <Link href="/">
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
