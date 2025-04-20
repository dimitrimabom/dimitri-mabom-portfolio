"use client";

import { useEffect, useState } from "react";
import {
  ExternalLink,
  GitFork,
  Github,
  Star,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Title } from "./Title";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  language: Array<string>;
  url: string;
  githubUrl: string;
  star: number;
  fork: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AltPlus",
    description:
      "Une start-up innovante fondée en 2021 par une équipe de jeunes développeurs talentueux et passionnés.",
    image: "/images/AltPlus-pic.png",
    language: ["HTML", "CSS", "JavaScript"],
    url: "https://altplus.dev/",
    githubUrl: "private",
    star: 0,
    fork: 0,
  },
  {
    id: 2,
    title: "Internship Vitrin",
    description:
      "Landing page de Internship Report, une Application pour Sauvegarder Vos Rapports de Stage !",
    image: "/images/internship-vitrin.png",
    language: ["HTML", "CSS", "JavaScript"],
    url: "https://internship-vitrin.onrender.com/",
    githubUrl: "https://github.com/artsiders/internship-vitrin.git",
    star: 2,
    fork: 0,
  },
  {
    id: 3,
    title: "Dashboard Analytics",
    description:
      "Un tableau de bord d'analyse de données interactif utilisant D3.js et Vue.js",
    image: "/images/AltPlus-pic.png",
    language: ["Next.js", "Langchain", "MongoDB", "Supabase", "tailwind"],
    url: "/images/AltPlus-pic.png",
    githubUrl: "/images/AltPlus-pic.png",
    star: 0,
    fork: 0,
  },
];

export const MyWork = () => {

  const { t } = useTranslation();

  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <Section>
      <Title level={1} size="lg">
        {t('Works')}
      </Title>

      <div className="relative w-full overflow-hidden flex items-center justify-center pt-2 flex-col">
        <Carousel setApi={setApi} className="w-full max-w-4xl cursor-pointer">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id}>
                <div className="p-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-primary/10 to-secondary/10 p-10 shadow-lg">
                    <Image
                      src={project.image || "/images/AltPlus-pic.png"}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="w-full h-64 object-cover shadow-md max-md:h-32"
                    />
                    <div className="space-y-4">
                      <Title level={1} size="md">
                        {project.title}
                      </Title>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.language.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-slate-800 hover:bg-slate-800/80 text-slate-400"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      {project.githubUrl !== "private" ? (
                        <div className="flex items-center gap-4 text-slate-400">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            <span>{project.star}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-4 h-4" />
                            <span>{project.fork}</span>
                          </div>
                        </div>
                      ) : null}
                      <div className="flex gap-3">
                        {project.githubUrl !== "private" ? (
                          <Link
                            target="_blank"
                            href={project.githubUrl}
                            className={cn(
                              buttonVariants({ variant: "outline" }),
                              "gap-2"
                            )}
                          >
                            <Github className="w-4 h-4" />
                            GitHub
                          </Link>
                        ) : null}
                        <Link
                          target="_blank"
                          href={project.url}
                          className={cn(buttonVariants(), "gap-2")}
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          {current} / {count}
        </div>
      </div>

    </Section >
  );
};
