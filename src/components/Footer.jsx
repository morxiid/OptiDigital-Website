import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo/logo-removebg-preview.png';

// Dynamic import of partner logos for footer
const partnerLogosModules = import.meta.glob('../assets/Nos Partenaires Logo/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const partnerLogos = Object.values(partnerLogosModules).map(mod => mod.default);

const Footer = () => {
    // Optional: access context if we need translations in footer
    // const { t } = useLanguage(); 

    return (
        <footer className="bg-[#111] text-white pt-20 pb-10 border-t border-gray-800 mt-auto">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <img src={logo} alt="OptiDigital" width="140" height="36" className="h-9 w-auto brightness-0 invert object-contain" />
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Nous transformons les défis digitaux en opportunités de croissance. Votre partenaire de confiance pour le digital au Maroc et à l'international.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            {[
                                { name: 'facebook', link: 'https://www.facebook.com/profile.php?id=61567630357718&locale=fr_FR', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                                { name: 'instagram', link: 'https://www.instagram.com/optidigital.ma/', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
                                { name: 'linkedin', link: 'https://www.linkedin.com/company/optidigital-agency/?viewAsMember=true', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> },
                            ].map((social, i) => (
                                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all duration-300 group" aria-label={social.name}>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                                        {social.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Liens Rapides</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Services', 'Projects', 'Contact'].map((link, i) => (
                                <li key={i}>
                                    <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-gray-400 hover:text-brand-lime transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Services</h4>
                        <ul className="space-y-3">
                            {['Digital Marketing', 'Branding', 'Web Development', 'Consulting'].map((link, i) => (
                                <li key={i}>
                                    <Link to="/services" className="text-gray-400 hover:text-brand-lime transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span>📍</span>
                                <span>Casablanca, Morocco</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span>📧</span>
                                <a href="mailto:contact@optidigital.ma" className="hover:text-white">contact@optidigital.ma</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span>📞</span>
                                <a href="tel:+212 660 583 710" className="hover:text-white">+212 660 583 710</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Partners Section in Footer */}
                <div className="border-t border-gray-800 pt-12 text-center">
                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">Nos Partenaires Technologiques</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        {partnerLogos.map((logo, i) => (
                            <img key={i} src={logo} alt="Partner" width="100" height="40" loading="lazy" decoding="async" className="h-8 md:h-9 w-auto object-contain filter drop-shadow-[0_0_1px_rgba(255,255,255,0.5)]" />
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} OptiDigital. All rights reserved. Created by OptiDigital Developers.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
