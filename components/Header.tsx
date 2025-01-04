import Link from "next/link";
import { Section } from "./Section";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Sun } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">Dimitri Mabom</h1>
        <div className="flex-1" />
        <ul>
          <Link href={""}
            className={cn(buttonVariants({ variant: "outline" }), "size-8 p-2")}
          >
            <Sun size={12} />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
