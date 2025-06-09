import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 text-gray-900 py-16 px-6 md:px-20 font-[Poppins]">

      {/* Image Section */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <div className="bg-white/40 backdrop-blur-lg p-4 rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 border border-white/20">
          <img
            src="IMG_20240222_221952_769.jpg"
            alt="Anshu Priya"
            className="w-64 md:w-80 h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="md:w-1/2 text-center md:text-left md:pl-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-purple-700 mb-4">Let's Connect!</h2>
        <p className="text-lg font-medium mb-2">Anshu Priya</p>
        <p className="mb-6 text-blue-700 underline decoration-dotted hover:text-blue-900 transition-all duration-300">
          priyaanshu11111@gmail.com
        </p>

        <p className="mb-3 uppercase text-sm tracking-wider text-gray-700 font-semibold">
          Follow me on
        </p>
        <div className="flex justify-center md:justify-start gap-6 text-2xl mt-2">
          <a href="#" className="text-pink-500 hover:text-pink-600 transition-transform transform hover:scale-110">
            <FaInstagram />
          </a>
          <a href="#" className="text-sky-500 hover:text-sky-600 transition-transform transform hover:scale-110">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/people/Anshu-Priya/pfbid0ajjVXFH5196PTE98z7VTsMWm9BMWiPnDikkqPwccuCpdeGJMu49ZS1D5XGKB1trJl/?mibextid=1DLi5Sdyi8no2WmV" className="text-blue-700 hover:text-blue-800 transition-transform transform hover:scale-110">
            <FaFacebookF />
          </a>
          <a href="#" className="text-indigo-600 hover:text-indigo-700 transition-transform transform hover:scale-110">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
