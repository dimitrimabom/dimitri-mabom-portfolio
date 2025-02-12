"use client";

import { useTranslation } from "react-i18next";
import { Section } from "./Section";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <footer className=" py-4">
      <p dangerouslySetInnerHTML={{ __html: t('Copyright')  }}/>
      </footer>
    </Section>
  );
};
