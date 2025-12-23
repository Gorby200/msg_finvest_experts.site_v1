'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const categories = ['All', 'Finance', 'Strategy', 'Institutional'];

const projects = [
    {
        title: 'Oil & Gas Debt Restructuring',
        category: 'Finance',
        value: '$2.1B',
        desc: 'Strategic debt modeling and restructuring for a top-tier energy conglomerate.',
        img: '/images/portfolio1.webp',
        stats: { tenure: '18 Months', impact: '+15% OCF' }
    },
    {
        title: 'Retail Chain Expansion Strategy',
        category: 'Strategy',
        value: '$500M',
        desc: 'Comprehensive market entry and investment analysis for a regional retail leader.',
        img: '/images/portfolio2.webp',
        stats: { tenure: '12 Months', impact: '24 Nodes' }
    },
    {
        title: 'Institutional Portfolio Audit',
        category: 'Institutional',
        value: '$1.5B',
        desc: 'Biannual independent audit and performance assessment of complex investment vehicles.',
        img: '/images/hero.webp',
        stats: { tenure: 'Ongoing', impact: 'Risk Optimized' }
    },
    {
        title: 'FinTech Growth Mandate',
        category: 'Finance',
        value: '$250M',
        desc: 'Business planning and valuation for a series-C technology farm acquisition.',
        img: '/images/texture.webp',
        stats: { tenure: '6 Months', impact: 'Successful Exit' }
    },
];

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('All');

    const filteredProjects = activeTab === 'All'
        ? projects
        : projects.filter(p => p.category === activeTab);

    return (
        <section id="portfolio" className="py-32 bg-institutional-cream">
            <div className="max-width-container mx-auto px-6">
                <div className="mb-20">
                    <span className="text-institutional-gold font-bold uppercase tracking-[0.4em] text-xs block mb-4">
                        Institutional Track Record
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-institutional-navy tracking-tight mb-12">
                        Selected <span className="italic underline decoration-institutional-gold underline-offset-8">Mandates</span>
                    </h2>

                    <div className="flex flex-wrap gap-4">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={`px-8 py-3 rounded-sm text-sm uppercase tracking-widest font-bold transition-all duration-300 ${activeTab === cat
                                        ? 'bg-institutional-navy text-white shadow-xl'
                                        : 'bg-white text-institutional-navy hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="group relative h-[500px] overflow-hidden bg-institutional-navy shadow-2xl rounded-sm"
                            >
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 brightness-75"
                                />

                                <div className="absolute inset-0 p-12 flex flex-col justify-end bg-gradient-to-t from-institutional-navy via-transparent to-transparent">
                                    <div className="flex justify-between items-end mb-6">
                                        <span className="text-institutional-gold font-mono text-3xl font-bold">
                                            {project.value}
                                        </span>
                                        <span className="bg-institutional-gold/10 text-institutional-gold px-3 py-1 text-[10px] uppercase tracking-widest font-bold border border-institutional-gold/20 backdrop-blur-md">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-institutional-gold transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-white/60 mb-8 max-w-sm line-clamp-2 font-light">
                                        {project.desc}
                                    </p>

                                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Tenure</span>
                                            <span className="text-white font-medium">{project.stats.tenure}</span>
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">Impact</span>
                                            <span className="text-white font-medium">{project.stats.impact}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
