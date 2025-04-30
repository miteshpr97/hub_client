import React from 'react';

const About = () => {
  return (
    <section className="bg-white text-gray-800 py-20" id="about">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-blue-600">Hack-Lab</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Hack-Lab is your go-to platform for mastering modern tech skills.
          Whether you're a beginner or an advanced learner, our expert-led
          courses in web development, cybersecurity, ethical hacking, and more
          will guide you step by step. Join thousands of learners and level up your
          career in tech!
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from experienced professionals who’ve worked in the field.</p>
          </div>
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Career-Focused</h3>
            <p className="text-gray-600">Our curriculum is designed to get you job-ready with real-world skills.</p>
          </div>
          <div className="p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Flexible Learning</h3>
            <p className="text-gray-600">Study at your own pace with lifetime access to all your enrolled courses.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
