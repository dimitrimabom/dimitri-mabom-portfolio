"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  GitFork,
  Github,
  Star,
} from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Section } from "./Section";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Title } from "./Title";
import Image from "next/image";
import { Spacing } from "./Spacing";

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <Section>
      <Title level={1} size="lg">
        Mes Réalisations
      </Title>
      <Spacing size="sm" />
      <div className="relative w-full overflow-hidden flex items-center justify-center">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300, position: "absolute" }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 25,
              duration: 0.5,
            }}
            className="w-full flex items-center justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-primary/10 to-secondary/10 p-10 shadow-lg  max-w-4xl">
              <Image
                src={projects[currentIndex].image || "/images/AltPlus-pic.png"}
                alt={projects[currentIndex].title}
                width={500}
                height={500}
                className="w-full h-64 object-cover shadow-md max-md:h-32"
              />
              <div className="space-y-4">
                <Title level={1} size="md">
                  {projects[currentIndex].title}
                </Title>
                <p className="text-muted-foreground">
                  {projects[currentIndex].description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {projects[currentIndex].language.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-slate-800 hover:bg-slate-800/80 text-slate-400"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                {projects[currentIndex].githubUrl !== "private" ? (
                  <div className="flex items-center gap-4 text-slate-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{projects[currentIndex].star}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{projects[currentIndex].fork}</span>
                    </div>
                  </div>
                ) : null}
                <div className="flex gap-3">
                  {projects[currentIndex].githubUrl !== "private" ? (
                    <Link
                      target="_blank"
                      href={projects[currentIndex].githubUrl}
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
                    href={projects[currentIndex].url}
                    className={cn(buttonVariants(), "gap-2")}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
