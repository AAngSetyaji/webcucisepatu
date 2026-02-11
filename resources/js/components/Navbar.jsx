import React, { useState, useEffect } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 top-0 left-0 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform rotate-3">H</div>
                        <span className="font-bold text-xl tracking-tight text-slate-900">HUGO <span className="text-brand-600">SHOES</span></span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <a href="#home" className="text-slate-600 hover:text-brand-600 font-medium transition">Home</a>
                        <a href="#services" className="text-slate-600 hover:text-brand-600 font-medium transition">Layanan & Harga</a>
                        <a href="#about" className="text-slate-600 hover:text-brand-600 font-medium transition">Tentang Kami</a>
                        <a href="https://wa.me/6285711733334" target="_blank" className="px-5 py-2.5 bg-brand-600 text-white font-semibold rounded-full shadow-lg shadow-brand-500/30 hover:bg-brand-700 hover:scale-105 transition-all duration-300">
                            Booking Sekarang
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <div className="flex md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button" className="text-slate-600 hover:text-brand-600 focus:outline-none">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-xl absolute w-full rounded-b-2xl border-t border-slate-100 animate-fade-in-down">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50">Home</a>
                        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50">Layanan & Harga</a>
                        <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50">Tentang Kami</a>
                        <a href="https://wa.me/6285711733334" className="block mt-4 text-center w-full px-5 py-3 bg-brand-600 text-white font-bold rounded-xl shadow-lg">
                            Chat WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
