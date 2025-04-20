"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MyWork } from "@/components/MyWork";
import { Spacing } from "@/components/Spacing";
import { Footer } from "@/components/Footer";
import { useVisibility } from "@/hooks/useVisibility";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import "@/i18n";

export default function Home() {
  const isHeroVisible = useVisibility("myName");

  return (
    <main>
      <Header isVisible={isHeroVisible} />
      <Spacing size="sm" />
      <Hero />
      <Spacing size="sm" />
      <MyWork />
      <Spacing size="sm" />
      <Services />
      <Spacing size="sm" />
      <Testimonials />
      <Spacing size="sm" />
      <Contact />
      <Spacing size="sm" />
      <Footer />
    </main>
  );
}
