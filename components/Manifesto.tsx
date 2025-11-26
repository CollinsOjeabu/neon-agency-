
import React from 'react';
import { motion } from 'framer-motion';

export const Manifesto: React.FC = () => {
  return (
    <section id="agency" className="relative bg-brand-white text-brand-black py-32 md:py-48 overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] -mt-20 z-30 shadow-[0_-50px_100px_rgba(0,0,0,0.1)]">
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
           <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
             className="mb-24"
           >
              <h3 className="font-display text-sm uppercase tracking-[0.2em] text-gray-400 mb-8 flex items-center gap-4">
                <span className="w-2 h-2 bg-neon rounded-full animate-pulse" />
                The Philosophy
              </h3>
              <p className="font-sans text-3xl md:text-5xl font-light leading-tight">
                In a world of noise, <span className="font-serif italic bg-neon/20 px-2">silence</span> is a luxury. We strip away the non-essential to reveal the profound. 
                Our design philosophy is rooted in purpose, executed with precision, and elevated by intelligence.
              </p>
           </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24 border-t border-black/10 pt-20">
           {/* Strategy */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2, duration: 0.8 }}
             className="flex flex-col gap-6"
           >
              <span className="font-display text-xs text-gray-400 uppercase tracking-widest">01 / Strategy</span>
              <h4 className="font-sans text-3xl font-medium group cursor-pointer">
                Digital Architecture
                <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 mt-2"></span>
              </h4>
              <p className="font-display text-gray-600 leading-relaxed text-lg">
                We don't just design pages; we architect ecosystems. Every interaction is calculated to drive engagement and narrative flow.
              </p>
           </motion.div>
           
           {/* Aesthetics */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="flex flex-col gap-6"
           >
              <span className="font-display text-xs text-gray-400 uppercase tracking-widest">02 / Aesthetics</span>
              <h4 className="font-sans text-3xl font-medium group cursor-pointer">
                Visual Silence
                 <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 mt-2"></span>
              </h4>
              <p className="font-display text-gray-600 leading-relaxed text-lg">
                Generous whitespace. Stark contrast. Typography that speaks. We let the content breathe so the message resonates.
              </p>
           </motion.div>
           
           {/* Technology */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.6, duration: 0.8 }}
             className="flex flex-col gap-6"
           >
              <span className="font-display text-xs text-gray-400 uppercase tracking-widest">03 / Technology</span>
              <h4 className="font-sans text-3xl font-medium group cursor-pointer">
                Fluid Motion
                 <span className="block h-[1px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 mt-2"></span>
              </h4>
              <p className="font-display text-gray-600 leading-relaxed text-lg">
                High-performance WebGL and native interactions create a tactile feel that transforms passive viewing into active experiencing.
              </p>
           </motion.div>

           <div className="flex flex-col justify-end">
              <div className="w-full h-[1px] bg-black/10 mb-8"></div>
              {/* This link directs to the Capabilities Page via hash routing */}
              <a href="#capabilities" className="block w-full">
                <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex justify-between items-center group cursor-pointer"
                >
                    <span className="font-display uppercase tracking-widest text-sm group-hover:text-neon transition-colors bg-black group-hover:bg-black text-transparent bg-clip-text group-hover:bg-clip-border group-hover:text-neon-inverse">Explore Capabilities</span>
                    <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-neon transition-all">
                        →
                    </div>
                </motion.div>
              </a>
           </div>
        </div>

      </div>
    </section>
  );
};
