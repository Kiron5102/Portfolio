import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack MERN app with secure auth, payments and admin dashboard.",
      link: "https://github.com/yourusername/project-1"
    },
    {
      title: "ML Health Predictor",
      description: "Healthcare model with data visualization and prediction API.",
      link: "https://github.com/yourusername/project-2"
    },
    {
      title: "Startup Landing Page",
      description: "Modern responsive landing page built with React and Tailwind.",
      link: "https://github.com/yourusername/project-3"
    }
  ];

  return (
    <section id="projects" className="mt-20 px-6">
      {/* Update-1: Centered Section Title like MySkills */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
          Featured <span className="text-cyan-400 ml-2">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-cyan-400 mt-2 rounded-full"></div>
        <p className="text-slate-400 mt-4 text-center">Showcasing my latest work and technical expertise</p>
      </motion.div>

      {/* Update-2: Project Cards with MySkills Styling & Animation */}
      <div className="container mx-auto mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, y: -5 }}
            viewport={{ once: true }}
            style={{
              // Skills section er moto same 3-color logic
              background: index % 3 === 0 ? '#30360E' : index % 3 === 1 ? '#787F56' : '#E2D4B9',
              border: 'none',
              boxShadow: '0 4px 24px 0 rgba(48,54,14,0.18), 0 1.5px 8px 0 #787F56',
              color: index % 3 === 2 ? '#30360E' : '#fff',
              borderRadius: '22px',
            }}
            className="p-8 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 text-2xl">
                🚀
              </div>
              <h4 className="text-xl font-bold mb-3">{project.title}</h4>
              <p className={`text-sm leading-relaxed ${index % 3 === 2 ? 'text-slate-800' : 'text-slate-100'}`}>
                {project.description}
              </p>
            </div>
            
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className={`mt-6 inline-flex items-center font-bold transition-all ${
                index % 3 === 2 ? 'text-blue-900 hover:text-black' : 'text-cyan-300 hover:text-white'
              }`}
            >
              View on GitHub <span className="ml-2">→</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}