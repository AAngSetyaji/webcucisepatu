import React from 'react';

export default function Main() {
    return (
        <main>
            {/* Hero Section */}
            <section id="home" className="relative bg-slate-50 pt-20 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-100 opacity-50 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-600 font-medium text-sm mb-6 border border-brand-100 shadow-sm animate-fade-in-up">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                            </span>
                            Jasa Cuci Sepatu Terpercaya di Jogja
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight">
                            <span className="block text-2xl md:text-3xl text-brand-600 font-bold mb-2 uppercase tracking-wide">Pusat Laundry & Cuci Sepatu Jogja</span>
                            Sepatu Bersih, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">Langkah Percaya Diri</span>
                        </h1>
                        <p className="text-xl text-slate-500 mb-10 leading-relaxed font-light">
                            Solusi <strong>cuci sepatu terbaik di Jogja & Sleman</strong>. Kami melayani deep cleaning, repaint, dan unyellowing sepatu dengan hasil premium.
                            Jasa laundry sepatu favorit mahasiswa, harga terjangkau, bersih, wangi, dan bergaransi.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition transform hover:-translate-y-1 shadow-xl shadow-slate-200">
                                Lihat Harga
                            </a>
                            <a href="https://wa.me/6285711733334" target="_blank" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl hover:bg-slate-50 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-lg shadow-slate-100">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
                                Hubungi Kami
                            </a>
                        </div>
                    </div>

                    {/* Floating Image/Card Effect (Optional Visual) */}
                    <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80 select-none pointer-events-none">
                        {/* Placeholder for abstract shoe cleaning visuals */}
                        <div className="aspect-square rounded-3xl bg-white shadow-xl shadow-brand-100/50 p-6 flex flex-col items-center justify-center gap-4 transform translate-y-8">
                            <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center text-brand-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <span className="font-bold text-slate-700">Cepat</span>
                        </div>
                        <div className="aspect-square rounded-3xl bg-white shadow-xl shadow-brand-100/50 p-6 flex flex-col items-center justify-center gap-4 transform -translate-y-4">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <span className="font-bold text-slate-700">Bersih</span>
                        </div>
                        <div className="aspect-square rounded-3xl bg-white shadow-xl shadow-brand-100/50 p-6 flex flex-col items-center justify-center gap-4 transform translate-y-4">
                            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <span className="font-bold text-slate-700">Terjangkau</span>
                        </div>
                        <div className="aspect-square rounded-3xl bg-white shadow-xl shadow-brand-100/50 p-6 flex flex-col items-center justify-center gap-4 transform -translate-y-8">
                            <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                            </div>
                            <span className="font-bold text-slate-700">Wangi</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services & Pricing */}
            <section id="services" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Daftar Layanan</h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">Pilih layanan perawatan terbaik untuk sepatu kesayanganmu.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Express */}
                        <div className="relative group bg-slate-50 rounded-3xl p-8 hover:bg-brand-600 hover:scale-[1.02] transition-all duration-300">
                            <div className="absolute top-0 right-0 p-6">
                                <span className="bg-brand-100 text-brand-600 group-hover:bg-white/20 group-hover:text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">Cepat</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-2">Express Cleaning</h3>
                            <p className="text-slate-500 group-hover:text-brand-100 mb-6 text-sm">12-24 Hours / One Day Service</p>
                            <div className="text-4xl font-extrabold text-brand-600 group-hover:text-white mb-8">50K</div>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center text-slate-700 group-hover:text-white">
                                    <svg className="w-5 h-5 mr-3 text-brand-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Express Cleaning In Out
                                </li>
                                <li className="flex items-center text-slate-700 group-hover:text-white">
                                    <svg className="w-5 h-5 mr-3 text-brand-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Siap pakai besok
                                </li>
                            </ul>
                            <a href="https://wa.me/6285711733334?text=Halo%20Hugo%20Shoes,%20saya%20mau%20order%20Express%20Cleaning" className="w-full block text-center bg-white text-slate-900 py-3 rounded-xl font-bold shadow-sm hover:bg-slate-100 transition">Pesan Sekarang</a>
                        </div>

                        {/* Deep Cleaning */}
                        <div className="relative group bg-slate-900 rounded-3xl p-8 text-white scale-105 shadow-2xl z-10">
                            <div className="absolute top-0 right-0 p-6">
                                <span className="bg-brand-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">Best Seller</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Deep Cleaning</h3>
                            <p className="text-slate-400 mb-6 text-sm">3 Day Finish - Pembersihan Mendetail</p>
                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-4xl font-extrabold text-white">35K</span>
                                <span className="text-slate-400 font-normal">/ pasang</span>
                            </div>
                            <ul className="space-y-3 mb-8 text-sm text-slate-300">
                                <li className="flex justify-between border-b border-slate-700 pb-2">
                                    <span>Casual Shoes, Canvas, Sneakers</span>
                                    <span className="font-bold text-white">35K</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-700 pb-2">
                                    <span>Leather Shoes</span>
                                    <span className="font-bold text-white">35K</span>
                                </li>
                                <li className="flex justify-between border-b border-slate-700 pb-2">
                                    <span>Flat Shoes / Kids Shoes</span>
                                    <span className="font-bold text-white">25K</span>
                                </li>
                            </ul>
                            <p className="text-xs text-slate-500 mb-8 leading-relaxed">
                                Membersihkan seluruh bagian sepatu dari dalam dan detail tersembunyi, serta menghilangkan bau tidak sedap.
                            </p>
                            <a href="https://wa.me/6285711733334?text=Halo%20Hugo%20Shoes,%20saya%20mau%20order%20Deep%20Cleaning" className="w-full block text-center bg-brand-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-brand-500/30 hover:bg-brand-500 transition">Pesan Sekarang</a>
                        </div>

                        {/* Standard & Premium */}
                        <div className="flex flex-col gap-6">
                            {/* Standard */}
                            <div className="bg-slate-50 rounded-3xl p-6 group hover:bg-brand-50 transition-colors">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Standard Cleaning</h3>
                                <p className="text-xs text-slate-500 mb-3">3 Day Finish</p>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="text-3xl font-extrabold text-brand-600">27K</div>
                                    <a href="https://wa.me/6285711733334" className="text-xs font-bold underline text-slate-400 hover:text-brand-600">Order</a>
                                </div>
                                <p className="text-xs text-slate-600">Membersihkan kotoran luar dan menjaga tampilan sepatu tetap bersih.</p>
                            </div>

                            {/* Premium */}
                            <div className="bg-slate-50 rounded-3xl p-6 group hover:bg-brand-50 transition-colors flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">Premium Cleaning</h3>
                                <p className="text-xs text-slate-500 mb-3">3 Day Finish - Noda Membandel</p>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="text-3xl font-extrabold text-brand-600">40K</div>
                                    <a href="https://wa.me/6285711733334" className="text-xs font-bold underline text-slate-400 hover:text-brand-600">Order</a>
                                </div>
                                <ul className="space-y-1 mb-3 text-xs text-slate-600">
                                    <li className="flex justify-between"><span>Casual/Sneakers</span> <span className="font-bold">40K</span></li>
                                    <li className="flex justify-between"><span>Flat/Kids</span> <span className="font-bold">35K</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Additional Services */}
                    <div className="mt-12 bg-slate-50 rounded-3xl p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Layanan Tambahan</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            <div className="bg-white p-4 rounded-2xl text-center shadow-sm">
                                <div className="font-bold text-slate-900 mb-1">Reglue</div>
                                <div className="text-brand-600 font-bold">35K</div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl text-center shadow-sm">
                                <div className="font-bold text-slate-900 mb-1">Sole Wash</div>
                                <div className="text-brand-600 font-bold">45K</div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl text-center shadow-sm">
                                <div className="font-bold text-slate-900 mb-1">Cuci Helm</div>
                                <div className="text-brand-600 font-bold">25-45K</div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl text-center shadow-sm">
                                <div className="font-bold text-slate-900 mb-1">Cuci Tas</div>
                                <div className="text-brand-600 font-bold">30-50K</div>
                            </div>
                            <div className="bg-white p-4 rounded-2xl text-center shadow-sm">
                                <div className="font-bold text-slate-900 mb-1">Unyellowing</div>
                                <div className="text-brand-600 font-bold">100-150K</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Location & Contact */}
            <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-900/20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-4 py-2 bg-brand-600 rounded-lg text-sm font-bold mb-6">Lokasi Strategis</div>
                            <h2 className="text-4xl font-bold mb-6">Dekat Kampus & Mudah Diakses</h2>
                            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                                Hugo Shoes and Care berlokasi strategis di Jl. Palagan Tentara Pelajar Km 6,5.
                                Sangat mudah dijangkau bagi Anda yang tinggal di area Sleman, Ngaglik, dan sekitarnya.
                                Cocok untuk mahasiswa yang butuh sepatu bersih tanpa ribet.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Alamat Lengkap</h4>
                                        <p className="text-slate-400">Jl. Palagan Tentara Pelajar Km 6,5, Sariharjo, Ngaglik, Sleman, Yogyakarta</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Hubungi Kami</h4>
                                        <p className="text-slate-400 mb-2">WhatsApp: 0857-1173-3334</p>
                                        <a href="https://www.instagram.com/hugoshoescare/" target="_blank" className="inline-flex items-center gap-2 text-brand-400 hover:text-white transition">
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                            @hugoshoescare
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
                            {/* Embed Map Placeholder - In production use real Google Maps embed */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.928734265882!2d110.370597!3d-7.726587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDMnMzUuNyJTIDExMMKwMjInMTQuMiJF!5e0!3m2!1sen!2sid!4v1625637281923!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                className="grayscale hover:grayscale-0 transition duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
