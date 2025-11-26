
import React from 'react';
import { motion } from 'framer-motion';

const updates = [
    {
        id: 1,
        date: "Oct 24, 2024",
        tag: "Insight",
        title: "The Death of Flat Design: Why Depth is Returning",
        image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 2,
        date: "Sep 12, 2024",
        tag: "Studio",
        title: "Neon wins Agency of the Year at Digital Arts 2024",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 3,
        date: "Aug 05, 2024",
        tag: "Technology",
        title: "Implementing Fluid WebGL Physics on Mobile Devices",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 4,
        date: "Jul 22, 2024",
        tag: "Project",
        title: "Case Study: Redefining Fintech with Neo Cortex",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
    }
];

export const UpdatesPage: React.FC = () => {
    return (
        <section className="bg-brand-black min-h-screen text-white pt-40 pb-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/20 pb-12">
                    <h1 className="font-sans font-light text-6xl md:text-8xl tracking-tighter">
                        Log / <span className="font-serif italic text-gray-500">Updates</span>
                    </h1>
                    <div className="flex gap-4 mt-8 md:mt-0">
                        {['All', 'Studio', 'Insights', 'Technology'].map(filter => (
                            <button key={filter} className="font-mono text-xs uppercase border border-white/20 rounded-full px-4 py-2 hover:bg-white hover:text-black transition-colors">
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {updates.map((item, index) => (
                        <motion.article 
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="aspect-[16/9] overflow-hidden mb-8 relative">
                                <div className="absolute inset-0 bg-neon/20 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 rounded-full z-20">
                                    <span className="font-mono text-[10px] uppercase text-neon">{item.tag}</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <span className="font-display text-xs text-gray-500 uppercase tracking-widest">{item.date}</span>
                                <h2 className="font-sans text-3xl md:text-4xl leading-tight group-hover:underline decoration-1 underline-offset-4 decoration-neon transition-all">
                                    {item.title}
                                </h2>
                                <span className="text-neon text-sm font-bold opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">READ MORE →</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};
