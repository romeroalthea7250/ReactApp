import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-20">
      <div className="container px-5 py-10 mx-auto text-center">
        {/* Heading Section */}
        <div className="mb-12 animate-fade-in">
          <UsersIcon className="mx-auto inline-block w-12 mb-4 text-rose-600" />
          <h1 className="sm:text-4xl text-3xl font-semibold text-gray-700 mb-4">
            Client Testimonials
          </h1>
          <p className="text-base text-gray-700 mx-auto lg:w-3/4 leading-relaxed">
            Hear what clients say about my work and how it has impacted their success.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-4 sm:w-1/3 w-full transition-transform transform hover:scale-105"
            >
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <TerminalIcon className="block w-8 text-white mb-4" />
                <p className="leading-relaxed text-white mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">{testimonial.name}</span>
                    <span className="text-gray-500 text-sm uppercase">{testimonial.company}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
