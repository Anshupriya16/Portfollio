import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-r from-pink-600 via-red-500 to-purple-600 text-white py-8 mt-12 shadow-inner">
    <div className="container mx-auto px-6 flex flex-col items-center space-y-4">
      <p className="text-lg font-semibold tracking-wide">
        &copy; {new Date().getFullYear()} <span className="text-yellow-300">Anshu Priya</span> — MERN Full Stack Developer
      </p>

      <div className="flex space-x-6 text-2xl">
        <a
          href="https://github.com/Anshupriya16/Anshupriya16.git"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition-transform transform hover:scale-125"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/anshu-priya-30bb80343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 transition-transform transform hover:scale-125"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-400 transition-transform transform hover:scale-125"
        >
          <FaTwitter />
        </a>
      </div>

      <div className="w-full h-1 bg-white/20 mt-4 rounded-full max-w-xs" />
    </div>
  </footer>
);

export default Footer;
