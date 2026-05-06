import React, { useState, useEffect } from "react";
import myphoto from "../assets/images/myphoto.jpg";
import linkedin from "../assets/images/linkedin-img.png";
import fiverr from "../assets/images/fiver-img.jpg";
import mail from "../assets/images/email-img.png";
import facebook from "../assets/images/facebook-img.jpg";
import { TypeAnimation } from "react-type-animation";
import { FiMenu, FiX } from "react-icons/fi";

const socialLinks = [
  { img: facebook, url: "https://www.facebook.com/share/18JV27n9Gn/?mibextid=wwXIfr" },
  { img: linkedin, url: "https://www.linkedin.com/in/kabir5102" },
  { img: fiverr, url: "https://www.fiverr.com/kiron15000" },
  { img: mail, url: "mailto:kabirhossen8748@gmail.com" },
];

const About = () => {
  const [activeItem, setActiveItem] = useState("about");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
          setActiveItem(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveItem(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#0f172a] px-6 py-16"
    >
      {/* --- Navigation Bar --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/90 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection("about")}>
            Portfolio
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center bg-slate-800/40 border border-slate-700/50 px-6 py-2 rounded-full space-x-8 shadow-inner">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeItem === item.id ? "text-cyan-400 scale-105" : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/1QtIyyUkisDW7J_SMbQSFS_1SoElyU7Ua/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-cyan-400 text-2xl">
            <FiMenu />
          </button>
        </div>

        {/* --- Mobile Sidebar (Right Half) --- */}
        <div 
          className={`fixed inset-y-0 right-0 w-2/3 max-w-[280px] bg-[#0f172a] border-l border-slate-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-[100] md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex flex-col h-full">
            <button onClick={() => setIsMenuOpen(false)} className="self-end text-cyan-400 text-3xl mb-8">
              <FiX />
            </button>
            <div className="space-y-6 flex-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left text-lg font-semibold transition-colors ${
                    activeItem === item.id ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <a
              href="https://drive.google.com/file/d/1QtIyyUkisDW7J_SMbQSFS_1SoElyU7Ua/view?usp=sharing"
              className="mt-auto block w-full text-center py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg"
            >
              Download CV
            </a>
          </div>
        </div>
        
        {isMenuOpen && (
          <div onClick={() => setIsMenuOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"></div>
        )}
      </nav>

      {/* --- Photo Section  */}
      <div className="relative flex-shrink-0 mb-8 md:mb-0 md:mr-20 mt-24">
        {/* Glow Effect only around the photo */}
        <div className="absolute inset-0 rounded-full animate-pulse border-2 border-cyan-400/50 shadow-[0_0_20px_rgba(34,211,238,0.5),inset_0_0_20px_rgba(34,211,238,0.3)] bg-cyan-500/20 blur-[60px]"></div>
        
        <img
          src={myphoto}
          alt="Profile"
          className="relative z-10 w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-[6px] border-[#38bdf8]/30 bg-[#1e293b]"
        />
      </div>

      {/* --- Text Content Section --- */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
          Hello, I'm <span className="text-[#38bdf8]">Kabir Hossen</span>
        </h2>
        <TypeAnimation
          sequence={["And I'm a ML Researcher", 2000, "And I'm a MERN Stack Developer", 2000, "And I'm an Entrepreneur", 2000]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl md:text-2xl font-semibold text-[#38bdf8] mb-4 block"
        />
        <p className="text-gray-400 mb-8 max-w-xl leading-relaxed">
          A tech-enthusiast with a heart for innovation and a mind for strategy. As a CSE graduate and entrepreneur, I craft elegant MERN stack applications and explore the frontiers of Machine Learning research. I love blending creative leadership with technical precision to build meaningful solutions that make a difference.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-5 mb-8">
          {socialLinks.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
              <img src={link.img} alt="social" className="w-9 h-9 rounded-full shadow-lg border border-slate-700 p-1 bg-slate-800" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button onClick={() => scrollToSection("contact")} className="px-8 py-3 bg-cyan-500 text-[#0f172a] rounded-full font-bold hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
            Hire Me
          </button>
          <button onClick={() => scrollToSection("contact")} className="px-8 py-3 border-2 border-[#38bdf8] text-[#38bdf8] rounded-full font-bold hover:bg-[#38bdf8] hover:text-white transition-all">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default About; 