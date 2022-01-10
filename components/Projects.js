import React from "react";
import userData from "@constants/data";

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projects
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((proj, idx) => (
            <ProjectCard
              title={proj.title}
              link={proj.link}
              imgUrl={proj.imgUrl}
              number={`${idx + 1}`}
              description={proj.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number, description }) => {
  return (
    <div key={title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={imgUrl} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">

          <a href={link} className="block mt-2" target={"_blank"}>
            <p className="text-xl font-semibold text-gray-900">{title}</p>
            <p className="mt-3 text-base text-gray-500">{description}</p>
          </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <a >
              <span className="sr-only">{title}</span>
              <img className="h-10 w-10 rounded-full" src={imgUrl} alt="" />
            </a>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href={link} className="hover:underline" target={"_blank"}>
                {title}
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>


  )

};
