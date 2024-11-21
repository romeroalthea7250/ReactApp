import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates"
import Testimonials from "./components/Testimonials";
import Calendar from "./components/Calendar";
import Resume from "./components/Resume";


export default function App() {
  return (
    <main>
      <Navbar/>
      <About/>
      <Projects/>
      <Skills />
      <Certificates />
      <Testimonials/>
      <Resume/>
      <Calendar/>
      <Contact/>
    </main>
  );
}
