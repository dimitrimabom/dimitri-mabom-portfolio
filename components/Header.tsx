import Link from "next/link";
import { Section } from "./Section";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import SwitchLang from "./SwitchLang";

interface HeroProps {
  isVisible: boolean;
}

export const Header = ({ isVisible }: HeroProps) => {
  return (
    <header className="sticky top-0 py-4 font-bold bg-background z-50 ">
      <Section className="flex items-baseline items-center">
        <h1 className="text-lg pl-2">{isVisible ? "" : "Dimitri Mabom"}</h1>
        <div className="flex-1" />
        <ul className="flex gap-2 items-center">
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/dimitri-mabom/"}
            className={cn(buttonVariants({ variant: "ghost" }), "size-8 p-2")}
          >
            <Linkedin size={12} />
          </Link>
          <Link
            target="_blank"
            href={"https://github.com/dimitrimabom"}
            className={cn(buttonVariants({ variant: "ghost" }), "size-8 p-2")}
          >
            <Github size={12} />
          </Link>
          <SwitchLang/>
        </ul>
      </Section>
    </header>
  );
};
