'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: 'Cumulative Project Value', value: '$5.0B+', sub: 'Institutional Mandates' },
    { label: 'Strategic Engagements', value: '200+', sub: 'Global Projects' },
    { label: 'Market Tenure', value: '20+', sub: 'Years of Excellence' },
    { label: 'Senior Experts', value: '25+', sub: 'Elite Advisory' },
];

const Stats = () => {
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
