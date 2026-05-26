import React from 'react';
import profileImg from '/Users/apple/Desktop/projects/ portfolio-website/src/assets/img.jpeg'; // Replace with your actual image path

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="text-white text-center md:text-left space-y-6" data-aos="fade-right">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Hey! I am <span className="text-orange-400">Prakash Mani Patel</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-lg">
            AI/ML and Data Science Enthusiast passionate about building smart tools that make life easier 🚀
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-orange-500 text-white px-6 py-2 rounded-md transition duration-300 ease-in-out hover:bg-orange-600 hover:scale-105 hover:shadow-lg"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="bg-white text-gray-900 px-6 py-2 rounded-md border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 hover:scale-105 hover:shadow-md"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div
          className="w-72 h-72 rounded-full overflow-hidden border-4 border-orange-400 shadow-lg transform transition hover:scale-105"
          data-aos="fade-left"
        >
          <img
            src={profileImg}
            alt="Prakash Mani Patel"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
