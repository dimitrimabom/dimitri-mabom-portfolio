import Image from "next/image";

export default function TechnologiesLine() {
  const technologies = [
    {
      name: "TypeScript",
      logo: "/logo/typescript-icon.svg",
    },
    {
      name: "React",
      logo: "/logo/react.svg",
    },
    {
      name: "Tailwind",
      logo: "/logo/tailwindcss-icon.svg",
    },
    {
      name: "Node.js",
      logo: "/logo/nodejs-icon.svg",
    },
    {
      name: "MySQL",
      logo: "/logo/mysql-icon.svg",
    },
    {
      name: "Git",
      logo: "/logo/git-icon.svg",
    },
    {
      name: "WordPress",
      logo: "/logo/wordpress-icon.svg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
      <div className="flex items-center gap-8 overflow-x-auto pb-4 flex-wrap justify-center">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex-shrink-0">
            <div className="relative w-6 h-6 sm:w-12 sm:h-12 shadow-sm p-2">
              <Image
                src={tech.logo}
                alt={tech.name}
                fill
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
