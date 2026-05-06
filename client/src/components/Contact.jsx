import React from "react";
import { motion } from "framer-motion";
import { FiShoppingBag, FiExternalLink } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const whatsappNumber = "8801884414167"; 
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section id="contact" className="mt-20 px-6 mb-20 scroll-mt-24 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Heading & Description Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-400 mx-auto mt-2 rounded-full"></div>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-slate-300 leading-relaxed">
            Have a groundbreaking idea or a challenging project in mind? 
            I’m always open to discussing new opportunities, creative collaborations, 
            or being part of your next big vision. Let's build something extraordinary together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* DIV-1: Fiverr */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-[32px] bg-slate-900/40 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center text-center group min-h-[300px] shadow-xl"
          >
            <div className="mb-4 p-4 rounded-2xl bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all duration-500">
              <FiShoppingBag size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Hire Me on Fiverr</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-[250px]">
              Secure professional services and quality delivery through my Fiverr profile.
            </p>
            <motion.a
              href="https://www.fiverr.com/kiron15000"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-green-600/90 text-white font-bold rounded-full flex items-center gap-2 hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)]"
            >
              Go to Fiverr <FiExternalLink size={18} />
            </motion.a>
          </motion.div>

          {/* DIV-2: WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 rounded-[32px] bg-slate-900/40 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center text-center min-h-[300px] shadow-xl"
          >
            <div className="mb-4 p-4 rounded-2xl bg-cyan-400/10 text-cyan-400">
              <FaWhatsapp size={40} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Instant Chat</h3>
            <p className="text-slate-400 text-sm mb-6 max-w-[250px]">
              Skip the queue! Let's talk directly on WhatsApp for a faster response.
            </p>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-cyan-500/90 text-slate-950 font-bold rounded-full flex items-center gap-2 hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            >
              WhatsApp Me <FaWhatsapp size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* --- PRO WHATSAPP FLOATING BUTTON WITH HOVER EFFECTS --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          // Continuous Bouncing Animation
          animate={{ 
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          // Hover Effects: Scaling & Rotation
          whileHover={{ 
            scale: 1.25, 
            rotate: 10,
            transition: { duration: 0.3 } 
          }}
          whileTap={{ scale: 0.9 }}
          
          className="relative flex items-center justify-center w-16 h-16 rounded-full border-[5px] border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.8)] transition-all duration-300 overflow-hidden group"
          style={{
            background: "linear-gradient(135deg, #22c55e 0%, #10b981 100%)",
          }}
        >
          {/* Hover Overlay: Color change on hover */}
          <div className="absolute inset-0 bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Icon: Color change from White to Dark on Hover */}
          <FaWhatsapp size={32} className="text-white group-hover:text-slate-900 relative z-10 transition-colors duration-300 drop-shadow-md" />
          
          {/* Animated Pulse Ring */}
          <span className="absolute inset-0 rounded-full bg-white/20 animate-ping"></span>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact; 