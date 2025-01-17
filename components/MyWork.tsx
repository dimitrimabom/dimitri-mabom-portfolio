"use client";
import Works from "@/_data/Works.json";
import Work from "./Work";
import { Section } from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface WorkItem {
  title: string;
  description: string;
}

export const MyWork = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Section className="pb-6">
        <h2 className="text-4xl font-semibold">Projets</h2>
      </Section>
      <div className="w-full flex items-center justify-center">
        <section className="w-9/12 mx-20 flex m-auto gap-4 flex-col">
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Works.map((work: WorkItem, index: number) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
                  <span className="text-4xl font-semibold">
                    <div className="flex gap-4 flex-row">
                      <Work
                        key={index}
                        title={work.title}
                        description={work.description}
                      />
                    </div>
                  </span>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
    </>
  );
};
