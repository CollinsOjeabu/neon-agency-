import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Turbine: React.FC<{ mouseX: any; mouseY: any }> = ({ mouseX, mouseY }) => {
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [15, -15]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);

  return (
    <div className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] flex items-center justify-center perspective-[1000px] pointer-events-none">
      <motion.div 
        style={{ rotateX, rotateY, rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Outer Rings */}
        {Array.from({ length: 16 }).map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border-[1px] border-black/80"
            style={{
              transform: `rotateX(${i * 11.25}deg) rotateY(${i * 22.5}deg)`,
              boxShadow: 'inset 0 0 40px rgba(0,0,0,0.05)'
            }}
          />
        ))}
        {/* Inner Structure */}
         {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`inner-${i}`}
            className="absolute inset-[30%] rounded-full border-[2px] border-black/40"
            style={{
              transform: `rotateX(${i * 45}deg) rotateY(${i * 22.5}deg)`,
            }}
          />
        ))}
        {/* Glowing Core */}
        <div className="absolute inset-[42%] rounded-full bg-black blur-2xl opacity-20 scale-75 animate-pulse" />
      </motion.div>
    </div>
  );
};

const KineticText: React.FC<{ children: React.ReactNode; className?: string; mouseX: any }> = ({ children, className, mouseX }) => {
  // Simple skew effect based on mouse X position relative to center
  const skewX = useTransform(mouseX, [0, window.innerWidth], [5, -5]);
  const x = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);

  return (
    <motion.div style={{ skewX, x }} className={className}>
      {children}
    </motion.div>
  );
};

const DataStream: React.FC = () => {
    const [time, setTime] = useState('');
    
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const ms = Math.floor(now.getMilliseconds() / 10).toString().padStart(2, '0');
            setTime(`${timeStr}.${ms}`);
        };
        const interval = setInterval(updateTime, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="font-mono text-[10px] md:text-xs tracking-widest text-gray-500 flex flex-col gap-1">
            <div className="flex justify-between w-32">
                <span>SYS.TIME</span>
                <span>{time}</span>
            </div>
            <div className="flex justify-between w-32">
                <span>COORDS</span>
                <span>40.7128° N</span>
            </div>
            <div className="flex justify-between w-32">
                 <span>STATUS</span>
                 <span className="text-neon bg-black px-1">ONLINE</span>
            </div>
        </div>
    )
}

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Parallax for text
  const turbineY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Parallax for turbine

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-[#FCFCFC] text-black overflow-hidden flex flex-col justify-center perspective-[2000px]">
      
      {/* 3D Focal Point - Interactive */}
      {/* Moved up from top-1/2 to top-[40%] to separate slightly and improve composition */}
      <motion.div 
        style={{ x: useTransform(smoothX, [0, window.innerWidth], [-50, 50]), y: turbineY }}
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-90 mix-blend-multiply pointer-events-none"
      >
        <Turbine mouseX={smoothX} mouseY={smoothY} />
      </motion.div>

      {/* Main Content Grid */}
      {/* Added pb-32 to shift the visual center of the text stack upwards */}
      <motion.div style={{ y }} className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col justify-center pb-32">
        
        {/* Asymmetric Technical Header */}
        <div className="absolute top-32 left-6 md:left-12 flex justify-between w-full pr-12 md:pr-24 pointer-events-none">
            <DataStream />
            <div className="hidden md:block font-mono text-[10px] text-gray-400 text-right">
                SCROLL VELOCITY<br/>
                MONITORING ACTIVE
            </div>
        </div>

        {/* Massive Typography Stack - Kinetic */}
        <div className="flex flex-col w-full font-sans font-black tracking-tighter leading-[0.8] select-none text-[clamp(4.5rem,15vw,13rem)] uppercase mix-blend-darken">
          
          <div className="overflow-hidden">
             <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             >
                <KineticText mouseX={smoothX} className="flex justify-start origin-left">
                    BUILDING
                </KineticText>
             </motion.div>
          </div>

          <div className="overflow-hidden flex justify-center relative">
             <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
             >
                 {/* The word "Tomorrow" interacts with the 3D element visually */}
                 {/* Changed to text-stroke-black to be readable on white background */}
                <KineticText mouseX={smoothX} className="relative z-0 text-transparent text-stroke-black hover:text-black transition-colors duration-500 cursor-none">
                    TOMORROW
                </KineticText>
             </motion.div>
          </div>

          <div className="overflow-hidden flex justify-end items-center gap-4 md:gap-12">
             <motion.div 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-6"
             >
                <span className="font-display text-lg md:text-3xl font-medium tracking-normal normal-case italic opacity-60 max-w-[200px] leading-tight text-right hidden md:block">
                    refining the<br/>digital noise
                </span>
                <KineticText mouseX={smoothX}>
                    TODAY
                </KineticText>
             </motion.div>
          </div>

        </div>

        {/* Bottom Area: Narrative & Scroll Indicator */}
        <div className="absolute bottom-12 left-0 right-0 px-6 md:px-12 flex items-end justify-between pointer-events-none">
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.5, duration: 1 }}
             className="flex items-center gap-4"
          >
             <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center animate-bounce">
                <ArrowDown size={16} />
             </div>
             <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">Scroll to Explore</span>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="max-w-xs md:max-w-md text-right"
          >
            <p className="font-sans text-sm md:text-base font-medium leading-relaxed tracking-wide text-gray-900">
              We engineer digital experiences that sit at the intersection of <span className="underline decoration-neon decoration-2 underline-offset-4">brutalist aesthetics</span> and intelligent interaction.
            </p>
          </motion.div>

        </div>

      </motion.div>
      
      {/* Noise Grain */}
      <div className="absolute inset-0 bg-noise opacity-[0.04] pointer-events-none mix-blend-overlay" />

    </section>
  );
};