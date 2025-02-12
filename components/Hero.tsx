"use client";

import Image from "next/image";
import { Section } from "./Section";
import { buttonVariants } from "./ui/button";
import Link from "next/link.js";
import { cn } from "@/lib/utils";
import { Title } from "./Title";
import { useTranslation } from "react-i18next";

export const Hero = () => {

  const { t } = useTranslation();

  return (
    <Section className="flex max-md:items-center max-md:flex-col-reverse items-start gap-4">
      <div className="flex-[2] flex flex-col justify-start gap-6 h-full">
        <Title level={1} size="lg2" className="text-4xl mb-0">
          Dimitri Mabom
        </Title>
        <Title level={2} size="md" className="text-3xl  font-normal mb-0">
        {t('Front-End')}
        </Title>
        <p dangerouslySetInnerHTML={{ __html: t('welcome')  }}/>
        <div className="flex gap-2">
          <Link
            target="_blank"
            href="/pdf/CV_Dimitri_Mabom.pdf"
            className={cn(buttonVariants(), "gap-2")}
          >
            {t('cv')}
          </Link>
          <Link
            target="_blank"
            href="mailto:dimitrymabom@gmail.com"
            className={cn(buttonVariants({variant: "outline"}), "gap-2")}
          >
            📩 {t('contact')}
          </Link>
        </div>
      </div>
      <div className="flex-1 flex content-end relative h-full w-full max-md:w-2/3 max-md:text-center">
        <Image
          height={500}
          width={500}
          className="object-cover h-full w-full"
          src="/images/Profile.jpeg"
          alt="Me"
        />
      </div>
    </Section>
  );
};
