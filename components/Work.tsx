export const Work = () => {
  return (
    <div className="bg-gradient-to-br from-purple-800 to-gray-900 p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-white">Portfolio</h3>
      <p className="text-gray-300 mt-2">
        Un site portfolio avec un chatbot AI capable de répondre à toutes les
        questions sur vous.
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-md">
          Next.js
        </span>
        <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-md">
          Langchain
        </span>
        <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-md">
          MongoDB
        </span>
        <span className="bg-gray-700 text-gray-300 text-sm px-3 py-1 rounded-md">
          Supabase
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
  );
};
