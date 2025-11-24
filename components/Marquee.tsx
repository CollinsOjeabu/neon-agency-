import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  className?: string;
  speed?: number;
}

export const Marquee: React.FC<MarqueeProps> = ({ items, direction = 'left', className = "", speed = 20 }) => {
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === 'left' ? "-50%" : "0%" }}
        initial={{ x: direction === 'left' ? "0%" : "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: speed }}
      >
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={index} className="mx-8 font-pixel text-4xl md:text-6xl uppercase text-dark flex items-center">
            {item} <span className="ml-8 text-2xl">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};