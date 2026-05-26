import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-gray-900 text-white flex justify-between items-center shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold">Prakash Mani</h1>
      <ul className="flex gap-6 text-sm md:text-base">
        <li><a href="#home" className="hover:text-orange-400">Home</a></li>
        <li><a href="#about" className="hover:text-orange-400">About</a></li>
        <li><a href="#projects" className="hover:text-orange-400">Projects</a></li>
        <li><a href="#skills" className="hover:text-orange-400">Skills</a></li>
        <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;