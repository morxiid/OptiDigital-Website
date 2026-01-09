import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import member1 from '../assets/Team/member1.webp';
import member2 from '../assets/Team/member2.webp';
import member3 from '../assets/Team/member3.webp';
import member4 from '../assets/Team/member4.webp';
import eventImage from '../assets/img.webp';

const About = () => {
    const { t } = useLanguage();

    const team = [
        {
            name: "Anass",
            role: "Editer & filmmaker",
            image: member1,
            color: "bg-blue-600",
        },
        {
            name: "Jamal",
            role: "Media Buyer",
            image: member2,
            color: "bg-brand-lime",
        },
        {
            name: "Anass",
            role: "Founder & Project Manager",
            image: member3,
            color: "bg-purple-600",
        },
        {
            name: "Morchiid",
            role: "Web Developer",
            image: member4,
            color: "bg-purple-600",
        },
    ];

    const valueIcons = ["💡", "🤝", "🎯"];

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section with Animated Background */}
            <header className="relative py-32 md:py-48 flex flex-col justify-center overflow-hidden bg-white">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                {/* Background Blobs - GPU Optimized */}
                <motion.div
                    className="hidden md:block absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"
                    style={{ willChange: "transform", transform: "translateZ(0)" }}
                    animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="hidden md:block absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-brand-lime/10 rounded-full blur-[100px] pointer-events-none"
                    style={{ willChange: "transform", transform: "translateZ(0)" }}
                    animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue font-bold text-sm uppercase tracking-widest mb-6 border animate-pulse">
                            {t.aboutPage.hero.badge}
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-7xl font-black mb-8 leading-tight text-gray-900 px-4">
                            {t.aboutPage.hero.title} <span className="text-brand-blue">{t.aboutPage.hero.titleAccent}</span>{t.aboutPage.hero.titleSuffix}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                            {t.aboutPage.hero.subtitle}
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Mission & Vision Section */}
            <section className="py-24 bg-gray-50/50 relative">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="space-y-12">
                                <div className="p-8 bg-white rounded-3xl shadow-xl shadow-brand-blue/5 border border-white">
                                    <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-extrabold mb-4 text-blue-600">{t.aboutPage.mission.title}</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {t.aboutPage.mission.desc}
                                    </p>
                                </div>

                                <div className="p-8 bg-white rounded-3xl shadow-xl shadow-brand-blue/5 border border-white">
                                    <div className="w-12 h-12 bg-brand-lime/10 rounded-2xl flex items-center justify-center text-brand-lime mb-6">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-3xl font-extrabold mb-4 text-blue-600">{t.aboutPage.vision.title}</h2>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {t.aboutPage.vision.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Interactive Visual Element */}
                        <motion.div
                            className="relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="aspect-square bg-white rounded-[4rem] shadow-2xl overflow-hidden relative p-12 flex flex-col justify-center items-center border border-gray-100">
                                {/* Dashboard-like Analytics Visual */}
                                <div className="w-full space-y-8 relative z-10">
                                    <div className="flex items-end gap-1 h-32 justify-center">
                                        {[40, 70, 55, 90, 65, 100, 80].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                className="bg-brand-blue/20 w-8 rounded-t-lg"
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                                                viewport={{ once: true }}
                                            />
                                        ))}
                                    </div>
                                    <div className="text-center">
                                        <div className="text-5xl font-black text-gray-900 mb-2">Growth</div>
                                        <div className="text-brand-blue font-bold tracking-widest uppercase text-sm">Engine of Success</div>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-lime/10 rounded-full blur-3xl -mr-16 -mt-16 animate-pulse"></div>
                                <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/5 rounded-full blur-3xl -ml-24 -mb-24 animate-pulse delay-700"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6">{t.aboutPage.values.title}</h2>
                        <div className="w-20 h-1.5 bg-brand-lime mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {t.aboutPage.values.items.map((value, idx) => (
                            <motion.div
                                key={idx}
                                className="group p-10 bg-gray-50 rounded-[3rem] border border-transparent hover:border-brand-blue/20 hover:bg-white hover:shadow-2xl hover:shadow-brand-blue/10 transition-all duration-500"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300 transform-gpu">
                                    {valueIcons[idx]}
                                </div>
                                <h3 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-brand-blue transition-colors">
                                    {value.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-lg">
                                    {value.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Event Section - Overlapping Layout */}
            <section className="py-24 bg-white relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl opacity-50 -z-10"></div>

                <div className="container-custom relative">
                    <div className="relative lg:min-h-[600px] flex flex-col justify-center">

                        {/* Image Block - Right Aligned */}
                        <motion.div
                            className="lg:absolute lg:right-0 lg:top-0 lg:w-[65%] w-full h-[400px] lg:h-[600px] z-0"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="w-full h-full relative">
                                <div className="absolute inset-0 bg-brand-blue/10 rounded-[3rem] transform rotate-2"></div>
                                <img
                                    src={eventImage}
                                    alt="Event"
                                    className="w-full h-full object-cover rounded-[3rem] shadow-2xl relative z-10"
                                />
                            </div>
                        </motion.div>

                        {/* Text Block - Left Aligned & Overlapping */}
                        <motion.div
                            className="relative z-10 mt-[-100px] lg:mt-0 lg:w-[50%] bg-gray-900 text-white p-10 md:p-14 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            <div className="inline-block px-4 py-2 bg-brand-lime/20 border border-brand-lime/30 rounded-full text-brand-lime font-bold text-xs uppercase tracking-widest mb-6">
                                Event Highlight
                            </div>
                            <h2 className="text-3xl font-black mb-6 leading-tight text-brand-lime">
                                {t.aboutPage.event.title}
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed font-light">
                                {t.aboutPage.event.desc}
                            </p>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-gray-50 overflow-hidden">
                <div className="container-custom">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6">{t.aboutPage.team.title}</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {t.aboutPage.team.subtitle}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, idx) => (
                            <motion.div
                                key={idx}
                                className="group relative bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative w-32 h-32 mx-auto mb-8 group-hover:scale-105 transition-transform duration-500">
                                    <div className={`absolute inset-0 rounded-full blur-2xl opacity-20 -z-10 ${member.color}`}></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl"
                                    />
                                </div>
                                <h3 className="text-2xl font-black text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-brand-blue font-bold text-sm uppercase tracking-widest mb-6">{member.role}</p>


                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
