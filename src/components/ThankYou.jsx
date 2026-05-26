// src/components/ThankYou.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-6">
      <div className="text-center max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-xl border border-white/20">
        <FaCheckCircle className="text-5xl text-green-400 mb-4 mx-auto" />
        <h1 className="text-3xl font-bold mb-2">Thanks for Reaching Out!</h1>
        <p className="mb-6">Your message has been submitted successfully. I’ll get back to you soon.</p>
        <Link to="/" className="text-orange-400 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ThankYou;
