import React from "react";
import { DocumentDownloadIcon } from "@heroicons/react/solid";

export default function Resume() {
  return (
    <section id="resume" className="bg-rose-950 py-20">
      <div className="container px-5 py-10 mx-auto text-center">
        {/* Icon and Heading Section */}
        <div className="mb-12 animate-fade-in">
          <DocumentDownloadIcon className="mx-auto inline-block w-16 mb-6 text-rose-400 transform hover:rotate-12 transition-transform duration-500" />
          <h1 className="sm:text-4xl text-3xl font-bold text-white mb-6 tracking-wide leading-tight">
            Download my full resume!
          </h1>
          <p className="text-lg font-medium text-gray-300 mb-8 animate-fade-in-up">
            Click below to dive deeper into my professional journey and explore the opportunities we can create together.
          </p>
        </div>

        {/* Resume Download Button */}
        <div className="flex justify-center">
          <a
            href="https://raw.github.com/romeroalthea7250/AR/511205ff8d9220cba8c82735b77f26de8a0d097b/Romero%2C%20Althea%20-%20RESUME.pdf"
            download
            className="text-white bg-gradient-to-r from-pink-600 via-pink-800 to-rose-700 border-0 py-4 px-10 rounded-full text-lg font-semibold tracking-wide uppercase transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-gradient-to-r hover:from-gray-900 hover:to-rose-900 shadow-xl hover:shadow-2xl"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
