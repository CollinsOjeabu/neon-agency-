
import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigation } from './NavigationContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { navigateTo } = useNavigation();

  const handleNavClick = (page: string) => {
    setIsOpen(false);
    navigateTo(page);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="fixed w-full top-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 mix-blend-difference text-white pointer-events-none"
    >
      {/* Logo Area */}
      <div className="pointer-events-auto cursor-pointer flex-1">
        <button onClick={() => handleNavClick('home')} className="font-display text-2xl tracking-tighter font-bold uppercase">NEON</button>
      </div>

      {/* Center Links - Desktop */}
      <div className="hidden md:flex gap-12 font-sans text-xs uppercase tracking-widest font-semibold pointer-events-auto flex-1 justify-center">
        {['Works', 'About', 'Updates'].map((item) => (
          <button 
            key={item} 
            onClick={() => handleNavClick(item.toLowerCase())}
            className="relative group overflow-hidden"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300 ease-[0.16,1,0.3,1]">{item}</span>
            <span className="absolute top-0 left-0 block translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.16,1,0.3,1] text-neon">{item}</span>
          </button>
        ))}
      </div>

      {/* Right CTA - Desktop */}
      <div className="hidden md:flex flex-1 justify-end pointer-events-auto">
        <button onClick={() => handleNavClick('contact')} className="group flex items-center gap-2 border border-white/30 rounded-full px-6 py-2 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300">
          <span className="w-2 h-2 rounded-full bg-neon group-hover:bg-black transition-colors" />
          <span className="font-sans text-xs uppercase tracking-widest font-semibold">Start a Project</span>
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden pointer-events-auto">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-screen h-screen bg-brand-white text-brand-black p-8 flex flex-col justify-center items-center gap-8 md:hidden pointer-events-auto z-[60]">
           <button onClick={() => setIsOpen(false)} className="absolute top-8 right-6 text-black">
              <X size={24} />
           </button>
           {['Home', 'Works', 'About', 'Updates', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => handleNavClick(item.toLowerCase())}
              className="text-5xl font-sans font-light hover:text-neon transition-colors tracking-tighter"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </motion.nav>
  );
};
