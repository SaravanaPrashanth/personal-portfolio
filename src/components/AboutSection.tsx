import React from 'react';
import { Code, Heart, Lightbulb, Rocket, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Expertise",
      description: "3+ years of industry experience with proficieny in Python, SQL, and Power BI"
    },
    {
      icon: Lightbulb,
      title: "Analytical Thinking",
      description: "Translating complex problems into simple, data-driven solutions"
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Thriving in cross-functional teams to drive business results"
    },
    {
      icon: Rocket,
      title: "Continuous Growth",
      description: "Driven by curiosity and committed to learning, building, and improving"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="src\IMG_5864.JPG"
                alt="Saravana Prashanth"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl blur-3xl opacity-20 transform rotate-6 scale-105"></div>
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="mb-4">
                Hi there! I'm Saravana Prashanth, a data-driven problem solver with a passion for turnig raw
                data into real-world impact. With over 3 years of industry experience, and a strong academic
                foundation in Data Science, I've worked across roles in analytics, automation, and software engineering delivering
                scalable solutions that enhance business performance.
              </p>
              <p className="mb-4">
                My journey began with a deep curiosity about how systems work and a desire to create things that are both meaningful and efficient. 
                At Accenture, I built 200+ data pipelines that improved reporting accuracy and decision-making speed. 
                Today, I’m pursuing my MSc in Data Science at the University of Sheffield, 
                where I’m diving deeper into machine learning, big data, and visualisation.
              </p>
              <p>
                When I’m not exploring new ways to optimise data workflows or refining predictive models, 
                you’ll find me contributing to open-source projects on GitHub, 
                building out my portfolio, or engaging with the data science community to stay ahead of the curve. 
                Outside of work, I enjoy reading, staying active with regular gym workouts, and 
                spending time in nature to recharge and stay balanced.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;