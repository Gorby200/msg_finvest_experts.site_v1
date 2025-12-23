'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, ShieldCheck, TrendingUp, Handshake, FileText } from 'lucide-react';

const services = [
    {
        title: 'Financial Architecture',
        desc: 'High-precision modeling and strategic business planning for multi-billion dollar ventures.',
        icon: <BarChart3 className="w-8 h-8" />,
        features: ['Precision Modeling', 'Stress Testing', 'Capital Optimization'],
    },
    {
        title: 'Strategic Mandates',
        desc: 'Corporate strategy development and organizational forensics for market leadership.',
        icon: <TrendingUp className="w-8 h-8" />,
        features: ['Market Entry', 'Diagnostic Audit', 'Growth Playbooks'],
    },
    {
        title: 'Investment Forensics',
        desc: 'Deep-dive analysis and independent feasibility studies for institutional investors.',
        icon: <PieChart className="w-8 h-8" />,
        features: ['Feasibility Analysis', 'Independent Review', 'Risk Mitigation'],
    },
    {
        title: 'Project Assurance',
        desc: 'Independent audit and performance tracking for large-scale investment portfolios.',
        icon: <ShieldCheck className="w-8 h-8" />,
        features: ['Project Audit', 'Due Diligence', 'Performance Benchmarking'],
    },
    {
        title: 'Debt Engineering',
        desc: 'Complex debt modeling, restructuring, and capital structure optimization.',
        icon: <FileText className="w-8 h-8" />,
        features: ['Restructuring', 'Debt Capacity', 'Structured Finance'],
    },
    {
        title: 'Transaction Advisory',
        desc: 'Full-spectrum M&A support and institutional-grade company valuation.',
        icon: <Handshake className="w-8 h-8" />,
        features: ['M&A Strategy', 'Asset Valuation', 'Deal Structuring'],
    },
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-white overflow-hidden">
            <div className="max-width-container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                        <span className="text-institutional-gold font-bold uppercase tracking-[0.4em] text-xs block mb-4">
                            Strategic Portfolio
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-institutional-navy tracking-tight">
                            Institutional Solutions for <br />
                            <span className="italic">Unprecedented Challenges.</span>
                        </h2>
                    </div>
                    <p className="text-lg text-institutional-slate/80 max-w-sm font-light leading-relaxed">
                        Our methodology combines deep financial expertise with rigorous analytical frameworks to deliver consistent alpha.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-gray-200 border border-gray-200 shadow-2xl">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-12 hover:bg-institutional-navy group transition-all duration-500 cursor-default"
                        >
                            <div className="text-institutional-gold mb-8 group-hover:text-white transition-colors duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-institutional-navy mb-4 group-hover:text-white transition-colors duration-500">
                                {service.title}
                            </h3>
                            <p className="text-institutional-slate group-hover:text-white/60 mb-8 leading-relaxed transition-colors duration-500">
                                {service.desc}
                            </p>

                            <ul className="space-y-3">
                                {service.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2 text-sm font-medium text-institutional-navy/40 group-hover:text-institutional-gold transition-colors duration-500 uppercase tracking-widest">
                                        <div className="w-1 h-1 bg-current rounded-full" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
