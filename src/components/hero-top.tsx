import React from "react";
import { Badge } from "./ui/badge";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

const HeroTop = () => {
  return (
    <section className="h-screen flex items-center justify-center ">
      <div className="flex items-center max-w-5xl mx-auto flex-col-reverse gap-10 md:flex-row md:text-left text-center">
        <div className="grow-0">
          <h1 className="text-4xl md:text-5xl font-bold">Dimitri Mabom</h1>
          <h2 className="text-2xl md:text-4xl font-bold mt-4">
            Développeur Front-End
          </h2>

          <div className="flex flex-col gap-2 items-center md:items-start">
            <p className="text-lg md:text-2xl mt-4">
              Je conçois des expériences web élégantes et performantes
            </p>

            <div className="flex items-center gap-2 flex-wrap">
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

            <a
              href=""
              className="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
            >
              Contactez Moi !
            </a>
          </div>
        </div>
        {/* Image stylisée */}
        <div className="grow">
          <img
            src="https://via.placeholder.com/300x300" // Remplace par ton image
            alt="Dimitri"
            className="w-full h-full rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroTop;
