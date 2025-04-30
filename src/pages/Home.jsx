import React from "react";
import hero from "../assets/hero1.jpeg";
import Courses from "./Courses";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Welcome to <span className="text-blue-500">Hack-Lab</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Learn cutting-edge tech skills, from web development to ethical
            hacking. Access curated courses taught by experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
              Explore Courses
            </button>
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right: Image or Illustration */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src={hero}
            alt="Hack Lab Hero"
            className="rounded-lg shadow-lg  "
          />
        </div>
      </div>
    </section>
    <Courses/>
    <About/>
    <Contact/>
    </>
    
  );
};

export default Home;
