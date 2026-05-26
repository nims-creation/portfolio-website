// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative bg-black text-white py-16 px-6 md:px-20 overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-1/4 -left-16 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">About Me</h2>
        <p className="text-lg leading-8 text-white/75">
          Hey there! 👋 I’m a Computer Science student passionate about building intelligent systems that solve complex, real-world problems.
          I qualified GATE DA 2026 with an All India Rank of 6574—and I’m constantly exploring new advancements in AI.
          <br />
          <br />
          When I’m not training models or working with Computer Vision, you’ll find me optimizing algorithms and sharpening my problem-solving skills through competitive programming.
        </p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-[0_0_60px_rgba(34,211,238,0.08)]">
          <p className="text-sm text-white/70 leading-relaxed">
            Focus areas: Computer Vision, Healthcare AI, and Intelligent Recommendations—delivered with strong ML fundamentals and clean, modern UI.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;