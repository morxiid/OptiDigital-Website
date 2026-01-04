import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
    const { t } = useLanguage();
    const [status, setStatus] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
            setTimeout(() => setStatus(null), 5000);
        }, 1500);
    };

    const contactItems = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: t.contactPage.office.title,
            value: t.contactPage.office.address,
            color: "bg-brand-blue"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            label: "Email",
            value: t.contactPage.office.email,
            color: "bg-brand-lime"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            label: "Phone",
            value: t.contactPage.office.phone,
            color: "bg-gray-900"
        }
    ];

    return (
        <div className="overflow-x-hidden bg-white min-h-screen">
            {/* Header Section */}
            <header className="relative py-24 md:py-32 bg-white overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-block px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue font-bold text-xs uppercase tracking-widest mb-6">
                            Contact Us
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-gray-900 tracking-tighter">
                            {t.contactPage.title} <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-lime">
                                {t.contactPage.titleAccent}
                            </span>.
                        </h1>
                        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed font-light">
                            {t.contactPage.subtitle}
                        </p>
                    </motion.div>
                </div>
            </header>

            <section className="pb-32 container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left Side: Info Cards */}
                    <div className="lg:col-span-5 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-[#0b1120] rounded-[3rem] text-white relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 blur-[100px] -mr-32 -mt-32"></div>
                            <h2 className="text-3xl font-black mb-10 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-lime">
                                {t.contactPage.infoTitle}
                            </h2>

                            <div className="space-y-10 relative z-10">
                                {contactItems.map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                                            <p className="text-lg font-bold leading-relaxed">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 pt-10 border-t border-white/10 relative z-10">
                                <h3 className="font-black text-xs uppercase tracking-widest text-brand-lime mb-6">{t.contactPage.socials.title}</h3>
                                <div className="flex gap-4">
                                    {[
                                        { name: 'facebook', link: 'https://www.facebook.com/optidigital.ma/', icon: <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /> },
                                        { name: 'instagram', link: 'https://www.instagram.com/optidigital.ma/', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></> },
                                        { name: 'youtube', link: 'https://www.youtube.com/@optidigitalma', icon: <><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 00-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 001.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 001.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z" /><polyline points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></> },
                                        { name: 'linkedin', link: 'https://www.linkedin.com/company/optidigitalma', icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></> }
                                    ].map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-300 group shadow-lg"
                                            aria-label={social.name}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
                                                {social.icon}
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 group cursor-pointer"
                        >
                            <h3 className="text-xl font-black mb-4 group-hover:text-brand-blue transition-colors">Digital Deck 2026</h3>
                            <p className="text-gray-500 mb-8 leading-relaxed">Téléchargez notre portfolio complet et nos méthodologies de travail au format PDF.</p>
                            <a
                                href="/Presentation.pdf"
                                download
                                className="flex items-center gap-3 font-black text-sm uppercase tracking-widest outline-none"
                            >
                                Download PDF
                                <div className="w-8 h-[2px] bg-gray-900 group-hover:w-12 group-hover:bg-brand-blue transition-all"></div>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Side: High-End Form */}
                    <motion.div
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-16 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] border border-gray-100">
                            <h3 className="text-3xl font-black mb-10 text-gray-900">{t.contactPage.formTitle}</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">{t.contactPage.labels.name}</label>
                                    <input
                                        name="user_name"
                                        required
                                        className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-[1.5rem] focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all font-medium"
                                        type="text"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">{t.contactPage.labels.email}</label>
                                    <input
                                        name="user_email"
                                        required
                                        className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-[1.5rem] focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all font-medium"
                                        type="email"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">{t.contactPage.labels.website}</label>
                                    <input
                                        name="user_website"
                                        className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-[1.5rem] focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all font-medium"
                                        type="url"
                                        placeholder="https://example.com"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">{t.contactPage.labels.service}</label>
                                    <div className="relative">
                                        <select
                                            name="user_service"
                                            className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-[1.5rem] focus:bg-white focus:border-brand-blue outline-none transition-all font-medium appearance-none"
                                        >
                                            <option>Marketing Digital</option>
                                            <option>Branding & Design</option>
                                            <option>Web Development</option>
                                            <option>Strategic Consulting</option>
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-10 space-y-3">
                                <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-1">{t.contactPage.labels.message}</label>
                                <textarea
                                    name="user_message"
                                    required
                                    className="w-full px-6 py-5 bg-gray-50 border border-gray-100 rounded-[1.5rem] focus:bg-white focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all font-medium h-48 resize-none"
                                    placeholder="Tell us about your next big move..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full py-6 bg-gray-900 text-white font-black rounded-[1.5rem] hover:bg-brand-blue transition-all duration-300 shadow-xl hover:shadow-brand-blue/20 disabled:opacity-50 flex items-center justify-center gap-3 text-lg"
                            >
                                <AnimatePresence mode="wait">
                                    {status === 'sending' ? (
                                        <motion.div
                                            key="sending"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            {t.contactPage.labels.sending}
                                        </motion.div>
                                    ) : (
                                        <motion.span
                                            key="idle"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                        >
                                            {t.contactPage.labels.submit}
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>

                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="mt-8 p-6 bg-brand-lime/10 border border-brand-lime/20 rounded-2xl text-center"
                                    >
                                        <p className="text-gray-900 font-bold flex items-center justify-center gap-3">
                                            <span className="text-2xl">⚡</span>
                                            Message reçu ! On vous rappelle très vite.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
