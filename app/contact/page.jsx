import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              SayHello
            </div>
            <h1 className="h1 max-w-md mb-8">Lets work Together</h1>
            <p className="subtitle max-w-[400px]">
              I am thrilled to begin my professional journey in web development
              and contribute my skills and passion to building exceptional web
              applications. With a solid educational foundation and hands-on
              experience from personal projects, I am eager to apply my
              knowledge in a professional setting and continually grow as a
              developer.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-no-repeat bg-contact_illustration_light dark:bg-contact_illustration_dark"></div>
        </div>
        {/* into text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>jeddiewong@yahoo.com</div>
            </div>
            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Selangor / KL</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+60 111-1471631</div>
            </div>
          </div>
          <form>
            <Form />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
