'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-32 bg-white">
            <div className="max-width-container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <span className="text-institutional-gold font-bold uppercase tracking-[0.4em] text-xs block mb-4">
                            Secure Consult
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-institutional-navy tracking-tight mb-8">
                            Establish Your <br />
                            <span className="text-gold-gradient italic">Mandate.</span>
                        </h2>
                        <p className="text-xl text-institutional-slate/80 mb-12 font-light leading-relaxed max-w-md">
                            Initiate a confidential dialogue with our lead partners. We prioritize discretion and institutional gravity in all engagements.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 glass flex items-center justify-center text-institutional-gold">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Electronic Mail</span>
                                    <a href="mailto:experts@msgfinvest.com" className="text-lg font-semibold text-institutional-navy hover:text-institutional-gold transition-colors">experts@msgfinvest.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 glass flex items-center justify-center text-institutional-gold">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Direct Line</span>
                                    <span className="text-lg font-semibold text-institutional-navy font-mono">+41 44 212 45 45</span>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 glass flex items-center justify-center text-institutional-gold">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">Global HQ</span>
                                    <span className="text-lg font-semibold text-institutional-navy">Bahnhofstrasse 102, Zürich, CH</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 p-6 border border-gray-100 bg-gray-50 flex items-center gap-4 rounded-sm">
                            <ShieldCheck className="text-green-600 w-8 h-8" />
                            <p className="text-xs text-gray-500 uppercase tracking-widest leading-relaxed">
                                All communications are encrypted and subject to Swiss confidentiality standards.
                            </p>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-institutional-navy p-12 shadow-2xl rounded-sm text-white"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Principal Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-institutional-gold transition-colors outline-none font-light" placeholder="e.g. Alexander von Roth" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Organization</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 p-4 focus:border-institutional-gold transition-colors outline-none font-light" placeholder="Legal Entity Name" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Confidential Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 p-4 focus:border-institutional-gold transition-colors outline-none font-light" placeholder="professional@domain.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Mandate Type</label>
                                <select className="w-full bg-white/5 border border-white/10 p-4 focus:border-institutional-gold transition-colors outline-none font-light appearance-none">
                                    <option className="bg-institutional-navy">Financial Modeling</option>
                                    <option className="bg-institutional-navy">Debt Restructuring</option>
                                    <option className="bg-institutional-navy">Strategic Acquisition</option>
                                    <option className="bg-institutional-navy">Other Institutional Engagement</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Brief Narrative</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 p-4 focus:border-institutional-gold transition-colors outline-none font-light" placeholder="Describe the scope of the engagement..." />
                            </div>

                            <button className="w-full bg-institutional-gold text-institutional-navy py-5 font-bold uppercase tracking-widest hover:bg-white transition-all duration-300">
                                Submit Mandate Proposal
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
