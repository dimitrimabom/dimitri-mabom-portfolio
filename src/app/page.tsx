import { EmptySpace } from "@/components/EmptySpace";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Technologie } from "@/components/Technologie";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Header />
        <Hero />
        <EmptySpace />
        <Technologie />
        <EmptySpace />
    </main>
  );
}
