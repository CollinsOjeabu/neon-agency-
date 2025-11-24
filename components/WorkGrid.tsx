import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: 'Abstract Art', category: '3D', image: 'https://picsum.photos/seed/art1/600/600', letter: 'A' },
  { id: 2, title: 'Bold Brand', category: 'Identity', image: 'https://picsum.photos/seed/brand1/600/600', letter: 'B' },
  { id: 3, title: 'Crypto Coin', category: 'Web3', image: 'https://picsum.photos/seed/crypto/600/600', letter: 'C' },
  { id: 4, title: 'Digital Drop', category: 'Commerce', image: 'https://picsum.photos/seed/drop/600/600', letter: 'D' },
  { id: 5, title: 'Electric EV', category: 'Product', image: 'https://picsum.photos/seed/ev/600/600', letter: 'E' },
  { id: 6, title: 'Future Tech', category: 'AI', image: 'https://picsum.photos/seed/tech/600/600', letter: 'F' },
];

const Card: React.FC<{ project: Project }> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-[400px] w-full bg-dark border border-gray-800 overflow-hidden group cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <span className="font-pixel text-[12rem] text-gray-900 group-hover:text-neon transition-colors duration-500 opacity-50 z-0">
          {project.letter}
        </span>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-60 transition-opacity group-hover:bg-opacity-80 z-10" />

      <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none">
        <div className="flex justify-between items-start">
           <span className="font-mono text-xs text-neon border border-neon px-2 py-1 rounded-sm">00{project.id}</span>
           <span className="font-pixel text-xl text-white transform translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">VIEW</span>
        </div>
        
        <div style={{ transform: "translateZ(50px)" }}>
          <h3 className="text-3xl font-sans font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-400 font-mono text-sm">{project.category}</p>
        </div>
      </div>
      
      {/* Background Image that reveals/moves */}
      <motion.img 
         src={project.image} 
         alt={project.title}
         className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-60 transition-opacity duration-500 grayscale group-hover:grayscale-0"
         style={{ transform: "translateZ(-20px) scale(1.2)" }}
      />
      
      {/* Crosshair Elements */}
      <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white opacity-50"></div>
      <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-white opacity-50"></div>
      <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white opacity-50"></div>
      <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white opacity-50"></div>

    </motion.div>
  );
};

export const WorkGrid: React.FC = () => {
  return (
    <section id="work" className="bg-dark py-24 relative">
       <div className="container mx-auto px-4 mb-16 flex justify-between items-end">
          <div className="max-w-xl">
             <h2 className="font-pixel text-5xl md:text-7xl mb-6 text-white">SELECTED <br /> <span className="text-neon">WORKS</span></h2>
             <p className="font-mono text-gray-400">A curation of digital experiences crafted with precision and chaos.</p>
          </div>
          <button className="hidden md:block font-sans font-bold text-lg text-white border-b-2 border-neon pb-1 hover:text-neon transition-colors">
            FULL ARCHIVE
          </button>
       </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-t border-gray-800">
        {projects.map((project) => (
          <div key={project.id} className="border-r border-b border-gray-800">
            <Card project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};