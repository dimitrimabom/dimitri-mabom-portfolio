"use client";

import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { Section } from "./Section";
import { Title } from "./Title";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

const Contact = () => {
  const { t } = useTranslation();
    return (
      <Section>
        <div>
          <Title level={1} size="lg">{t('ContactTilte')}</Title>
          <p className="p-4">
            🚀 Vous avez un projet ou une idée à développer ? Discutons-en et trouvons la meilleure solution ensemble.
          </p>
          <Link
            target="_blank"
            href="mailto:dimitrymabom@gmail.com"
            className={cn(buttonVariants(), "px-6 py-3")}
          >
            📩 {t('contact')}
          </Link>
        </div>
      </Section>
    );
  };
  
  export default Contact;
  