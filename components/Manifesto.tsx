import React from 'react';
import { motion } from 'framer-motion';
import { Marquee } from './Marquee';

export const Manifesto: React.FC = () => {
  return (
    <section id="agency" className="relative bg-white text-dark py-20 overflow-hidden">
      
      {/* Marquee Dividers */}
      <div className="w-full bg-neon py-4 border-y-4 border-black transform -rotate-1 scale-105 z-10 relative">
         <Marquee items={["Identity", "Motion", "Web3", "Commerce", "Strategy"]} speed={15} />
      </div>

      <div className="container mx-auto px-4 py-24 md:py-40 relative">
        <div className="flex flex-col gap-0 font-sans font-black tracking-tighter leading-[0.85]">
          
          <motion.div 
             initial={{ x: -100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="text-[12vw] md:text-[10vw] border-b-2 border-black pb-4 hover:pl-10 transition-all duration-300 cursor-none hover:text-neon hover:bg-black"
          >
            BRANDING
          </motion.div>

          <motion.div 
             initial={{ x: 100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-[12vw] md:text-[10vw] bg-neon px-4 py-2 ml-auto w-full text-right border-b-2 border-black hover:pr-10 transition-all duration-300 cursor-none"
          >
            CREATIVE
          </motion.div>

          <motion.div 
             initial={{ x: -100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-[12vw] md:text-[10vw] border-b-2 border-black pb-4 hover:pl-10 transition-all duration-300 cursor-none hover:text-neon hover:bg-black"
          >
            SOCIAL
          </motion.div>
          
          <motion.div 
             initial={{ x: 100, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="text-[12vw] md:text-[10vw] text-right text-transparent md:text-black"
             style={{ WebkitTextStroke: '2px black' }}
          >
            CAMPAIGN
          </motion.div>

        </div>

        <div className="absolute top-1/2 right-10 md:right-32 w-64 h-64 md:w-96 md:h-96 bg-black rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse pointer-events-none"></div>
      </div>
      
       <div className="w-full bg-dark text-white py-6 border-y-4 border-neon transform rotate-1 scale-105 z-10 relative mt-[-50px]">
         <Marquee items={["Don't just think outside the box", "Reshape It", "Destroy It", "Rebuild It"]} direction="right" speed={25} />
      </div>

    </section>
  );
};