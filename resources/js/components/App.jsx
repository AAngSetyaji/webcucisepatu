import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

export default function App() {
    return (
        <div className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-brand-500 selection:text-white">
            <Navbar />
            <Main />
            <Footer />
            <FloatingButtons />
        </div>
    );
}
