"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-6">
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Email" />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      <div className="relative flex items-center">
        <Textarea placeholder="Type Your Message Here" />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Link href="https://wa.me/601111471631">
        <Button className="flex items-center max-w-[166px] gap-x-1">
          Let's Connect
          <ArrowRightIcon size={20} />
        </Button>
      </Link>
    </form>
  );
};

export default Form;
