'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const PartnerCarousel = () => {
    const { t } = useLanguage();
    const [isPaused, setIsPaused] = useState(false);

    const partners = t('partners.items') || [];
    const title = t('partners.title') || 'Companies we have worked with';

    if (!partners || partners.length === 0) return null;

    // Triple the items to ensure we always have enough to fill the screen and loop
    const displayItems = [...partners, ...partners, ...partners];

    return (
        <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
            <div className="max-width-container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-institutional-gold font-bold block mb-4">
                        Elite Network
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-institutional-navy tracking-tight">
                        {title}
                    </h2>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Gradient Fade Edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden">
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: isPaused ? undefined : "-33.33%" }}
                            transition={{
                                duration: isPaused ? 100000000 : 50, // Effectively pauses
                                repeat: Infinity,
                                ease: "linear",
                            }}
                            className="flex gap-16 items-center whitespace-nowrap py-10"
                        >
                            {displayItems.map((partner: any, idx: number) => (
                                <div key={idx} className="flex-shrink-0">
                                    {partner.url ? (
                                        <a
                                            href={partner.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block hover:scale-110 transition-transform duration-300"
                                        >
                                            <PartnerLogo partner={partner} />
                                        </a>
                                    ) : (
                                        <div className="cursor-default">
                                            <PartnerLogo partner={partner} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const PartnerLogo = ({ partner }: { partner: any }) => (
    <div className="relative h-12 w-48 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 flex items-center justify-center">
        <Image
            src={partner.logo}
            alt={partner.name}
            fill
            className="object-contain"
            sizes="200px"
        />
    </div>
);

export default PartnerCarousel;
