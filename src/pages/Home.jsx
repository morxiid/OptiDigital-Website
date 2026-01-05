import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import campingResult1 from '../assets/campingResult1.webp';
import campingResult2 from '../assets/campingResult2.webp';

// Dynamic imports
const clientLogosModules = import.meta.glob('../assets/Clients logo/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const clientLogos = Object.values(clientLogosModules).map(mod => mod.default);

const Home = () => {
    const { t } = useLanguage();
    const [status, setStatus] = React.useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            e.target.reset();
            setTimeout(() => setStatus(null), 5000);
        }, 1500);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <div className="pt-24 overflow-x-hidden">
            {/* Hero Section */}
            <header className="relative py-24 min-h-[90vh] flex flex-col justify-center overflow-hidden">
                {/* Animated Background Elements */}
                {/* Animated Background Elements */}
                <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
                    {/* Tech Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                    {/* Blob 1: Brand Blue (Top Left) - Optimized */}
                    <motion.div
                        className="hidden md:block absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none"
                        style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
                        animate={{
                            x: [0, 60, 0],
                            y: [0, 40, 0],
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Blob 2: Brand Lime (Bottom Right) - Optimized */}
                    <motion.div
                        className="hidden md:block absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-lime/10 rounded-full blur-[100px] pointer-events-none"
                        style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
                        animate={{
                            x: [0, -60, 0],
                            y: [0, -30, 0],
                        }}
                        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                            {t.hero.title1} <br />
                            <span className="bg-gradient-to-r from-brand-blue via-blue-500 to-brand-lime bg-clip-text text-transparent">
                                {t.hero.title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        {t.hero.subtitle}
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <Link to="/contact" className="btn btn-primary shadow-xl shadow-brand-blue/20">
                            {t.hero.btnPrimary}
                        </Link>
                        <Link to="/services" className="btn btn-secondary bg-white/50 backdrop-blur-sm">
                            {t.hero.btnSecondary}
                        </Link>
                    </motion.div>
                </div>

                {/* Clients Logo Carousel - Optimized for smooth scrolling */}
                <div className="mt-24 w-full">
                    <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-400 mb-8 font-semibold">{t.hero.trustedBy}</p>
                    <div className="relative w-full overflow-hidden bg-white/10 py-8 border-y border-white/40">
                        <div className="flex w-[200%]">
                            <motion.div
                                className="flex gap-16 pr-16"
                                style={{
                                    willChange: "transform",
                                    backfaceVisibility: "hidden"
                                }}
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                            >
                                {[...clientLogos, ...clientLogos].map((logo, i) => (
                                    <div key={i} className="flex-shrink-0 w-32 md:w-40 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer">
                                        <img src={logo} alt="Client" width="160" height="64" loading="lazy" decoding="async" className="max-h-16 w-auto object-contain" />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Stats Section */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {t.stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-brand-blue mb-1">
                                    {stat.value}{stat.suffix}
                                </div>
                                <div className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Expertise / Case Studies Style Section */}
            <section className="py-24 bg-white relative">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-36"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
                            {t.expertise.title.split(',')[0]}, <span className="text-brand-lime">{t.expertise.title.split(',')[1]}</span>
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-gray-600 max-w-2xl mx-auto text-lg">
                            {t.expertise.subtitle}
                        </motion.p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 md:gap-16">
                        {/* Card 1: Social Media Strategy & Results */}
                        <motion.div
                            className="bg-[#0b1120] rounded-[3rem] p-10 md:p-14 pt-44 md:pt-52 text-white overflow-visible relative group cursor-pointer border border-white/10 shadow-2xl transition-all duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            {/* Dashboard Visual - 30% Pop-out */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[35%] w-[85%] z-20">
                                <motion.div
                                    className="bg-white rounded-[2rem] p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20"
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <div className="bg-gray-50 rounded-xl overflow-hidden">
                                        <img
                                            src={campingResult1}
                                            alt="Social Media Performance Dashboard"
                                            width="800"
                                            height="600"
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight group-hover:text-brand-lime transition-colors duration-300">
                                    {t.expertise.card1.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                                    {t.expertise.card1.desc.split('interaction client').map((part, i) => (
                                        <span key={i}>
                                            {part}
                                            {i === 0 && <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">interaction client</span>}
                                        </span>
                                    ))}
                                </p>

                                <div className="space-y-4 mb-10">
                                    {t.expertise.card1.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-5 h-5 rounded-full bg-brand-lime/10 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Micro-interaction Icon */}
                                <div className="absolute bottom-8 right-8 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                    <svg className="w-6 h-6 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 7l-10 10M17 7H7M17 7v10" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Performance Marketing & Revenue */}
                        <motion.div
                            className="bg-[#0b1120] rounded-[3rem] p-10 md:p-14 pt-44 md:pt-52 text-white overflow-visible relative group cursor-pointer border border-white/10 shadow-2xl transition-all duration-500"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Dashboard Visual - 30% Pop-out */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[35%] w-[85%] z-20">
                                <motion.div
                                    className="bg-white rounded-[2rem] p-4 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20"
                                    whileHover={{ scale: 1.03, y: -5 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <div className="bg-gray-50 rounded-xl overflow-hidden">
                                        <img
                                            src={campingResult2}
                                            alt="Ads Performance Dashboard"
                                            width="800"
                                            height="600"
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </motion.div>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight group-hover:text-brand-lime transition-colors duration-300">
                                    {t.expertise.card2.title}
                                </h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                                    {t.expertise.card2.desc.split('présence en ligne dynamique').map((part, i) => (
                                        <span key={i}>
                                            {part}
                                            {i === 0 && <span className="text-white font-semibold drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">présence en ligne dynamique</span>}
                                        </span>
                                    ))}
                                </p>

                                <div className="space-y-4 mb-10">
                                    {t.expertise.card2.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3 text-gray-300">
                                            <div className="w-5 h-5 rounded-full bg-brand-lime/10 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Micro-interaction Icon */}
                                <div className="absolute bottom-8 right-8 opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300">
                                    <svg className="w-6 h-6 text-brand-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 7l-10 10M17 7H7M17 7v10" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-24 bg-brand-blue/5">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">{t.process.title}</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">{t.process.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {t.process.steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                    {idx + 1}
                                </div>
                                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                                {idx < 3 && (
                                    <div className="hidden md:block absolute top-10 -right-4 w-8 h-[2px] bg-gray-200"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* Why Us / Performance Analytics Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-2 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue font-bold text-sm uppercase tracking-widest mb-6">
                                Pourquoi Nous ?
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                                Propulsez votre <span className="text-brand-blue">croissance</span> avec une expertise data-driven.
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                                {t.whyUs.subtitle} Nous combinons créativité et analyse de données pour transformer chaque interaction en opportunité concrète.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                {t.whyUs.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-4 group">
                                        <div className="w-10 h-10 rounded-xl bg-brand-lime/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-lime group-hover:text-white transition-all duration-300">
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 block mb-1">
                                                {benefit.split('✅ ')[1]?.split(' (')[0] || benefit.replace('✅ ', '')}
                                            </span>
                                            <span className="text-sm text-gray-500">Expertise certifiée et validée.</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link to="/about" className="group inline-flex items-center gap-2 font-bold text-brand-blue hover:text-brand-blue-dark transition-colors">
                                {t.whyUs.link}
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </motion.div>

                        {/* Right Analytics Dashboard Visual */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative bg-gray-50 rounded-[3rem] p-8 md:p-12 border border-gray-100 shadow-inner">
                                {/* Main Center Stats */}
                                <div className="text-center mb-12">
                                    <motion.div
                                        className="text-8xl md:text-9xl font-black text-brand-blue/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        DATA
                                    </motion.div>
                                    <div className="relative inline-block">
                                        <motion.span
                                            className="text-7xl md:text-8xl font-black text-gray-900 block"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            99%
                                        </motion.span>
                                        <div className="absolute -top-4 -right-12 px-3 py-1 bg-brand-lime text-white text-xs font-bold rounded-full animate-bounce">
                                            LIVE
                                        </div>
                                    </div>
                                    <p className="text-gray-500 uppercase tracking-widest font-bold text-sm mt-4">Satisfaction Client</p>
                                </div>

                                {/* Overlapping Info Cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    <motion.div
                                        className="bg-white p-6 rounded-3xl shadow-xl border border-gray-50 -rotate-2 hover:rotate-0 transition-transform duration-500"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="text-brand-blue font-black text-3xl mb-1">+240</div>
                                        <div className="text-xs text-gray-500 font-bold uppercase tracking-tighter">Clients Actifs</div>
                                        <div className="mt-4 flex gap-1">
                                            {[1, 2, 3, 4, 5].map(i => (
                                                <div key={i} className={`h-1 w-full rounded-full ${i < 5 ? 'bg-brand-blue' : 'bg-gray-100'}`}></div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="bg-[#0b1120] p-6 rounded-3xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500 text-white"
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="text-brand-lime font-black text-3xl mb-1">+5 Ans</div>
                                        <div className="text-xs text-gray-400 font-bold uppercase tracking-tighter">D'Expertise</div>
                                        <div className="mt-4 flex items-end gap-1 h-8">
                                            {[30, 60, 45, 90, 75, 100].map((h, i) => (
                                                <div key={i} className="bg-brand-lime/20 w-full rounded-t-sm" style={{ height: `${h}%` }}></div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Floating Trust Badge */}
                                <motion.div
                                    className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-4 max-w-[200px]"
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white shrink-0">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    </div>
                                    <div className="text-xs font-bold text-gray-900 leading-tight">Expertise Digitale Premium</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            < section className="py-24 bg-[#111] text-white overflow-hidden" >
                <div className="relative z-10 w-full">
                    <motion.div
                        className="text-center mb-16 px-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-4 text-white">{t.testimonials.title}</h2>
                        <div className="w-20 h-1 bg-brand-lime mx-auto"></div>
                    </motion.div>

                    <div className="relative w-full overflow-hidden py-10">
                        {/* Gradient Masks for fading edges */}
                        <div className="absolute top-0 left-0 w-32 h-full z-10 bg-gradient-to-r from-[#111] to-transparent pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-32 h-full z-10 bg-gradient-to-l from-[#111] to-transparent pointer-events-none"></div>

                        <div className="flex w-fit">
                            <motion.div
                                className="flex gap-8 px-4"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                            >
                                {/* Duplicated 4 times to ensure smooth loop for wide screens */}
                                {t.testimonials.items.concat(t.testimonials.items).concat(t.testimonials.items).map((item, i) => (
                                    <div
                                        key={i}
                                        className="w-[350px] md:w-[450px] flex-shrink-0 bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-brand-blue transition-colors relative"
                                    >
                                        <div className="flex gap-1 text-brand-lime mb-4 text-lg">★★★★★</div>
                                        <p className="text-gray-300 mb-8 italic text-lg leading-relaxed">"{item.text}"</p>
                                        <div className="flex items-center gap-4 mt-auto">
                                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${i % 2 === 0 ? 'from-brand-blue to-purple-500' : 'from-brand-lime to-green-600'} flex items-center justify-center text-white font-bold text-xl`}>
                                                {item.name.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-bold text-white text-lg">{item.name}</div>
                                                <div className="text-sm text-gray-400">{item.role}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Contact & Resources Section - Redesigned */}
            < section className="py-24 bg-gray-50 relative overflow-hidden" id="contact-home" >
                <div className="container-custom relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                            {t.contactHome.title} <span className="text-brand-blue">{t.contactHome.titleAccent}</span>
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            {t.contactHome.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Left Column: Free Audit Form */}
                        <motion.div
                            className="lg:col-span-2 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3 className="text-2xl font-bold mb-8 text-gray-900">{t.contactHome.form.title}</h3>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="audit-name" className="text-sm font-bold text-gray-700">{t.contactHome.form.name} *</label>
                                        <input
                                            name="user_name"
                                            required
                                            type="text"
                                            id="audit-name"
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="audit-email" className="text-sm font-bold text-gray-700">{t.contactHome.form.email} *</label>
                                        <input
                                            name="user_email"
                                            required
                                            type="email"
                                            id="audit-email"
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="audit-website" className="text-sm font-bold text-gray-700">{t.contactHome.form.website}</label>
                                        <input
                                            name="user_website"
                                            type="url"
                                            id="audit-website"
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all"
                                            placeholder="https://"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="audit-service" className="text-sm font-bold text-gray-700">{t.contactHome.form.service}</label>
                                        <select
                                            name="user_service"
                                            id="audit-service"
                                            className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all text-gray-600 appearance-none"
                                        >
                                            <option>Marketing Digital</option>
                                            <option>Branding & Design</option>
                                            <option>Web Development</option>
                                            <option>Strategic Consulting</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="audit-goals" className="text-sm font-bold text-gray-700">{t.contactHome.form.message}</label>
                                    <textarea
                                        name="user_message"
                                        required
                                        id="audit-goals"
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all resize-none font-medium text-gray-700"
                                        placeholder="Comment pouvons-nous vous aider ?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-4 bg-gray-900 hover:bg-brand-blue text-white font-bold text-lg rounded-xl shadow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-50 group"
                                >
                                    {status === 'sending' ? (
                                        <div className="flex items-center gap-3">
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            {t.contactHome.form.sending}
                                        </div>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            {t.contactHome.form.submit}
                                        </>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <p className="text-brand-blue font-bold text-center mt-4 bg-brand-blue/5 py-3 rounded-xl animate-pulse">
                                        ⚡ {t.testimonials.items[0].text.split('.')[0]} ! On vous contacte bientôt.
                                    </p>
                                )}
                            </form>
                        </motion.div>

                        {/* Right Column: Stacked Cards */}
                        <div className="space-y-6">
                            {/* Card 1: Contact Info */}
                            <motion.div
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h4 className="font-bold text-lg mb-6 text-gray-900">{t.contactHome.infoTitle}</h4>
                                <ul className="space-y-5 text-gray-600">
                                    <li className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <a href="mailto:contact@optidigital.ma" className="hover:text-brand-blue transition-colors text-sm font-medium">contact@optidigital.ma</a>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <a href="tel:+212660583710" className="hover:text-brand-blue transition-colors text-sm font-medium">+212 660 583 710</a>
                                    </li>
                                    <li className="flex items-center gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <span className="text-sm font-medium">Casablanca, Morocco</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* Card 2: Schedule Call (Blue) */}
                            <motion.div
                                className="bg-brand-blue p-8 rounded-3xl shadow-xl text-white text-center relative overflow-hidden group"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>

                                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl mx-auto mb-4 flex items-center justify-center text-white ring-1 ring-white/20">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <h4 className="font-bold text-xl mb-2">{t.contactHome.scheduleTitle}</h4>
                                <p className="text-blue-100 text-sm mb-6">{t.contactHome.scheduleDesc}</p>
                                <a
                                    href="https://calendly.com/contact-optidigital/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-6 py-3 bg-white text-brand-blue font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg w-full"
                                >
                                    Book Now
                                </a>
                            </motion.div>


                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Home;
