import React from 'react';

const ToolsSection = () => {
  const toolCategories = [
    {
      category: "Languages & Frameworks",
      tools: [
        { name: "Python", level: 80, color: "bg-blue-500" },
        { name: "R", level: 65, color: "bg-blue-600" },
        { name: "PyTorch", level: 70, color: "bg-gray-800" },
        { name: "Numpy & Pandas", level: 70, color: "bg-green-500" },
        { name: "Scikit-learn", level: 80, color: "bg-teal-500" }
      ]
    },
    {
      category: "Databases & Tools",
      tools: [
        { name: "SQL", level: 90, color: "bg-green-600" },
        { name: "MongoDB", level: 80, color: "bg-yellow-500" },
        { name: "Oracle", level: 75, color: "bg-blue-700" },
      ]
    },
    {
      category: "Tools & Platforms",
      tools: [
        { name: "Git", level: 95, color: "bg-orange-500" },
        { name: "KNIME", level: 80, color: "bg-blue-400" },
        { name: "AWS", level: 70, color: "bg-yellow-600" },
        { name: "IBM SPSS", level: 75, color: "bg-purple-500" },
        { name: "Power BI", level: 80, color: "bg-blue-300" }
      ]
    }
  ];

  const additionalTools = [
    "JavaScript", "HTML5", "CSS3", "Express.js", 
    "FastAPI", "Netlify", "Voiceflow", "Vapi", "Jupyter notebook","HPC", "Tableau"
  ];

  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tools & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I work with modern technologies and tools to build scalable, 
            performant applications that meet today's standards.
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {toolCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.tools.map((tool, toolIndex) => (
                  <div key={toolIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {tool.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {tool.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${tool.color} group-hover:animate-pulse`}
                        style={{ width: `${tool.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools Cloud */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalTools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 text-gray-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-teal-100 transition-all duration-200 hover:scale-105 cursor-default border border-blue-100"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "3+", label: "Years Experience" },
            { number: "10+", label: "Projects Completed" },
            { number: "15+", label: "Certifications" },
            { number: "15+", label: "Technologies Mastered" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600 text-white"
            >
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;