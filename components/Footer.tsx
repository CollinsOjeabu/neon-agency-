import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-dark text-white pt-20 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          
          <div>
            <motion.div
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="bg-neon text-black p-8 md:p-12 inline-block transform -rotate-2 hover:rotate-0 transition-transform duration-500"
            >
               <h2 className="font-pixel text-6xl md:text-8xl leading-[0.8]">
                 START<br/>CREATING<br/>NOW
               </h2>
            </motion.div>
          </div>

          <div className="flex flex-col gap-8">
            <p className="font-sans text-xl font-light text-gray-300 max-w-md">
              Ready to disrupt the market? We combine award-winning design with cutting-edge AI to build brands that can't be ignored.
            </p>
            
            <form className="flex flex-col gap-4 max-w-md w-full">
               <input 
                 type="email" 
                 placeholder="ENTER YOUR EMAIL" 
                 className="bg-transparent border-b-2 border-gray-700 py-4 px-2 font-mono text-white focus:border-neon focus:outline-none placeholder-gray-600 transition-colors"
               />
               <button className="bg-white text-black font-pixel py-4 hover:bg-neon transition-colors text-lg mt-4">
                 LET'S TALK
               </button>
            </form>
          </div>

        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-20 pt-10 px-6 flex flex-col md:flex-row justify-between items-center gap-6">
         <span className="font-pixel text-2xl">NEON</span>
         <div className="flex gap-6 font-mono text-xs text-gray-500">
            <a href="#" className="hover:text-neon">INSTAGRAM</a>
            <a href="#" className="hover:text-neon">LINKEDIN</a>
            <a href="#" className="hover:text-neon">TWITTER</a>
         </div>
         <span className="font-mono text-xs text-gray-600">© 2024 NEON AGENCY. ALL RIGHTS RESERVED.</span>
      </div>
      
      {/* Decorative Grid Bottom */}
       <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-neon via-black to-neon opacity-50"></div>
    </footer>
  );
};