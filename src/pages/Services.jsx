import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
    const { t, language } = useLanguage();
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div className="overflow-x-hidden bg-white">
            {/* Hero Section */}
            <header className="relative py-32 md:py-48 bg-white overflow-hidden">
                {/* Dynamic Background Elements */}
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,white,transparent,white)]"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-lime/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue font-bold text-xs uppercase tracking-[0.2em] mb-8"
                        >
                            {language === 'fr' ? 'Nos Solutions Stratégiques' : 'Our Strategic Solutions'}
                        </motion.div>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] text-gray-900 tracking-tighter">
                            {language === 'fr' ? (
                                <>Expertises <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-600 to-brand-lime">Haute Performance.</span></>
                            ) : (
                                <>High-Performance <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-600 to-brand-lime">Expertise.</span></>
                            )}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                            {t.services.subtitle}
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Services Grid */}
            <section className="pb-32 container-custom relative">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {t.services.items.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            className={`group relative overflow-hidden rounded-[3rem] bg-gray-50/50 backdrop-blur-sm border border-gray-100 p-8 md:p-12 transition-all duration-700 hover:bg-white hover:shadow-[0_45px_90px_-25px_rgba(0,0,0,0.12)] cursor-pointer
                                ${idx === 0 || idx === 3 ? 'md:col-span-12 lg:col-span-7' : 'md:col-span-12 lg:col-span-5'}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedService(service)}
                        >
                            {/* Hover Gradient Backdrop */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 via-transparent to-brand-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            {/* Floating Icon Container */}
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-16">
                                    <motion.div
                                        whileHover={{ rotate: 10, scale: 1.1 }}
                                        className="w-20 h-20 rounded-2xl bg-white shadow-[0_15px_35px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center text-5xl group-hover:shadow-brand-blue/20 transition-all duration-500"
                                    >
                                        {service.icon}
                                    </motion.div>
                                    <span className="text-8xl font-black text-gray-100 group-hover:text-brand-blue/5 transition-colors duration-500 select-none">
                                        0{idx + 1}
                                    </span>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6 group-hover:text-brand-blue transition-colors leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md font-medium">
                                        {service.desc}
                                    </p>

                                    {/* Feature Pills */}
                                    <div className="flex flex-wrap gap-3 mb-12">
                                        {service.points?.map((point, pIdx) => (
                                            <span key={pIdx} className="px-5 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-600 group-hover:border-brand-blue/30 group-hover:text-brand-blue transition-all shadow-sm">
                                                {point}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 text-brand-blue font-black text-sm uppercase tracking-widest group-hover:gap-8 transition-all">
                                        {language === 'fr' ? 'Explorer la Solution' : 'Explore Solution'}
                                        <div className="w-12 h-[2px] bg-brand-blue/30 group-hover:w-20 group-hover:bg-brand-blue transition-all"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Performance Metric Section */}
            <section className="py-32 bg-[#0b1120] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[150px] -mr-96 -mt-96"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-lime/10 rounded-full blur-[120px] -ml-64 -mb-64"></div>

                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-brand-lime font-bold tracking-widest uppercase text-sm mb-6 block">Performance & ROI</span>
                            <h2 className="text-5xl md:text-6xl font-black text-white mb-10 leading-[1.1]">
                                {language === 'fr' ? (
                                    <>L'Excellence <br /><span className="text-brand-lime">est notre standard.</span></>
                                ) : (
                                    <>Excellence <br /><span className="text-brand-lime">is our standard.</span></>
                                )}
                            </h2>
                            <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-xl font-light">
                                {language === 'fr'
                                    ? "Nous ne délivrons pas seulement des services ; nous construisons des avantages concurrentiels durables grâce à une approche rigoureuse axée sur les données."
                                    : "We don't just deliver services; we build sustainable competitive advantages through a rigorous, data-driven approach."}
                            </p>

                            <div className="grid grid-cols-2 gap-10">
                                {[
                                    { label: language === 'fr' ? "ROI Moyen" : "Avg ROI", value: "4.5x" },
                                    { label: language === 'fr' ? "Hausse Trafic" : "Traffic Boost", value: "+150%" },
                                    { label: language === 'fr' ? "Fidélisation" : "Retention", value: "98%" },
                                    { label: language === 'fr' ? "Satisfaction" : "Satisfaction", value: "100%" }
                                ].map((stat, i) => (
                                    <div key={i} className="group cursor-default">
                                        <div className="text-4xl font-black text-white mb-2 group-hover:text-brand-lime transition-colors duration-300">{stat.value}</div>
                                        <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-[4rem] relative z-10 shadow-2xl">
                                <h3 className="text-4xl font-black text-white mb-8">
                                    {language === 'fr' ? "Besoin d'un audit ?" : "Need an Audit?"}
                                </h3>
                                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                                    {language === 'fr'
                                        ? "Discutons de vos objectifs et voyons comment nous pouvons transformer votre présence digitale dès aujourd'hui."
                                        : "Let's discuss your goals and see how we can transform your digital presence today."}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-6 bg-brand-blue text-white font-black rounded-2xl transition-all duration-300 shadow-xl shadow-brand-blue/30 text-xl"
                                >
                                    {language === 'fr' ? "Démarrer Maintenant" : "Start Now"}
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                        />
                        <motion.div
                            className="bg-white rounded-[4rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl z-10 border border-white/20"
                            initial={{ opacity: 0, scale: 0.95, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-10 right-10 w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 hover:bg-brand-blue hover:text-white transition-all z-20"
                            >
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            <div className="p-10 md:p-24">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                                    <div className="lg:col-span-12">
                                        <div className="flex items-center gap-8 mb-12">
                                            <div className="text-8xl drop-shadow-2xl">{selectedService.icon}</div>
                                            <div>
                                                <h2 className="text-5xl md:text-7xl font-black text-blue-600 leading-tight">
                                                    {selectedService.title}
                                                </h2>
                                                <div className="h-2 w-32 bg-brand-blue mt-4 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-12">
                                        <p className="text-3xl text-gray-600 leading-relaxed mb-16 font-light">
                                            {selectedService.desc} {language === 'fr'
                                                ? "Nous orchestrons chaque détail pour garantir que votre vision se transforme en succès tangible."
                                                : "We orchestrate every detail to ensure your vision transforms into tangible success."}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {selectedService.points?.map((point, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                                    className="flex items-center gap-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 group hover:border-brand-blue/30 transition-all duration-300"
                                                >
                                                    <div className="w-4 h-4 rounded-full bg-brand-lime group-hover:scale-150 transition-transform"></div>
                                                    <span className="font-bold text-gray-800 text-2xl tracking-tight">{point}</span>
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="mt-20 flex flex-col sm:flex-row gap-8">
                                            <button className="flex-1 px-12 py-8 bg-brand-blue text-white font-black rounded-3xl hover:shadow-2xl hover:shadow-brand-blue/30 transition-all text-2xl hover:-translate-y-2">
                                                {language === 'fr' ? 'Lancer ce Projet' : 'Start this Project'}
                                            </button>
                                            <button onClick={() => setSelectedService(null)} className="px-12 py-8 bg-gray-900 text-white font-black rounded-3xl hover:bg-black transition-all text-2xl">
                                                {language === 'fr' ? 'Fermer' : 'Close'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Services;
