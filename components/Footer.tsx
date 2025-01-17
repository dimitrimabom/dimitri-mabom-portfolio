import { Section } from "./Section";


export const Footer = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
        <footer className="w-full flex justify-center content-center py-4">
        Tous droits réservés. &copy; 2025 Dimitri Mabom.
      </footer>
    </Section>
  );
};
