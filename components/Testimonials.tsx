"use client";

import { useTranslation } from "react-i18next";

import { Section } from "./Section";
import { Title } from "./Title";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const Testimonials = () => {

    const { t } = useTranslation();

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
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full mx-auto container mx-auto text-center p-4"
                >
                    <CarouselContent className="gap-3">
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 md:basis-1/2 lg:basis-1/3">
                                <p className="italic text-gray-300">{testimonial.feedback}</p>
                                <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
                                <span className="text-gray-400 text-sm">{testimonial.role}</span>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </Section>
    );
};

export default Testimonials;

