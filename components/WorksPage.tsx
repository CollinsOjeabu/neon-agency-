import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: 'Æther Lens', category: '3D Direction', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', letter: '2024' },
  { id: 2, title: 'Mono Scale', category: 'Visual Identity', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2668&auto=format&fit=crop', letter: '2023' },
  { id: 3, title: 'Neo Cortex', category: 'Web Experience', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop', letter: '2023' },
  { id: 4, title: 'Void Runner', category: 'Motion Design', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop', letter: '2024' },
  { id: 5, title: 'Cyber Pulse', category: 'Product Design', image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2574&auto=format&fit=crop', letter: '2023' },
  { id: 6, title: 'Flux State', category: 'Development', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop', letter: '2022' },
];

export const WorksPage: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="bg-brand-black min-h-screen text-white pt-40 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay" />
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-32"
        >
            <h1 className="font-sans font-black text-[15vw] leading-[0.8] tracking-tighter text-transparent text-stroke-hover text-stroke" style={{ WebkitTextStroke: '1px #FCFCFC' }}>
                SELECTED<br/>WORKS
            </h1>
        </motion.div>

        <div className="relative z-10">
            {projects.map((project) => (
                <div 
                    key={project.id}
                    className="group relative border-t border-white/20 py-12 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer transition-colors duration-500 hover:border-neon/50"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                >
                    <div className="flex items-baseline gap-8">
                        <span className="font-mono text-sm text-gray-500">{project.letter}</span>
                        <h2 className="font-sans text-4xl md:text-7xl font-light tracking-tight group-hover:translate-x-4 transition-transform duration-500">
                            {project.title}
                        </h2>
                    </div>
                    <div className="flex items-center gap-8 mt-4 md:mt-0">
                        <span className="font-display text-xs uppercase tracking-widest text-gray-400 group-hover:text-neon transition-colors">
                            {project.category}
                        </span>
                        <div className="hidden md:flex w-12 h-12 rounded-full border border-white/20 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0">
                            →
                        </div>
                    </div>

                    {/* Image Reveal on Hover (Mobile hidden, Desktop absolute) */}
                    <AnimatePresence>
                        {hoveredProject === project.id && (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] pointer-events-none z-20 overflow-hidden"
                            >
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-neon/20 mix-blend-overlay" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
            <div className="border-t border-white/20" />
        </div>
      </div>
    </section>
  );
};