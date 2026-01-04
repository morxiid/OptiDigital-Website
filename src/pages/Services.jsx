import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
    const { t } = useLanguage();
    const [selectedService, setSelectedService] = useState(null);

    return (
        <div className="overflow-x-hidden bg-white">
            {/* Hero Section */}
            <header className="relative py-32 md:py-48 bg-white overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to_bottom,white,transparent,white)]"></div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-brand-blue font-bold text-xs uppercase tracking-[0.2em] mb-8">
                            Our Solutions
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] text-gray-900 tracking-tighter">
                            Des Expertises <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-lime">Sans Limites.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
                            Nous fusionnons stratégie, créativité et technologie pour bâtir le futur de votre marque.
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Rebuilt Services Grid - The "Modern Tech" Bento Look */}
            <section className="pb-32 container-custom">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {t.services.items.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-100 p-8 md:p-12 transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] cursor-pointer
                                ${idx === 0 || idx === 3 ? 'md:col-span-12 lg:col-span-7' : 'md:col-span-12 lg:col-span-5'}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedService(service)}
                        >
                            {/* Decorative Accent */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-bl-[10rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-500 shadow-brand-blue/5">
                                        {service.icon}
                                    </div>
                                    <span className="text-6xl font-black text-gray-200/50 group-hover:text-brand-blue/10 transition-colors duration-500 select-none">
                                        0{idx + 1}
                                    </span>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 group-hover:text-brand-blue transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-md">
                                        {service.desc}
                                    </p>

                                    {/* Sub-services Tags */}
                                    <div className="flex flex-wrap gap-2 mb-10">
                                        {service.points?.map((point, pIdx) => (
                                            <span key={pIdx} className="px-4 py-1.5 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-600 group-hover:border-brand-blue/20 group-hover:text-brand-blue transition-all">
                                                {point}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 text-gray-900 font-black text-sm uppercase tracking-widest group-hover:gap-6 transition-all">
                                        Voir les Détails
                                        <div className="w-10 h-1px bg-gray-900 group-hover:w-16 group-hover:bg-brand-blue transition-all h-[2px]"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Added: Performance & Results Section */}
            <section className="py-24 bg-[#0b1120] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>

                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <motion.div
                            className="lg:w-1/2"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block px-4 py-1.5 bg-brand-blue/10 border border-brand-blue/20 rounded-full text-brand-blue font-bold text-xs uppercase tracking-[0.2em] mb-8">
                                Why We Deliver
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                                Une performance <br />
                                <span className="text-brand-lime">mesurable</span> à chaque étape.
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
                                Nous ne vendons pas des services, nous vendons des résultats. Notre approche est ancrée dans la data pour garantir un impact maximal sur votre chiffre d'affaires.
                            </p>

                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { label: "ROI Moyen", value: "4.5x", desc: "Retour sur investissement publicitaire" },
                                    { label: "Engagement", value: "+120%", desc: "Croissance moyenne de l'interaction" },
                                    { label: "Conversion", value: "+34%", desc: "Optimisation du taux de conversion" },
                                    { label: "Rétention", value: "95%", desc: "Taux de fidélité de nos clients" }
                                ].map((stat, i) => (
                                    <div key={i} className="group">
                                        <div className="text-3xl font-black text-white mb-2 group-hover:text-brand-lime transition-colors">{stat.value}</div>
                                        <div className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-1">{stat.label}</div>
                                        <div className="text-xs text-gray-500 leading-relaxed">{stat.desc}</div>
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
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-[3.5rem] relative z-10">
                                <h3 className="text-3xl font-black text-white mb-6">Prêt à dominer votre marché ?</h3>
                                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                    Expliquez-nous vos défis et laissez nos experts concevoir la stratégie qui fera passer votre business au niveau supérieur.
                                </p>
                                <div className="space-y-4">
                                    <button className="w-full py-6 bg-brand-blue hover:bg-white hover:text-black text-white font-black rounded-2xl transition-all duration-300 transform hover:-translate-y-1 shadow-xl shadow-brand-blue/20 text-lg text-center">
                                        Demander une Consultation
                                    </button>
                                    <p className="text-center text-gray-500 text-xs font-bold uppercase tracking-widest">
                                        Réponse garantie sous 24 heures
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-lime/20 rounded-full blur-3xl animate-pulse"></div>
                            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Service Modal */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                        />
                        <motion.div
                            className="bg-white rounded-[3rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl z-10 border border-white/20"
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 30 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-8 right-8 w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 hover:bg-brand-blue hover:text-white transition-all z-20 shadow-sm"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                            <div className="p-8 md:p-20">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                                    <div className="lg:col-span-5">
                                        <div className="text-9xl mb-12 drop-shadow-2xl">{selectedService.icon}</div>
                                        <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                                            {selectedService.title}
                                        </h2>
                                        <div className="h-2 w-24 bg-brand-blue mb-8 rounded-full"></div>
                                    </div>

                                    <div className="lg:col-span-7 flex flex-col justify-center">
                                        <p className="text-2xl text-gray-600 leading-relaxed mb-12 font-light italic">
                                            "{selectedService.desc} Nous transformons la complexité en simplicité élégante et performante."
                                        </p>

                                        <div className="space-y-6">
                                            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-blue">Domaines Clés</p>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {selectedService.points?.map((point, i) => (
                                                    <div key={i} className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-brand-blue/30 transition-colors group">
                                                        <div className="w-3 h-3 rounded-full bg-brand-lime group-hover:scale-125 transition-transform"></div>
                                                        <span className="font-bold text-gray-800 text-lg">{point}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-16 flex flex-col sm:flex-row gap-6">
                                            <button className="flex-1 px-10 py-6 bg-brand-blue text-white font-black rounded-2xl hover:shadow-[0_20px_40px_-10px_rgba(45,108,223,0.3)] transition-all text-xl hover:-translate-y-1">
                                                Lancer un projet
                                            </button>
                                            <button onClick={() => setSelectedService(null)} className="px-10 py-6 bg-gray-900 text-white font-black rounded-2xl hover:bg-black transition-all text-xl hover:-translate-y-1">
                                                Fermer
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
