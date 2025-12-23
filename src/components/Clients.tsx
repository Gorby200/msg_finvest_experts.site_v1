'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Clients = () => {
    return (
        <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-width-container mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">Trusted by Institutional Leaders</span>
                </div>

                <div className="relative flex overflow-hidden">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex whitespace-nowrap items-center gap-20 min-w-full"
                    >
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex gap-20 items-center justify-around h-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer">
                                <Image src="/images/clients.webp" alt="Client Logos" width={800} height={100} className="object-contain" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Clients;
