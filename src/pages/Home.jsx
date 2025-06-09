import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Simulate checking if user is already signed up
    const isSignedUp = localStorage.getItem('isSignedUp') === 'true';

    if (isSignedUp) {
      navigate('/login');
    } else {
      navigate('/signup');
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 font-[Poppins]">
      
      {/* Left Image Section */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="bg-white/80 p-4 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500 border border-purple-200 backdrop-blur-md">
          <img
            src="IMG_20240407_123150_826.jpg"
            alt="Anshu Priya"
            className="w-64 md:w-80 h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center px-6 py-10 bg-white/70 text-gray-900 rounded-t-3xl md:rounded-none shadow-xl backdrop-blur-md space-y-6 text-center">
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-indigo-600 drop-shadow-sm">
          ✨ Anshu Priya
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-700 italic">
          MERN Stack Developer
        </p>

        <button
          onClick={handleButtonClick}
          className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-10 py-3 text-lg font-semibold rounded-full shadow-md hover:from-purple-400 hover:to-indigo-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          🚀 Reach Out
        </button>
      </div>
    </section>
  );
};

export default Home;
