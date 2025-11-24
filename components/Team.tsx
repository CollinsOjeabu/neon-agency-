import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { id: 1, name: 'Dor Dvora', role: 'Head of Design', image: 'https://picsum.photos/id/1005/400/500' },
  { id: 2, name: 'Moanes Mahajna', role: 'Art Director', image: 'https://picsum.photos/id/1012/400/500' },
  { id: 3, name: 'Dana Kravitz', role: 'Projects Manager', image: 'https://picsum.photos/id/1027/400/500' },
];

const DoodleOverlay: React.FC = () => (
  <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
    <motion.path
      d="M10,10 Q30,5 50,10 T90,10"
      fill="transparent"
      stroke="#ccff00"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      exit={{ pathLength: 0 }}
      transition={{ duration: 0.5 }}
    />
     <motion.path
      d="M80,20 Q85,50 80,80"
      fill="transparent"
      stroke="#ccff00"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      exit={{ pathLength: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    />
     <motion.circle
      cx="20" cy="80" r="5"
      fill="transparent"
      stroke="#ccff00"
      strokeWidth="2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3 }}
     />
  </svg>
);

export const Team: React.FC = () => {
  return (
    <section id="team" className="bg-dark text-white py-32">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-20 border-b border-gray-800 pb-8">
           <h2 className="font-pixel text-4xl md:text-6xl uppercase">Our Dream Team</h2>
           <span className="font-mono text-neon text-xl animate-pulse">_03</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative group cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-gray-900 aspect-[4/5] mb-6">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
        />
        <AnimatePresence>
          {isHovered && <DoodleOverlay />}
        </AnimatePresence>
        
        <div className="absolute top-4 left-4 p-2 bg-dark rounded-full">
            <div className="w-2 h-2 bg-neon rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <h3 className="font-pixel text-2xl text-neon mb-1 tracking-wider">{member.name}</h3>
      <p className="font-sans text-gray-400 font-light">{member.role}</p>
    </div>
  );
};