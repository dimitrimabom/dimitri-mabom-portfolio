import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Front-End": "Front-End Developer",
          "welcome": "I'm passionate about code and everything to do with the web. I like to create modern and intuitive interfaces with tools such as <strong>React.js</strong> and <strong>Next.js</strong>. But above all, I make a point of transforming each project into something unique, a reflection of your ideas.",
          "cv": "My resume",
          "contact": "Contact Me",
          "Copyright": "Copyright &copy; 2025 Alt Plus. All rights reserved.",
          "Works": "My Works",
          "Services": "My Services",
          "Testimonials": "My Testimonials",
          "ContactTilte": "Contact",
        }
      },
      fr: {
        translation: {
          "Front-End": "Développeur Front-End",
          "welcome": "Je suis passionné par le code et tout ce qui touche au web. J’adore créer des interfaces modernes et intuitives avec des outils comme <strong>React.js</strong> et <strong>Next.js</strong>. Mais surtout, je mets un point d’honneur à transformer chaque projet en quelque chose d’unique, à l’image de vos idées.",
          "cv": "Mon cv",
          "contact": "Me Contacter",
          "Copyright": "Copyright &copy; 2025 Alt Plus. Tous droits réservés.",
          "Works": "Mes Réalisations",
          "Services": "Mes Services",
          "Testimonials": "Mes témoignages",
          "ContactTilte": "Contact Moi",
        }
      }
    },
    lng: "fr", // Langue par défaut
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
