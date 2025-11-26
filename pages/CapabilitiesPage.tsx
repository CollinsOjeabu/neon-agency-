
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const capabilities = [
    {
        id: "01",
        title: "Digital Strategy",
        description: "We define the roadmap for your digital evolution. By analyzing market gaps and user behaviors, we craft strategies that position your brand ahead of the curve.",
        tags: ["Market Analysis", "User Personas", "Brand Positioning", "Content Strategy", "Technical Architecture"]
    },
    {
        id: "02",
        title: "UI/UX Design",
        description: "Designing interfaces that feel like an extension of the mind. We focus on intuitive patterns, brutalist aesthetics, and accessibility to create memorable journeys.",
        tags: ["Visual Design", "Wireframing", "Prototyping", "Design Systems", "Interaction Design"]
    },
    {
        id: "03",
        title: "Creative Development",
        description: "Where code becomes art. We specialize in high-performance WebGL, Three.js, and custom shaders to bring designs to life with fluid motion and depth.",
        tags: ["WebGL / Three.js", "React / Next.js", "GSAP Animations", "GLSL Shaders", "Performance Optimization"]
    },
    {
        id: "04",
        title: "Motion & 3D",
        description: "Adding the Z-axis to your brand. From kinetic typography to immersive 3D environments, we create assets that capture attention and tell complex stories instantly.",
        tags: ["3D Modeling", "Motion Graphics", "Kinetic Typography", "Video Editing", "Sound Design"]
    }
];

export const CapabilitiesPage: React.FC = () => {
    const [expanded, setExpanded] = useState<string | null>("01");

    return (
        <section className="bg-brand-white text-brand-black min-h-screen pt-40 pb-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Sidebar / Introduction */}
                    <div className="md:col-span-4 sticky top-40 h-fit">
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4 block">Our Expertise</span>
                        <h1 className="font-sans font-bold text-5xl md:text-7xl tracking-tighter mb-8 leading-[0.9]">
                            BUILT<br/>FOR<br/><span className="text-transparent text-stroke-black">IMPACT</span>
                        </h1>
                        <p className="font-display text-lg text-gray-600 leading-relaxed mb-12">
                            We bridge the gap between creative ambition and technical reality. Our capabilities are designed to scale from startups to enterprise ecosystems.
                        </p>
                        
                        <div className="bg-brand-black text-white p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <svg width="100" height="100" viewBox="0 0 100 100" className="animate-spin-slow">
                                    <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </div>
                            <h3 className="font-sans font-bold text-2xl mb-2">Ready to start?</h3>
                            <p className="font-display text-sm text-gray-400 mb-6">Let's discuss how we can elevate your digital presence.</p>
                            <a href="#contact" className="inline-block border border-white/30 rounded-full px-6 py-2 hover:bg-white hover:text-black transition-colors font-mono text-xs uppercase">
                                Book a Call
                            </a>
                        </div>
                    </div>

                    {/* Accordion List */}
                    <div className="md:col-span-8">
                        {capabilities.map((cap) => (
                            <motion.div 
                                key={cap.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border-t border-black/10 py-8"
                            >
                                <div 
                                    onClick={() => setExpanded(expanded === cap.id ? null : cap.id)}
                                    className="flex items-center justify-between cursor-pointer group"
                                >
                                    <div className="flex items-center gap-8">
                                        <span className={`font-mono text-sm transition-colors ${expanded === cap.id ? 'text-neon bg-black px-2' : 'text-gray-400'}`}>
                                            {cap.id}
                                        </span>
                                        <h2 className="font-sans text-3xl md:text-5xl font-light group-hover:pl-4 transition-all duration-300">
                                            {cap.title}
                                        </h2>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-colors ${expanded === cap.id ? 'bg-black text-white' : ''}`}>
                                        {expanded === cap.id ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expanded === cap.id && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pt-8 pl-14 md:pl-20 pr-4 md:pr-20">
                                                <p className="font-display text-xl leading-relaxed text-gray-700 mb-8">
                                                    {cap.description}
                                                </p>
                                                
                                                <div className="flex flex-wrap gap-3">
                                                    {cap.tags.map(tag => (
                                                        <span key={tag} className="font-mono text-xs uppercase border border-black/20 rounded-md px-3 py-1 text-gray-500 hover:border-black hover:text-black transition-colors cursor-default">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                        <div className="border-t border-black/10" />
                    </div>
                </div>
            </div>
        </section>
    );
};
