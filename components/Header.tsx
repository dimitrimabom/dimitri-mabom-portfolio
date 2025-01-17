import Link from "next/link";
import { Section } from "./Section";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 font-bold">
      <Section className="flex items-baseline">
        <h1 className="text-lg"></h1>
        <div className="flex-1" />
        <ul className="flex gap-2">
          <Link href={""}
            className={cn(buttonVariants({ variant: "ghost" }), "size-8 p-2")}
          >
            <Linkedin size={12} />
          </Link>
          <Link href={""}
            className={cn(buttonVariants({ variant: "ghost" }), "size-8 p-2")}
          >
            <Github size={12} />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
