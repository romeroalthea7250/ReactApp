import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-20">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        {/* Heading Section */}
        <div className="flex flex-col w-full mb-20 animate-fade-in">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 text-rose-600" />
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-700 mb-4">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-700 text-lg">
            I developed a mobile app that translates American Sign Language into text and speech, along with a 2D game featuring interactive mechanics, combining my passion for accessibility and engaging technology.
          </p>
        </div>

        {/* Project Cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="w-full sm:w-1/2 lg:w-1/3 p-4 cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl">
                {/* Project Image */}
                <div className="w-full h-64 sm:h-80 bg-gray-200">
                  <img
                    alt="project"
                    className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-105"
                    src={project.image}
                  />
                </div>

                {/* Project Description */}
                <div className="px-6 py-8 flex flex-col justify-center">
                  <h2 className="tracking-widest text-sm title-font font-medium text-gray-900 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-semibold text-rose-700 mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-gray-700">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
