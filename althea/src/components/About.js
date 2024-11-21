import React from "react";

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-white-50 via-rose-100 to-rose-50 py-20">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center">
        {/* Left Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center animate-fade-in">
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-rose-700">
            Hi, I'm <span className="text-gray-900">Althea!</span>
            <br className="hidden lg:inline-block " />
            Technical Support Specialist
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700">
            I bring my skills and experiences to solve challenges, foster mutual growth,
            and make meaningful contributions to organizational success. Dedicated to personal
            and professional advancement, I am eager to explore dynamic opportunities.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex text-white bg-rose-950 border-0 py-3 px-8 focus:outline-none hover:bg-rose-400 rounded-lg shadow-lg text-lg transition-all duration-500 transform hover:scale-105"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="inline-flex text-white bg-gray-900 border-0 py-3 px-8 focus:outline-none hover:bg-gray-300 hover:text-gray-900 rounded-lg shadow-lg text-lg transition-all duration-500 transform hover:scale-105"
            >
              See My Past Work
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="relative w-full rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <img
              className="object-cover object-center w-full"
              alt="Althea"
              src="https://raw.github.com/romeroalthea7250/PICPICKO/bd13c6f4b33e6a7cf934f653c17818f5a11930e5/ROMERO.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
