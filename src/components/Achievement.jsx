import React from 'react';

const achievement = [
  {
    name: 'Data Science',
    role: 'Certification',
    quote:
      'This certification covers the fundamentals of data science including data analysis, data wrangling, machine learning models, and visualization techniques using Python.',
    image: 'WhatsApp Image 2025-04-29 at 10.14.43 PM.jpeg',
    dark: true,
  },
  {
    name: 'Machine Learning',
    role: 'Certification',
    quote:
      'An in-depth course covering machine learning algorithms, supervised and unsupervised learning, and real-world implementation using Scikit-learn and TensorFlow.',
    image: 'WhatsApp Image 2025-04-29 at 10.14.43 PM (1).jpeg',
    dark: false,
  },
  {
    name: 'MERN Stack',
    role: 'Workshop',
    quote:
      'A comprehensive hands-on workshop on full-stack development using MongoDB, Express.js, React, and Node.js with real-world projects.',
    image: 'Screenshot 2025-04-29 221150.png',
    dark: true,
  },
];

const Achievement = () => {
  return (
    <section className="py-16 px-6 md:px-24 bg-gradient-to-r from-indigo-50 via-blue-50 to-teal-50 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-700 drop-shadow">
        Achievements & Certificates
      </h2>
      {achievement.map((item, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row ${
            idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } mb-12 items-center gap-6`}
        >
          {/* Image block with full cover */}
          <div className="md:w-1/2 w-full">
            <div className="w-full h-80 md:h-[22rem] rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
              <img
                src={item.image}
                alt={`Certificate: ${item.name}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text block */}
          <div
            className={`md:w-1/2 w-full flex items-center ${
              item.dark ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-800'
            } p-6 rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
              <p className="uppercase text-sm text-gray-500 mb-2">{item.role}</p>
              <p className="text-base text-gray-600 italic">"{item.quote}"</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Achievement;
