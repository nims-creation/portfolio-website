// src/components/Skills.jsx
import React from 'react';
import { FaCode, FaTools, FaDatabase, FaRobot } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Languages */}
          <div className="group p-6 bg-gray-100 rounded-xl shadow transition-all transform hover:scale-105 hover:shadow-xl duration-300" data-aos="fade-right">
            <FaCode className="text-3xl text-orange-500 mb-4 group-hover:text-orange-600 transition" />
            <h3 className="font-semibold text-lg">Languages</h3>
            <p>C, C++, Java, Python, JavaScript</p>
          </div>

          {/* Frontend & Tools */}
          <div className="group p-6 bg-gray-100 rounded-xl shadow transition-all transform hover:scale-105 hover:shadow-xl duration-300" data-aos="fade-up">
            <FaTools className="text-3xl text-orange-500 mb-4 group-hover:text-orange-600 transition" />
            <h3 className="font-semibold text-lg">Frontend & Tools</h3>
            <p>HTML, CSS, TailwindCSS, ReactJS, Git, VS Code, Postman</p>
          </div>

          {/* Database */}
          <div className="group p-6 bg-gray-100 rounded-xl shadow transition-all transform hover:scale-105 hover:shadow-xl duration-300" data-aos="fade-left">
            <FaDatabase className="text-3xl text-orange-500 mb-4 group-hover:text-orange-600 transition" />
            <h3 className="font-semibold text-lg">Database</h3>
            <p>MySQL, MongoDB</p>
          </div>

          {/* AI / ML Libraries */}
          <div className="group p-6 bg-gray-100 rounded-xl shadow transition-all transform hover:scale-105 hover:shadow-xl duration-300" data-aos="fade-right">
            <FaRobot className="text-3xl text-orange-500 mb-4 group-hover:text-orange-600 transition" />
            <h3 className="font-semibold text-lg">AI / ML Libraries</h3>
            <p>Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, Matplotlib</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
