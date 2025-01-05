import React from "react";

type Job = {
  title: string;
  company: string;
  description: string;
  startDate: string;
};

const jobs: Job[] = [
  {
    title: "Sr. Developer",
    company: "Experis",
    description: "I am currently working as Sr. Developer for Experis.",
    startDate: "May 2015",
  },
  {
    title: "Lead Developer",
    company: "Barclays",
    description: "Worked in the Global Finance Technology solutions Team in Barclays.",
    startDate: "May 2011",
  },
  {
    title: "Sr. Software Engineer",
    company: "Newgen",
    description: "Started my journey from Newgen working for Services and product teams.",
    startDate: "July 2007",
  },
];

export const Career: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Career</h1>
      <div className="relative">
        {/* Ligne verticale */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } mb-8`}
          >
            {/* Contenu du job */}
            <div
              className={`w-1/2 p-4 bg-white border rounded-lg shadow-md ${
                index % 2 === 0 ? "ml-4" : "mr-4"
              }`}
            >
              <h3 className="text-xl font-semibold">{job.title}</h3>
              <h4 className="text-gray-700">{job.company}</h4>
              <p className="text-gray-600">{job.description}</p>
              <p className="text-gray-500 text-sm">{job.startDate}</p>
            </div>
            {/* Point de la timeline */}
            <div
              className="w-4 h-4 bg-blue-500 border-2 border-white rounded-full z-10"
              style={{
                position: "relative",
                left: index % 2 === 0 ? "calc(-50% - 8px)" : "calc(50% - 8px)",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
