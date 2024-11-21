import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-pink-950 md:sticky top-0 z-10 shadow-lg transform transition-all duration-500 ease-in-out animate-slide-in">
      <div className="container mx-auto flex items-center p-3 md:p-4 flex-wrap flex-row justify-between animate-fade-in">
        <a
          href="#about"
          className="text-xl text-white hover:text-rose-400 transform transition-all duration-300 hover:scale-110 hover:underline hover:tracking-widest font-medium"
        >
          Althea D.L. Romero
        </a>
        <nav className="flex flex-wrap items-center text-base justify-center space-x-4">
          <a
            href="#projects"
            className="text-white hover:text-rose-300 transform transition-all duration-300 hover:scale-110 hover:underline hover:tracking-widest"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-white hover:text-rose-300 transform transition-all duration-300 hover:scale-110 hover:underline hover:tracking-widest"
          >
            Skills
          </a>
          <a
            href="#certs"
            className="text-white hover:text-rose-300 transform transition-all duration-300 hover:scale-110 hover:underline hover:tracking-widest"
          >
            Trainings & Certificates
          </a>
          <a
            href="#testimonials"
            className="text-white hover:text-rose-300 transform transition-all duration-300 hover:scale-110 hover:underline hover:tracking-widest"
          >
            Testimonials
          </a>
          <a
            href="#calendar"
            className="text-white hover:text-rose-300 transform transition-all duration-300 hover:scale-110 hover:underline hover:tracking-widest"
          >
            Calendar
          </a>
          <a
            href="#resume"
            className="text-white hover:text-rose-300 transform transition-all duration-300 hover:scale-110 hover:underline hover:tracking-widest"
          >
            Resume
          </a>
        </nav>
        <a
          href="#contact"
          className="text-white inline-flex items-center bg-pink-950 border-0 py-2 px-6 focus:outline-none hover:bg-rose-900 rounded-full text-lg font-semibold mt-4 md:mt-0 transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-rose-500 hover:ring-4 hover:ring-rose-300 hover:ring-opacity-50"
        >
          Hire Me
          <ArrowRightIcon className="w-5 h-5 ml-2 animate-pulse" />
        </a>
      </div>
    </header>
  );
}
