import React from 'react';

const Skills = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
    'Express.js', 'MongoDB', 'Tailwind CSS', 'Bootstrap',
    'Git',
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-100 via-blue-200 to-teal-200 py-16 px-6 md:px-24">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12 drop-shadow-lg">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg text-center font-semibold text-gray-800 hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out transform"
          >
            <span className="text-lg">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
