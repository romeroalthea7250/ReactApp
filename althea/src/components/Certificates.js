import { PresentationChartLineIcon, BriefcaseIcon } from "@heroicons/react/solid";
import React from "react";
import { certs } from "../data";

export default function Certificates() {
  return (
    <section id="certs" className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-20">
      <div className="container px-5 py-10 mx-auto text-center">
        {/* Heading Section */}
        <div className="mb-12 animate-fade-in">
          <BriefcaseIcon className="mx-auto inline-block w-12 mb-4 text-rose-600" />
          <h1 className="sm:text-4xl text-3xl font-semibold text-gray-700 mb-4">
            Trainings &amp; Certificates
          </h1>
          <p className="text-base text-gray-700 mx-auto lg:w-3/4 leading-relaxed">
            Completed various trainings and earned certifications to enhance my skills and knowledge.
          </p>
        </div>

        {/* Certificates List */}
        <div className="flex flex-wrap justify-center gap-6">
          {certs.map((cert) => (
            <div key={cert} className="p-4 sm:w-1/3 w-full transition-transform transform hover:scale-105">
              <div className="bg-pink-950 rounded-xl flex items-center p-4 shadow-lg hover:shadow-xl transition-all duration-300">
                <PresentationChartLineIcon className="text-white w-6 h-6 mr-3" />
                <span className="title-font font-medium text-white text-sm">{cert}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
