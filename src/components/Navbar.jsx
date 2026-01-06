import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo/logo-removebg-preview.png';

const Navbar = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t.nav.home, path: '/' },
        { name: t.nav.about, path: '/about' },
        { name: t.nav.services, path: '/services' },
        { name: t.nav.blogs, path: '/blogs' },
        { name: t.nav.contact, path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-md py-4' : 'bg-white/40 backdrop-blur-sm py-6 border-b border-white/20'}`}>
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                    <img src={logo} alt="OptiDigital" className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`nav-link ${isActive(link.path) ? 'text-brand-blue font-bold after:w-full' : ''}`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Language Switcher & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <div className="flex gap-2 font-bold text-sm cursor-pointer">
                        <span
                            onClick={() => toggleLanguage('fr')}
                            className={`transition-opacity ${language === 'fr' ? 'text-brand-blue opacity-100' : 'text-gray-400 opacity-50 hover:opacity-100'}`}
                        >
                            FR
                        </span>
                        <span>/</span>
                        <span
                            onClick={() => toggleLanguage('en')}
                            className={`transition-opacity ${language === 'en' ? 'text-brand-blue opacity-100' : 'text-gray-400 opacity-50 hover:opacity-100'}`}
                        >
                            EN
                        </span>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden block"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`text-lg font-medium ${isActive(link.path) ? 'text-brand-blue' : 'text-brand-text'}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
