'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-institutional-navy">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.webp"
                    alt="Institutional Background"
                    fill
                    className="object-cover opacity-40 mix-blend-overlay"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-institutional-navy via-institutional-navy/80 to-transparent" />
            </div>

            <div className="max-width-container mx-auto px-6 relative z-10 w-full pt-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                            Institutional <span className="text-gold-gradient italic">Authority</span> <br />
                            Digital Excellence
                        </h1>

                        <p className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl leading-relaxed font-light">
                            Elevating global financial strategies through <span className="text-white font-medium">elite consulting</span>,
                            data-driven insights, and over two decades of institutional excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <button className="bg-institutional-gold text-institutional-navy px-10 py-4 rounded-sm font-bold text-lg uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-2xl group flex items-center gap-3">
                                Execute Vision
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>

                            <button className="glass text-white px-10 py-4 rounded-sm font-semibold text-lg uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
                                Our Mandate
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Corporate Texture Overlay */}
            <div className="absolute bottom-0 right-0 w-1/2 h-full z-0 opacity-20 pointer-events-none">
                <Image
                    src="/images/texture.webp"
                    alt="Texture"
                    fill
                    className="object-contain"
                />
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-institutional-gold to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
