import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: 'Æther Lens', category: '3D Direction', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop', letter: '01' },
  { id: 2, title: 'Mono Scale', category: 'Visual Identity', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2668&auto=format&fit=crop', letter: '02' },
  { id: 3, title: 'Neo Cortex', category: 'Web Experience', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2574&auto=format&fit=crop', letter: '03' },
  { id: 4, title: 'Void Runner', category: 'Motion Design', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop', letter: '04' },
];

const ProjectSection: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.8], [50, -50]);

  return (
    <div ref={containerRef} className="relative h-[120vh] w-full flex items-center justify-center overflow-hidden">
      
      {/* Background Image Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
         <div className="absolute inset-0 bg-black/40 z-10" />
         <img 
           src={project.image} 
           alt={project.title} 
           className="w-full h-full object-cover opacity-60 transition-opacity duration-700 hover:opacity-80"
         />
      </motion.div>

      {/* Content Content */}
      <motion.div 
        style={{ opacity, y: textY }}
        className="relative z-20 container mx-auto px-6 flex flex-col md:flex-row justify-between items-end w-full mix-blend-difference"
      >
         <div className="mb-10 md:mb-0">
            <span className="block font-display text-neon text-sm md:text-lg mb-4 tracking-widest uppercase">
              {project.letter} / {project.category}
            </span>
            <h2 className="font-sans font-bold text-6xl md:text-9xl text-white tracking-tighter leading-none">
              {project.title.split(' ')[0]}<br/>
              <span className="ml-10 md:ml-20 text-stroke">{project.title.split(' ')[1]}</span>
            </h2>
         </div>

         <div className="flex flex-col items-end">
            <p className="font-display text-white/80 max-w-sm text-right text-lg md:text-xl leading-relaxed mb-8 hidden md:block">
              A meticulously crafted digital experience pushing the boundaries of WebGL and interactivity.
            </p>
            <button className="group relative px-8 py-3 bg-transparent overflow-hidden border border-white/30 rounded-full">
               <div className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
               <span className="relative font-display uppercase tracking-wider text-sm group-hover:text-black transition-colors duration-500">
                 View Case Study
               </span>
            </button>
         </div>
      </motion.div>

      {/* Side Progress Line */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-white/10 z-20">
         <motion.div 
           style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
           className="w-full bg-neon shadow-[0_0_10px_#ccff00]"
         />
      </div>

    </div>
  );
};

export const WorkGrid: React.FC = () => {
  return (
    <section id="work" className="bg-brand-black relative">
       {/* Introduction to Section */}
       <div className="py-32 container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-12"
          >
             <h2 className="font-sans font-light text-5xl md:text-8xl text-white tracking-tight">
               Selected<br/><span className="italic font-serif opacity-50">Works</span>
             </h2>
             <div className="mt-8 md:mt-0 max-w-md">
                <p className="font-display text-gray-400 text-sm md:text-base leading-relaxed uppercase tracking-wide">
                  We don't just build websites. We craft immersive digital narratives that define brands.
                </p>
             </div>
          </motion.div>
       </div>

      <div className="w-full">
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>
      
      <div className="h-32 bg-brand-black" />
    </section>
  );
};