'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import Clients from '@/components/Clients';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Stats />
            <Services />
            <Portfolio />
            <Clients />
            <Contact />

            <section className="py-32 bg-institutional-navy text-white">
                <div className="max-width-container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tight font-display">
                        {t('cta.title_start')} <span className="text-gold-gradient">{t('cta.title_highlight')}</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
                        {t('cta.description')}
                    </p>
                    <button className="bg-institutional-gold text-institutional-navy px-12 py-5 rounded-sm font-bold text-xl uppercase tracking-widest hover:bg-white transition-all duration-300">
                        {t('cta.button')}
                    </button>
                </div>
            </section>

            <footer className="py-12 bg-black text-white/40 border-t border-white/5">
                <div className="max-width-container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2 grayscale brightness-50">
                        <div className="w-8 h-8 bg-white/20 rounded-sm flex items-center justify-center font-bold text-white text-xs">
                            MSG
                        </div>
                        <span className="font-bold tracking-tight text-white/50">FinVest Experts</span>
                    </div>

                    <div className="flex gap-8 text-xs uppercase tracking-widest font-medium">
                        <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.compliance')}</a>
                        <a href="#" className="hover:text-white transition-colors">{t('footer.access')}</a>
                    </div>

                    <p className="text-[9px] uppercase tracking-[0.3em] font-medium">
                        {t('footer.rights')}
                    </p>
                </div>
            </footer>
        </main>
    );
}
