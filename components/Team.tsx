import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { id: 1, name: 'Dor Dvora', role: 'Head of Design', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop' },
  { id: 2, name: 'Moanes Mahajna', role: 'Art Director', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2574&auto=format&fit=crop' },
  { id: 3, name: 'Dana Kravitz', role: 'Projects Manager', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop' },
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="bg-brand-black text-white py-32 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
           <h2 className="font-sans font-light text-5xl md:text-7xl">The <span className="italic font-serif opacity-50">Minds</span></h2>
           <span className="font-display text-sm uppercase tracking-widest text-gray-500 mb-2">Architects of the future</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {team.map((member) => (
            <div key={member.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                <div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 z-10 transition-opacity duration-500 mix-blend-overlay" />
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              
              <div className="flex flex-col border-t border-white/20 pt-4 group-hover:border-neon/50 transition-colors duration-500">
                 <h3 className="font-sans text-2xl font-medium mb-1">{member.name}</h3>
                 <span className="font-display text-xs uppercase tracking-widest text-gray-500 group-hover:text-neon transition-colors">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};