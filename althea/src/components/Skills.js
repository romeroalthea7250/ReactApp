import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-white-50 via-gray-100 to-gray-200 py-16"
    >
      <div className="container px-5 py-8 mx-auto text-center animate-fade-in">
        {/* Heading Section */}
        <div className="mb-12">
          <ChipIcon className="mx-auto inline-block w-10 mb-4 text-rose-600 animate-fade-in" />
          <h1 className="sm:text-4xl text-3xl font-semibold text-gray-700 mb-4">
            Skills
          </h1>
          <p className="text-lg text-gray-700 mx-auto xl:w-2/4 lg:w-3/4 leading-relaxed">
            Passionate about creating innovative and accessible tech solutions that prioritize user experience and problem-solving.
          </p>
        </div>

        {/* Skills List */}
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-4 sm:w-1/2 w-full transition-transform transform hover:scale-110 hover:rotate-2"
            >
              <div className="bg-gray-800 rounded-full flex items-center p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 mr-4" />
                <span className="title-font font-medium text-white">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
