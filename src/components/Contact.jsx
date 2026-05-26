// src/components/Contact.jsx
import React from 'react';
import { FiMail, FiUser, FiMessageCircle } from 'react-icons/fi';

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] flex justify-center items-center px-4 py-16"
    >
      <div
        className="w-full max-w-3xl rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl p-8 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
        data-aos="zoom-in-up"
        data-aos-duration="800"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">Contact Me</h2>
        
        <form 
          action="https://formsubmit.co/prakashmanipatel7@gmail.com" 
          method="POST" 
          className="space-y-6"
        >
          {/* Redirect after submission */}
          <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />
          <input type="hidden" name="_captcha" value="false" />

          {/* Name Input */}
          <div className="flex items-center border border-gray-400 rounded-md px-3 py-2 bg-white/20 backdrop-blur-sm group hover:border-orange-400 transition">
            <FiUser className="text-white mr-3 group-hover:text-orange-400 transition" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full outline-none bg-transparent text-white placeholder-gray-200"
            />
          </div>

          {/* Email Input */}
          <div className="flex items-center border border-gray-400 rounded-md px-3 py-2 bg-white/20 backdrop-blur-sm group hover:border-orange-400 transition">
            <FiMail className="text-white mr-3 group-hover:text-orange-400 transition" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full outline-none bg-transparent text-white placeholder-gray-200"
            />
          </div>

          {/* Message Textarea */}
          <div className="flex items-start border border-gray-400 rounded-md px-3 py-2 bg-white/20 backdrop-blur-sm group hover:border-orange-400 transition">
            <FiMessageCircle className="text-white mt-1 mr-3 group-hover:text-orange-400 transition" />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full outline-none bg-transparent resize-none text-white placeholder-gray-200"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-md shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
