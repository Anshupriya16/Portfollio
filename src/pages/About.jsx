import React from 'react';

const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-6 md:p-12 font-[Poppins]">
      
      {/* Text Section */}
      <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12 text-center md:text-left">
        <h2 className="text-5xl font-extrabold text-purple-800 mb-6 border-b-4 border-purple-400 inline-block pb-2">
          About Me
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed tracking-wide">
          Hello! I'm <span className="text-purple-600 font-semibold">Anshu Priya</span>, a passionate and enthusiastic <span className="text-blue-600 font-semibold">MERN Stack Developer</span>.
          <br /><br />
          As a fresher, I bring strong foundational skills in 
          <span className="text-green-600 font-semibold"> MongoDB</span>, 
          <span className="text-green-600 font-semibold"> Express.js</span>, 
          <span className="text-green-600 font-semibold"> React.js</span>, and 
          <span className="text-green-600 font-semibold"> Node.js</span>,
          with a deep curiosity to learn, innovate, and build dynamic web applications.
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <div className="relative shadow-2xl rounded-xl overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
          <img
            src="IMG_20240708_003233_388.JPG"
            alt="Anshu Priya"
            className="rounded-xl w-full max-w-md object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
