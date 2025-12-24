'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, PieChart, ShieldCheck, TrendingUp, Handshake, FileText } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Services = () => {
    const { t } = useLanguage();

    const services = [
        {
            title: t('services.items.arch.title'),
            desc: t('services.items.arch.desc'),
            icon: <BarChart3 className="w-8 h-8" />,
            features: t('services.items.arch.features'),
        },
        {
            title: t('services.items.strat.title'),
            desc: t('services.items.strat.desc'),
            icon: <TrendingUp className="w-8 h-8" />,
            features: t('services.items.strat.features'),
        },
        {
            title: t('services.items.forensics.title'),
            desc: t('services.items.forensics.desc'),
            icon: <PieChart className="w-8 h-8" />,
            features: t('services.items.forensics.features'),
        },
        {
            title: t('services.items.assurance.title'),
            desc: t('services.items.assurance.desc'),
            icon: <ShieldCheck className="w-8 h-8" />,
            features: t('services.items.assurance.features'),
        },
        {
            title: t('services.items.debt.title'),
            desc: t('services.items.debt.desc'),
            icon: <FileText className="w-8 h-8" />,
            features: t('services.items.debt.features'),
        },
        {
            title: t('services.items.advisory.title'),
            desc: t('services.items.advisory.desc'),
            icon: <Handshake className="w-8 h-8" />,
            features: t('services.items.advisory.features'),
        },
    ];

    return (
        <section id="services" className="py-32 bg-white overflow-hidden">
            <div className="max-width-container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                        <span className="text-institutional-gold font-bold uppercase tracking-[0.4em] text-xs block mb-4">
                            {t('services.tagline')}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-institutional-navy tracking-tight">
                            {t('services.title_start')} <br />
                            <span>{t('services.title_highlight')}</span>
                        </h2>
                    </div>
                    <p className="text-lg text-institutional-slate/80 max-w-sm font-light leading-relaxed">
                        {t('services.description')}
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
                                {Array.isArray(service.features) && service.features.map((f: string) => (
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
