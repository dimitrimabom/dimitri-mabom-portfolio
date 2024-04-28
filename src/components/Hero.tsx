import { Section } from "./Section";
import { Badge } from "./ui/badge";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export const Hero = () => {
  return (
    <Section className=" max-md:flex-col-reverse items-center flex justify-between flex-row gap-12 py-8 px-10 pb-0">
      <div className="flex-[2] flex justify-between flex-col gap-4 h-fit">
        <h2 className=" text-4xl font-bold">Dimitri Mabom</h2>
        <h3 className=" text-2xl font-robotoSlab">Front End Dev</h3>
        <p className=" font-nunito">
          Je suis un développeur Front-end spécialisé dans React, dédié à créer
          des expériences web exceptionnelles. Explorez mon portfolio et
          découvrez comment je fusionne technologie et créativité pour façonner
          l'interface de demain.
        </p>
        <div className=" flex items-center gap-2 flex-wrap">
          <a target="_blank" href="https://github.com/dimysenpai">
            <Badge className=" w-fit flex justify-center items-center content-between gap-1">
              <Github size={16} /> GitHub
            </Badge>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/dimitri-mabom?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <Badge className=" w-fit flex justify-center items-center content-between gap-1">
              <Linkedin size={16} />
              Linkedin
            </Badge>
          </a>
          <a target="_blank" href="https://facebook.com/@dimysempai">
            <Badge className=" w-fit flex justify-center items-center content-between gap-1">
              <Facebook size={16} />
              Facebook
            </Badge>
          </a>
          <a target="_blank" href="https://X.com/@dimy_senpai">
            <Badge className=" w-fit flex justify-center items-center content-between gap-1">
              <Twitter size={16} />
              Twitter
            </Badge>
          </a>
        </div>
      </div>
      <div className="flex-[1] flex items-center justify-center max-md:size-60">
        <img
          className=" rounded-full"
          src="https://firebasestorage.googleapis.com/v0/b/stock-media-301c1.appspot.com/o/images%2FMoi.jpg?alt=media&token=2cbfbe30-5027-4695-a9d3-9c535dc849ee"
          alt="Moi"
        />
      </div>
    </Section>
  );
};
