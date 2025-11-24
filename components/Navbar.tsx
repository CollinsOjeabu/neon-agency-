import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="fixed w-full top-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-neon rounded-none transform rotate-45"></div>
        <span className="font-pixel text-2xl tracking-widest font-bold">NEON</span>
      </div>

      <div className="hidden md:flex gap-10 font-mono text-sm uppercase tracking-wider">
        {['Work', 'Agency', 'Services', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-neon transition-colors duration-300">
            {item}
          </a>
        ))}
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-dark border-b border-gray-800 p-8 flex flex-col gap-6 md:hidden">
           {['Work', 'Agency', 'Services', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-4xl font-pixel hover:text-neon text-white"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};