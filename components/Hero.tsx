import Image from "next/image";
import { Section } from "./Section";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link.js";
import { cn } from "@/lib/utils";
import { Title } from "./Title";

export const Hero = () => {
  return (
    <Section className="flex max-md:items-center max-md:flex-col-reverse items-start gap-4">
      <div className="flex-[2] flex flex-col justify-start gap-6 h-full">
        <Title level={1} size="lg" className="text-4xl mb-0">
          Dimitri Mabom
        </Title>
        <Title level={2} size="md" className="text-3xl  font-normal mb-0">
          Développeur Front-End
        </Title>
        <p>
          Je suis passionné par le code et tout ce qui touche au web. J’adore
          créer des interfaces modernes et intuitives avec des outils comme{" "}
          <strong>React.js</strong> et <strong>Next.js</strong>. Mais surtout,
          je mets un point d’honneur à transformer chaque projet en quelque
          chose d’unique, à l’image de vos idées.
        </p>
        <div className="flex gap-2">
          <Link
            target="_blank"
            href="/pdf/CV_Dimitri_Mabom.pdf"
            className={cn(buttonVariants(), "gap-2")}
          >
            Mon CV
          </Link>
          <Button variant={"outline"}>Me Contacter</Button>
        </div>
      </div>
      <div className="flex-1 flex content-end relative h-full w-full max-md:w-2/3 max-md:text-center">
        <Image
          height={500}
          width={500}
          className="object-cover h-full w-full"
          src="/images/Profile.jpeg"
          alt="Me"
        />
      </div>
    </Section>
  );
};
