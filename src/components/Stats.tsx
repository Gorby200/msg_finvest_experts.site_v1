'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const Stats = () => {
    const { t } = useLanguage();

    const stats = [
        { label: t('stats.volume.label'), value: t('stats.volume.value'), sub: t('stats.volume.sub') },
        { label: t('stats.projects.label'), value: t('stats.projects.value'), sub: t('stats.projects.sub') },
        { label: t('stats.tenure.label'), value: t('stats.tenure.value'), sub: t('stats.tenure.sub') },
        { label: t('stats.experts.label'), value: t('stats.experts.value'), sub: t('stats.experts.sub') },
    ];

    return (
        <section className="relative py-20 bg-institutional-navy border-y border-white/5">
            <div className="max-width-container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col gap-2"
                        >
                            <span className="text-4xl md:text-5xl font-bold text-institutional-gold tracking-tight">
                                {stat.value}
                            </span>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-white uppercase tracking-widest leading-tight">
                                    {stat.label}
                                </span>
                                <span className="text-[10px] text-white/40 uppercase tracking-[0.2em]">
                                    {stat.sub}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
