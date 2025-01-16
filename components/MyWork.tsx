import { Section } from "./Section";

export const MyWork = () => {
  return (
    <Section>
      <h2 className="text-3xl font-bold">Mes Projets</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {/* Exemple de projet */}
        

        {/* Ajouter d'autres projets de manière similaire */}
        <div className="bg-gradient-to-br from-purple-800 to-gray-900 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white">E-commerce App</h3>
          <p className="text-gray-300 mt-2">
            Une application e-commerce complète avec intégration Stripe et
            Next.js.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-md">
              Next.js
            </span>
            <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-md">
              Stripe
            </span>
            <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-md">
              TailwindCSS
            </span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <a
              href="#"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-green-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};
