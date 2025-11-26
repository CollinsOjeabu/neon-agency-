import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-white text-brand-black pb-12 pt-32 overflow-hidden relative rounded-t-[3rem] -mt-12 z-40">
      <div className="container mx-auto px-6">
        
        <div className="mb-24 md:mb-40">
          <motion.h2 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans font-semibold text-[10vw] leading-[0.8] tracking-tighter"
          >
            LET'S<br/>
            CREATE<br/>
            <span className="text-stroke text-transparent" style={{ WebkitTextStroke: '1px #000' }}>HISTORY</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-black/10 pt-12">
           <div className="md:col-span-4">
              <span className="block font-display text-xs uppercase tracking-widest mb-6 text-gray-400">Socials</span>
              <div className="flex flex-col gap-2 font-display text-lg">
                 <a href="#" className="hover:text-neon transition-colors duration-300">Instagram</a>
                 <a href="#" className="hover:text-neon transition-colors duration-300">LinkedIn</a>
                 <a href="#" className="hover:text-neon transition-colors duration-300">Twitter / X</a>
                 <a href="#" className="hover:text-neon transition-colors duration-300">Awwwards</a>
              </div>
           </div>

           <div className="md:col-span-4">
              <span className="block font-display text-xs uppercase tracking-widest mb-6 text-gray-400">Contact</span>
              <a href="mailto:hello@neon.agency" className="font-sans text-2xl md:text-3xl hover:underline decoration-1 underline-offset-4">
                 hello@neon.agency
              </a>
              <p className="mt-4 font-display text-gray-500">
                 123 Broadway, Soho<br/>New York, NY 10012
              </p>
           </div>

           <div className="md:col-span-4 flex flex-col justify-between">
              <span className="block font-display text-xs uppercase tracking-widest mb-6 text-gray-400">Newsletter</span>
              <form className="w-full relative">
                 <input 
                   type="email" 
                   placeholder="Email Address" 
                   className="w-full bg-transparent border-b border-black/20 py-4 font-sans text-xl placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                 />
                 <button className="absolute right-0 top-1/2 -translate-y-1/2 text-sm uppercase tracking-widest hover:text-neon">
                    Submit
                 </button>
              </form>
           </div>
        </div>

        <div className="mt-24 flex justify-between items-end font-display text-[10px] uppercase tracking-[0.2em] text-gray-400">
           <span>© 2024 Neon Agency</span>
           <span>Privacy & Legal</span>
        </div>

      </div>
    </footer>
  );
};