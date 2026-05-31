import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';


const App = () => {
  return (
    <Router>
      <div className="bg-[#030712] min-h-screen font-sans">
        <ScrollProgress />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Projects />
              <Skills />
              <Contact />
              <Footer />

            </>
          } />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
