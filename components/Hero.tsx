import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-dark pt-20">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.1] pointer-events-none" />
      
      {/* Floating Elements */}
      <motion.div 
        style={{ y: y1, rotate: 10 }}
        className="absolute top-1/4 right-[10%] w-64 h-64 border border-gray-800 rounded-full opacity-20 hidden md:block" 
      />
      <motion.div 
        style={{ y: y2, rotate: -10 }}
        className="absolute bottom-1/4 left-[10%] w-48 h-48 border border-neon rounded-none transform rotate-45 opacity-10 hidden md:block" 
      />

      <div className="container mx-auto px-4 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center"
        >
          <div className="relative">
             <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="font-pixel text-[15vw] leading-[0.8] tracking-tighter text-white mix-blend-exclusion"
            >
              DESIGN
            </motion.h1>
            <motion.div
               style={{ rotate }}
               className="absolute -top-10 -right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-neon rounded-full blur-2xl opacity-50 z-[-1]"
            />
          </div>
          
          <div className="relative">
             <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="font-pixel text-[15vw] leading-[0.8] tracking-tighter text-transparent"
              style={{ WebkitTextStroke: '2px white' }}
            >
              FUTURE
            </motion.h1>
             {/* 3D Visual Element simulating the metallic bag/shape */}
             <motion.img 
                src="https://picsum.photos/seed/shape3d/800/800"
                alt="Abstract 3D Shape"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] object-cover opacity-60 mix-blend-screen pointer-events-none grayscale contrast-150 rounded-full"
                style={{ y: y2 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ delay: 0.8 }}
             />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 md:mt-24 max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-gray-400 text-lg md:text-xl uppercase tracking-widest mb-8">
            <span className="text-neon">[</span> Crafted for the Next Generation <span className="text-neon">]</span>
          </p>
          <p className="font-sans text-xl md:text-2xl font-light leading-relaxed text-gray-200">
            We are an AI-driven design powerhouse. We don't just think outside the box; we reshape the digital reality.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-pixel text-xs text-neon animate-pulse">SCROLL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-neon to-transparent" />
      </div>
    </section>
  );
};