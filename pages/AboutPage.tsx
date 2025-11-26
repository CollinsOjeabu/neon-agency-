
import React from 'react';
import { motion } from 'framer-motion';
import { Team } from '../components/Team';

export const AboutPage: React.FC = () => {
  return (
    <section className="bg-brand-white text-brand-black min-h-screen pt-40 pb-20 overflow-hidden">
      
      {/* Hero Text */}
      <div className="container mx-auto px-6 md:px-12 mb-32 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-sans font-medium text-[8vw] leading-[1.1] tracking-tighter"
        >
          WE ARE <span className="font-serif italic text-gray-400">AGENTS</span> OF<br/>
          DIGITAL <span className="relative inline-block">
             CHAOS
             <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="#ccff00" strokeWidth="4" fill="none" />
             </svg>
          </span> & ORDER.
        </motion.h1>
      </div>

      {/* Narrative Split */}
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 mb-40">
        <div className="md:col-span-4">
            <span className="block w-full h-[1px] bg-black/20 mb-6"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-500">Est. 2024 / NYC</span>
        </div>
        <div className="md:col-span-8">
            <span className="block w-full h-[1px] bg-black/20 mb-6"></span>
            <p className="font-display text-2xl md:text-4xl leading-relaxed font-light">
                Neon is a multi-disciplinary design studio operating at the bleeding edge of culture and technology. We believe that true innovation happens when you break the rules of traditional design. We don't just build websites; we create living, breathing digital organisms that adapt, react, and evolve.
            </p>
            <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                    <h3 className="font-sans font-bold text-lg mb-2">Precision</h3>
                    <p className="text-gray-600">Pixel-perfect execution in every interaction.</p>
                </div>
                <div>
                    <h3 className="font-sans font-bold text-lg mb-2">Performance</h3>
                    <p className="text-gray-600">WebGL powered experiences that fly.</p>
                </div>
            </div>
        </div>
      </div>

      {/* Team Section (Reused) */}
      <div className="bg-brand-black text-white py-20 -mx-6 md:-mx-12 px-6 md:px-12 rounded-[3rem]">
         <Team />
      </div>

      {/* Recognition / Awards List */}
      <div className="container mx-auto px-6 md:px-12 mt-40">
         <h2 className="font-display uppercase tracking-widest text-sm text-gray-400 mb-12">Recognition</h2>
         <div className="flex flex-col">
            {[
                { award: "Site of the Day", org: "Awwwards", year: "2024", project: "Æther Lens" },
                { award: "Developer Award", org: "Awwwards", year: "2024", project: "Neon Agency" },
                { award: "Website of the Month", org: "CSS Design Awards", year: "2023", project: "Mono Scale" },
                { award: "Best UI/UX", org: "Webby Awards", year: "2023", project: "Void Runner" },
            ].map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-black/10 hover:bg-gray-50 transition-colors px-4 -mx-4">
                    <div className="flex gap-4 md:w-1/3">
                        <span className="font-mono text-xs text-gray-400">{item.year}</span>
                        <span className="font-sans font-medium text-xl">{item.award}</span>
                    </div>
                    <div className="md:w-1/3 text-gray-500 font-display uppercase tracking-widest text-xs mt-2 md:mt-0">
                        {item.org}
                    </div>
                    <div className="md:w-1/3 text-right font-serif italic mt-2 md:mt-0">
                        {item.project}
                    </div>
                </div>
            ))}
         </div>
      </div>

    </section>
  );
};
