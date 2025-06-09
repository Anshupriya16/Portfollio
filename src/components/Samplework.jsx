import React from 'react';

const SampleWork = () => {
  const works = [
    {
      title: "Customer Query Management System",
      description:
        "I led my team in developing applications that would improve the company’s processes.",
      img: 'Screenshot 2024-10-15 234734.png',
    },
    {
      title: "Care Health Management Website",
      description:
        "As an intern, I helped create a cloud-based human resources information system that streamlined employee information.",
      img: 'Screenshot 2024-11-05 032616.png',
    },
    {
      title: 'Weather App',
      description:
        'I established a weather App to know the current weather of the city.',
      img: 'Screenshot 2025-04-29 020930.png',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-indigo-50 via-blue-100 to-teal-50 text-gray-800 py-16 px-6 md:px-24">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-700 drop-shadow-xl">
        Sample Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {works.map((work, index) => (
          <div
            key={index}
            className="text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden bg-white shadow-md p-6"
          >
            <img
              src={work.img}
              alt={work.title}
              className="w-full h-60 object-cover rounded-lg mb-4 mx-auto shadow-md transition-all duration-300 hover:opacity-80"
            />
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{work.title}</h3>
            <p className="text-sm text-gray-500">{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SampleWork;
