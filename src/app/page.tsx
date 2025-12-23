import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Stats />
            <Services />

            {/* Portfolio & and more sections will follow */}

            <section className="py-32 bg-institutional-navy text-white">
                <div className="max-width-container mx-auto px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                        Ready to <span className="text-gold-gradient italic">Execute?</span>
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
                        Our experts are standing by to transform your institutional challenges into strategic advantages.
                    </p>
                    <button className="bg-institutional-gold text-institutional-navy px-12 py-5 rounded-sm font-bold text-xl uppercase tracking-widest hover:bg-white transition-all duration-300">
                        Secure Consult
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
                        <a href="#" className="hover:text-white transition-colors">Privacy Mandate</a>
                        <a href="#" className="hover:text-white transition-colors">Compliance</a>
                        <a href="#" className="hover:text-white transition-colors">Institutional Access</a>
                    </div>

                    <p className="text-[10px] uppercase tracking-widest">
                        &copy; 2025 MSG FinVest Projects Portfolio. Institutional Grade.
                    </p>
                </div>
            </footer>
        </main>
    );
}
