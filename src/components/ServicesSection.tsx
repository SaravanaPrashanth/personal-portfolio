import React from 'react';
import { Globe, Smartphone, Palette, Database, Zap, Shield, BrainCircuit, BarChart, User2Icon } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Database,
      title: "Data Analysis & Reporting",
      description: "Turning raw data into actionable insights through exploratory analysis, visualisation, and storytelling.",
      features: ["Python & SQL", "Power BI & KNIME", "Insight-Driven Dashboards"]
    },
    {
      icon: Zap,
      title: "Automation & Data Pipelines",
      description: "Designing and deploying efficient data workflows to streamline processing and ensure data quality at scale.",
      features: ["ETL Pipelines", "Data Cleaning", "Workflow Automation"]
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning & AI",
      description: "Building and validating machine learning models to solve real-world problems and support decision-making.",
      features: ["Supervised & Unsupervised Learning", "Scikit-learn & PyTorch", "Model Evaluation & Tuning"]
    },
    {
      icon: Globe,
      title: "End-to-End Data Projects",
      description: "Delivering full-cycle data projects—from problem definition to model deployment and performance tracking.",
      features: ["Business Understanding", "Pipeline to Prediction", "Cloud-Ready Solutions"]
    },
    {
      icon: BarChart,
      title: "Data Visualisation & Storytelling",
      description: "Creating engaging and clear visual stories that help stakeholders understand data and drive better outcomes.",
      features: ["Power BI", "Matplotlib & Seaborn", "Narrative Dashboards"]
    },
    {
      icon: User2Icon,
      title: "Collaboration & Consulting",
      description: "Working closely with cross-functional teams to integrate data into products, strategy, and operations.",
      features: ["Stakeholder Engagement", "Agile Data Projects", "Problem-Solving"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What I Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I help businesses make smarter decisions with data whether through automation, machine learning, or impactful storytelling. 
        From raw data to real-world insight, I bring analytical thinking and technical expertise to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-xl mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;