import React from 'react';

const Education = () => {
  const timeline = [
    {
      year: '2025',
      title: 'Bachelor of Technology (B.Tech)',
      college: 'Buddha Institute of Technology',
      branch: 'Information Technology',
    },
    {
      year: '2018',
      title: 'Intermediate',
      college: 'DAV Inter College',
    },
    {
      year: '2016',
      title: 'High School',
      college: 'DAV Girls Inter College',
    },
  ];

  return (
    <section id="education" className="bg-gradient-to-b from-purple-50 via-white to-pink-50 py-20 px-6 md:px-24 font-[Poppins]">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-purple-700 mb-16">
        🎓 My Education Journey
      </h2>

      <div className="relative border-l-4 border-purple-300 pl-6 space-y-12 max-w-4xl mx-auto">
        {timeline.map((item, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-3 top-2.5 w-5 h-5 bg-purple-600 border-4 border-white rounded-full shadow-md group-hover:scale-125 transition-transform duration-300"></div>

            {/* Content Box */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="text-sm text-purple-600 font-bold mb-1">{item.year}</div>
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.college}</p>
              {item.branch && (
                <p className="mt-1 text-gray-500 italic">Branch: {item.branch}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
