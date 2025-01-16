import Image from "next/image";
import { Section } from "./Section";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[2] flex flex-col h-64 justify-around">
        <h2 className="text-5xl text-primary">Dimitri Mabom</h2>
        <h3 className="text-3xl">Développeur Front-End</h3>
        <p>
        Je suis passionné par le code et tout ce qui touche au web. J’adore créer des interfaces modernes et intuitives avec des outils comme <strong>React.js</strong> et <strong>Next.js</strong>. Mais surtout, je mets un point d’honneur à transformer chaque projet en quelque chose d’unique, à l’image de vos idées.
        </p>
        <div className="flex gap-2">
          <Button>Mon CV</Button>
          <Button variant={"outline"}>Me Contacter</Button>
        </div>
      </div>
      <div className="flex-1 flex content-end">
        <Image
        className=" max-w-64"
          src="/images/Profile.jpeg"
          width={500}
          height={500}
          alt="Me"
        />
      </div>
    </Section>
  );
};
