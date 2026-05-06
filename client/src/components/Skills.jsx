import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import skillsImg from "../assets/images/skills.jpg";
import techBg from "../assets/images/tech.jpg";
import hypertensionBg from "../assets/images/hypertension.jpg";

const techStackItems = [
  { 
    name: "MERN Stack", 
    icon: <img src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs" alt="MERN" className="w-12 h-12 object-contain mx-auto" /> 
  },
  { 
    name: "Python", 
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10 mx-auto" /> 
  },
  { 
    name: "Machine Learning", 
    icon: <img src="https://img.icons8.com/color/96/artificial-intelligence.png" alt="ML" className="w-10 h-10 mx-auto" /> 
  },
  { 
    name: "MongoDB", 
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10 mx-auto" /> 
  },
  { 
    name: "Express.js", 
    icon: <img src="https://skillicons.dev/icons?i=express" alt="Express" className="w-10 h-10 mx-auto brightness-200" /> 
  },
  { 
    name: "React", 
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10 mx-auto animate-spin-slow" /> 
  },
  { 
    name: "Node.js", 
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="w-10 h-10 mx-auto" /> 
  },
  { 
    name: "JavaScript", 
    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" className="w-10 h-10 mx-auto rounded-md" /> 
  },
]; 

const researchItems = [
  { label: "Model", value: "XGBoost" },
  { label: "Accuracy", value: "92%" },
  { label: "Precision", value: "90%" },
  { label: "Recall", value: "88%" },
  { label: "F1 Score", value: "89%" },
];

const entrepreneurshipItems = [
  { title: "3AM ADDA", description: "Founder - User engagement platform" },
  { title: "Leadership", description: "Team management & strategy" },
  { title: "Business Growth", description: "Startup scaling & operations" },
];

const SkillCard = ({ title, icon, children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-800 bg-slate-900 p-6 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
    >
      <h3 className="text-xl font-semibold text-cyan-300 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {title}
      </h3>
      <div className="mt-5">{children}</div>
    </motion.div>
  );
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("tech");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="skills" className="mt-20">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-10"
      >
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center">
            My <span className="text-cyan-400 ml-2">Skills</span>
          </h2>
          <img src={skillsImg} alt="Skills" className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400 shadow-md" />
        </div>
        <p className="text-slate-400 mt-2">Explore my expertise and experience</p>
      </motion.div>

      {/* Sticky Tab Navigation */}
      <div className={`sticky top-16 z-40 bg-slate-950/95 backdrop-blur-md transition-all duration-300 ${isSticky ? 'border-b border-slate-800' : ''}`}>
        <div className="container mx-auto px-6 py-3 flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setActiveTab("tech")}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeTab === "tech"
                ? "bg-cyan-400 text-slate-900"
                : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
            }`}
          >
            Tech Stack
          </button>
          <button
            onClick={() => setActiveTab("research")}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeTab === "research"
                ? "bg-cyan-400 text-slate-900"
                : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
            }`}
          >
            Hypertension Research
          </button>
          <button
            onClick={() => setActiveTab("entrepreneur")}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeTab === "entrepreneur"
                ? "bg-cyan-400 text-slate-900"
                : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800"
            }`}
          >
            Entrepreneurship
          </button>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-8">
        {/* Tech Stack */}
        {activeTab === "tech" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ background: '#0093d6', borderRadius: '22px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8"
          >
            {techStackItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                style={{
                  background: index % 3 === 0 ? '#30360E' : index % 3 === 1 ? '#787F56' : '#E2D4B9',
                  border: 'none',
                  boxShadow: '0 4px 24px 0 rgba(48,54,14,0.18), 0 1.5px 8px 0 #787F56',
                  color: index % 3 === 2 ? '#30360E' : '#fff',
                  borderRadius: '18px',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                className="p-6 text-center transition-all cursor-pointer"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="font-medium">{item.name}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Hypertension Research */}
        {activeTab === "research" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div style={{background: '#0093d6', border: 'none', boxShadow: '0 4px 24px 0 rgba(48,54,14,0.18), 0 1.5px 8px 0 #787F56', color: '#fff', borderRadius: '22px'}} className="p-8">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-4">
                Hypertension Prediction Model
              </h3>
              <p className="text-slate-300 leading-7 mb-6">
                Developed a predictive model using <strong>XGBoost</strong> achieving{" "}
                <strong>92% accuracy</strong> in detecting hypertension from patient data.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {researchItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      background: index % 3 === 0 ? '#30360E' : index % 3 === 1 ? '#787F56' : '#E2D4B9',
                      border: 'none',
                      boxShadow: '0 4px 24px 0 rgba(48,54,14,0.18), 0 1.5px 8px 0 #787F56',
                      color: index % 3 === 2 ? '#30360E' : '#fff',
                      borderRadius: '14px',
                    }}
                    className="p-4 text-center"
                  >
                    <p className="text-sm font-semibold" style={{color: index % 3 === 2 ? '#30360E' : '#fff'}}>{item.label}</p>
                    <p className="text-xl font-bold" style={{color: index % 3 === 2 ? '#30360E' : '#fff'}}>{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Entrepreneurship */}
        {activeTab === "entrepreneur" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 md:grid-cols-3"
          >
            {entrepreneurshipItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                style={{
                  background: index % 3 === 0 ? '#30360E' : index % 3 === 1 ? '#787F56' : '#E2D4B9',
                  border: 'none',
                  boxShadow: '0 4px 24px 0 rgba(48,54,14,0.18), 0 1.5px 8px 0 #787F56',
                  color: index % 3 === 2 ? '#30360E' : '#fff',
                  borderRadius: '18px',
                }}
                className="p-6 transition-all"
              >
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
            {/* 3AM ADDA Feature Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              style={{
                background: 'linear-gradient(90deg, #30360E 60%, #787F56 100%)',
                border: 'none',
                boxShadow: '0 4px 24px 0 rgba(48,54,14,0.18), 0 1.5px 8px 0 #787F56',
                color: '#fff',
                borderRadius: '22px',
              }}
              className="p-6 md:col-span-3 transition-all"
            >
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-green-300 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-2xl font-bold mb-2">3AM ADDA Cafe</h4>
                  <p>
                    Founder of <strong>3AM ADDA Cafe</strong> - A startup focusing on user engagement and digital innovation. 
                    Led a team of 10+ members, managed business operations, and developed strategic growth plans.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}