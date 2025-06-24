import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const projects = [
    {
      title: "Socio‑Economic Factors & Life Expectancy Analysis",
      description: "A detailed R-based analysis exploring how socio‑economic variables and historical mortality impacted life expectancy trends in England and Wales.",
      image: "/Screenshot 2025-03-04 212748.png",
      technologies: ["R", "dplyr", "ggplot2", "tidyr"],
      liveUrl: "https://saravanaprashanth.github.io/SocioHealthViz/",
      githubUrl: "https://github.com/SaravanaPrashanth/SocioHealthViz",
      featured: true
    },
    {
      title: "Retail Sales Analytics Pipeline",
      description: "An end‑to‑end analytics project analysing retail sales data to uncover top revenue products, regional trends, and growth opportunities.",
      image: "/Data Analysis Project.drawio.png",
      technologies: ["Python", "SQL", "Jupyter Notebook", "Pandas"],
      liveUrl: "https://saravanaprashanth.github.io/data-analysis/",
      githubUrl: "https://github.com/SaravanaPrashanth/data-analysis",
      featured: true
    },
    
    {
      title: "Pancreas Segmentation using U-NET",
      description: "Pancreas segmentation in CT scans using a U-NET architecture. This deep learning model supports precise medical image analysis, improving diagnostic accuracy and efficiency in healthcare.",
      image: "public/final-output-visualization-RANDOM.png",
      technologies: ["Python", "Tensorflow", "Keras", "U-NET", "OpenCV", "Numpy", "Machine learning"],
      liveUrl: "https://saravanaprashanth.github.io/Pancreas-Segmentation-using-U-NET-Architecture/",
      githubUrl: "https://github.com/SaravanaPrashanth/personal-portfolio",
      featured: true
    }
    /*
    {
      title: "Social Media Platform",
      description: "A social networking platform with real-time messaging, content sharing, and community features built for scale and performance.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing creative work with smooth animations, optimized performance, and engaging user interactions.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Learning Management System",
      description: "An educational platform with course management, progress tracking, interactive assessments, and video streaming capabilities.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "AWS", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }*/
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of recent projects that showcase my skills in design, development, 
            and problem-solving across various industries and technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    title="View Live"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-700" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    title="View Code"
                  >
                    <Github className="w-4 h-4 text-gray-700" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    View Live
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
                  >
                    View Code
                    <Github className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.liveUrl}
                      className="p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <ExternalLink className="w-3 h-3 text-gray-700" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-1.5 bg-white/90 rounded-full hover:bg-white transition-colors duration-200"
                    >
                      <Github className="w-3 h-3 text-gray-700" />
                    </a>
                  </div>
                </div>
                
                <div className="p-5">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
