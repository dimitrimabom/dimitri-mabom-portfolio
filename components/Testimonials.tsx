"use client";

import { useTranslation } from "react-i18next";

import { Section } from "./Section";
import { Title } from "./Title";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { useEffect, useState } from "react";

const Testimonials = () => {

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

    const testimonials = [
        { name: "Jean Dupont", role: "CEO @ StartUpX", feedback: "Un travail de qualité, réactif et professionnel. Je recommande !" },
        { name: "Sophie Martin", role: "CTO @ TechCorp", feedback: "Une vraie expertise en React.js et Next.js, bravo Dimitri !" },
        { name: "Sophie Martin", role: "CTO @ TechCorp", feedback: "Une vraie expertise en React.js et Next.js, bravo Dimitri !" },
        { name: "Sophie Martin", role: "CTO @ TechCorp", feedback: "Une vraie expertise en React.js et Next.js, bravo Dimitri !" },
        { name: "Sophie Martin", role: "CTO @ TechCorp", feedback: "Une vraie expertise en React.js et Next.js, bravo Dimitri !" },
        { name: "Lucas Bernard", role: "Freelance", feedback: "Dimitri a su parfaitement comprendre mon projet et livrer une solution performante." }
    ];

    return (
        <Section>
            <div>
                <Title level={1} size="lg">
                    {t('Testimonials')}
                </Title>
                <Carousel setApi={setApi}
                    opts={{
                        align: "start",
                    }}
                    className="w-full mx-auto container mx-auto text-center cursor-pointer"
                >
                    <CarouselContent className="gap-3">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 md:basis-1/2 lg:basis-1/2 flex flex-col ml-2 gap-2 items-start">
                                <h3 className="mt-4 font-semibold text-xl">{testimonial.name}</h3>
                                <p className="italic text-gray-300 text-left">{testimonial.feedback}</p>
                                <span className="text-gray-400 text-sm">{testimonial.role}</span>
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
        </Section>
    );
};

export default Testimonials;

