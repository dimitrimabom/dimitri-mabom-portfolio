import { Section } from "./Section";

export const Footer = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <footer className="w-full flex justify-center content-center py-4">
        Copyright &copy; 2025 Alt Plus. Tous droits réservés.
      </footer>
    </Section>
  );
};
