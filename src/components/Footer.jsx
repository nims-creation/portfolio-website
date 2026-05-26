// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-12">
      <p className="text-sm">© {new Date().getFullYear()} Prakash Mani Patel. All rights reserved.</p>
      <div className="mt-2 flex justify-center gap-4">
        <a href="mailto:prakashmanipatel7@gmail.com" className="hover:text-orange-400">Email</a>
        <a href="https://github.com/PRAKASH230502" target="_blank" className="hover:text-orange-400">GitHub</a>
        <a href="https://www.linkedin.com/in/prakash-mani-181366275/" target="_blank" className="hover:text-orange-400">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
