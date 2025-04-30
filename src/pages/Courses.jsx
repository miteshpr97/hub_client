import React from 'react';

const courseData = [
  {
    id: 1,
    title: 'Web Development Bootcamp',
    description: 'Master HTML, CSS, JavaScript, and React from scratch.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl_6AuG1TxzQdGmZSN4pF02iLepIl6-4ucQ&s',
    price: '₹1999',
  },
  {
    id: 2,
    title: 'Ethical Hacking & Cyber Security',
    description: 'Learn penetration testing, Kali Linux, and secure networking.',
    image: 'https://emeritus.org/in/wp-content/uploads/sites/3/2023/10/Ethical-Hacking-vs-Cyber-Security-1140x900-1-768x606.jpg.optimal.jpg',
    price: '₹2499',
  },
  {
    id: 3,
    title: 'AI & Machine Learning Mastery',
    description: 'Build ML models and AI solutions using Python, TensorFlow.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qthM2MyMCwn04LUar2wnQLQ6GNNczy9TGw&s',
    price: '₹2999',
  },
  {
    id: 4,
    title: 'Python for Beginners',
    description: 'Start coding with Python – beginner friendly course.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpE_CJvPxG2BqjyCT73AxhEq5wEUOGVViIg&s',
    price: '₹1499',
  },
];

const Courses = () => {
  return (
    <section className="bg-gray-100 py-20" id="courses">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Our <span className="text-blue-600">Courses</span>
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courseData.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
            >
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 font-bold">{course.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
