import Image from "next/image";
import { Section } from "./Section";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start">
      <div className="flex-[2]">
        <h2 className="Playwrite">Dimitri Mabom</h2>
        <h3>Front-End Developer</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi iste
          harum nemo tenetur explicabo nesciunt,
        </p>
      </div>
      <div className="flex-1">
        <Image
          src="/images/Profile.jpeg"
          width={500}
          height={500}
          alt="Me"
        />
      </div>
    </Section>
  );
};
