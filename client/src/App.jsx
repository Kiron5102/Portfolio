import React, { useState, useEffect } from "react";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Admin from "./components/Admin";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  // Press 'A' key 3 times to open admin
  useEffect(() => {
    let keyCount = 0;
    const handleKeyPress = (e) => {
      if (e.key === 'a' || e.key === 'A') {
        keyCount++;
        if (keyCount >= 3) {
          setShowAdmin(true);
          keyCount = 0;
        }
      } else {
        keyCount = 0;
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (showAdmin) {
    return (
      <div>
        <button
          onClick={() => setShowAdmin(false)}
          className="fixed top-4 right-4 z-50 bg-slate-800 text-white px-4 py-2 rounded-lg"
        >
          ← Back to Portfolio
        </button>
        <Admin />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="container mx-auto px-6 pb-16">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;