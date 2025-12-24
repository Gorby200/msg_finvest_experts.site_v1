'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

import { useLanguage } from '@/context/LanguageContext';

const Portfolio = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState(0);

    const categories = t('portfolio.categories') || ['All'];

    const projects = [
        {
            title: t('portfolio.items.p1.title'),
            category: t('portfolio.items.p1.category'),
            value: t('portfolio.items.p1.value') || '$2.1B',
            desc: t('portfolio.items.p1.desc'),
            img: t('portfolio.items.p1.image') || '/images/portfolio1.webp',
            stats: { tenure: t('portfolio.items.p1.tenure'), impact: t('portfolio.items.p1.impact') }
        },
        {
            title: t('portfolio.items.p2.title'),
            category: t('portfolio.items.p2.category'),
            value: t('portfolio.items.p2.value') || '$500M',
            desc: t('portfolio.items.p2.desc'),
            img: t('portfolio.items.p2.image') || '/images/portfolio2.webp',
            stats: { tenure: t('portfolio.items.p2.tenure'), impact: t('portfolio.items.p2.impact') }
        },
        {
            title: t('portfolio.items.p3.title'),
            category: t('portfolio.items.p3.category'),
            value: t('portfolio.items.p3.value') || '$1.5B',
            desc: t('portfolio.items.p3.desc'),
            img: t('portfolio.items.p3.image') || '/images/hero.webp',
            stats: { tenure: t('portfolio.items.p3.tenure'), impact: t('portfolio.items.p3.impact') }
        },
        {
            title: t('portfolio.items.p4.title'),
            category: t('portfolio.items.p4.category'),
            value: t('portfolio.items.p4.value') || '$250M',
            desc: t('portfolio.items.p4.desc'),
            img: t('portfolio.items.p4.image') || '/images/texture.webp',
            stats: { tenure: t('portfolio.items.p4.tenure'), impact: t('portfolio.items.p4.impact') }
        },
    ];

    const filteredProjects = activeTab === 0
        ? projects
        : projects.filter(p => p.category === categories[activeTab]);

    return (
        <section id="portfolio" className="py-32 bg-institutional-cream">
            <div className="max-width-container mx-auto px-6">
                <div className="mb-20">
                    <span className="text-institutional-gold font-bold uppercase tracking-[0.4em] text-xs block mb-4">
                        {t('portfolio.tagline')}
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold text-institutional-navy tracking-tight mb-12">
                        {t('portfolio.title_start')} <span className="underline decoration-institutional-gold underline-offset-8">{t('portfolio.title_highlight')}</span>
                    </h2>

                    <div className="flex flex-wrap gap-4">
                        {categories.map((cat: string, index: number) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(index)}
                                className={`px-8 py-3 rounded-sm text-sm uppercase tracking-widest font-bold transition-all duration-300 ${activeTab === index
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
                                        <span className="text-institutional-gold text-3xl font-bold">
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
                                            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">{t('portfolio.labels.tenure')}</span>
                                            <span className="text-white font-medium">{project.stats.tenure}</span>
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">{t('portfolio.labels.impact')}</span>
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
