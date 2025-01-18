import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MyWork } from "@/components/MyWork";
import { Section } from "@/components/Section";
import { Spacing } from "@/components/Spacing";
import { Footer } from "@/components/Footer";
import TechnologiesLine from "@/components/TechnologiesLine";

export default function Home() {
  
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <TechnologiesLine />
      <MyWork />

      {/* <Section>
        
        <section className="py-16 px-6">
          <h2 className="text-3xl font-bold ">Services</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="">
              <h3 className="text-xl font-bold">Développement Web</h3>
              <p className="mt-4">
                Création de sites modernes, optimisés et réactifs.
              </p>
            </div>
            <div className="">
              <h3 className="text-xl font-bold">Design UX/UI</h3>
              <p className="mt-4">
                Interfaces intuitives pour une expérience utilisateur optimale.
              </p>
            </div>
            <div className="">
              <h3 className="text-xl font-bold">Solutions sur Mesure</h3>
              <p className="mt-4">
                Intégration et développement adaptés à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <h2 className="text-3xl font-bold ">Me Contacter</h2>
          <form className="mt-8 max-w-lg mx-auto p-6 rounded-md">
            <div className="mb-4">
              <label className="block text-sm font-bold" htmlFor="name">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-2 rounded-md bg-gray-700 text-white"
                placeholder="Votre nom"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-2 rounded-md bg-gray-700 text-white"
                placeholder="Votre email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full mt-2 p-2 rounded-md bg-gray-700 text-white"
                placeholder="Votre message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 py-2 rounded-md hover:bg-blue-500"
            >
              Envoyer
            </button>
          </form>
        </section>

      </Section>
       */}

      <Spacing size="lg" />
      <Footer />
    </main>
  );
}
