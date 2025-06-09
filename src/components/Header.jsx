import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-400 text-white shadow-xl sticky top-0 z-50 font-[Poppins]">
      <div className="container mx-auto flex justify-between items-center px-4 py-4 md:py-5">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold tracking-wide text-white">
          <span className="text-yellow-300">Anshu</span> Priya
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg font-medium">
          {['/', '/about', '/contact', '/education', '/skills', '/work', '/Achievement'].map((path, index) => (
            <Link
              key={index}
              to={path}
              className="hover:text-yellow-300 transition-all duration-300"
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-yellow-300 text-2xl focus:outline-none"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {isOpen && (
        <div className="md:hidden bg-white text-gray-800 rounded-b-xl shadow-md px-6 py-4 space-y-3">
          {['/', '/about', '/contact', '/education', '/skills', '/work', '/Achievement'].map((path, index) => (
            <Link
              key={index}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block text-base font-semibold hover:text-purple-600 transition"
            >
              {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
