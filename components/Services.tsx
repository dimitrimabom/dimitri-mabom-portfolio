"use client";

import { useTranslation } from "react-i18next";
import { Section } from "./Section";
import { Title } from "./Title";

const Services = () => {

    const { t } = useTranslation();

    const services = [
        { title: "Développement Front-End", description: "Création d'interfaces modernes avec React.js, Next.js et Tailwind CSS." },
        { title: "Responsive Design", description: "Des interfaces adaptées à tous les écrans (mobile, tablette, desktop)." },
        { title: "SEO & Accessibilité", description: "Amélioration du référencement et accessibilité pour une meilleure visibilité." }
    ];

    return (
        <Section>
                <Title level={1} size="lg">
                {t('Services')}
                </Title>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    {services.map((service, index) => (
                        <div key={index} className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                            <h3 className="text-xl font-semibold">{service.title}</h3>
                            <p className="mt-2 font-thin text-sm text-muted-foreground">{service.description}</p>
                        </div>
                    ))}
                </div>
        </Section>
    );
};

export default Services;
