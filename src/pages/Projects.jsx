import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
    const { t } = useLanguage();
    const [filter, setFilter] = useState('all');

    const categories = useMemo(() => [
        { id: 'all', label: t.projectsPage.categories.all },
        { id: 'marketing', label: t.projectsPage.categories.marketing },
        { id: 'branding', label: t.projectsPage.categories.branding },
        { id: 'web', label: t.projectsPage.categories.web },
    ], [t]);

    const filteredProjects = useMemo(() => {
        if (filter === 'all') return t.projectsPage.items;
        return t.projectsPage.items.filter(item => item.catKey === filter);
    }, [filter, t]);

    return (
        <div className="overflow-x-hidden min-h-screen bg-white">
            {/* Project Hero */}
            <header className="relative py-32 md:py-48 bg-[#0b1120] overflow-hidden text-white">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Background Glows */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-lime/10 rounded-full blur-[120px] translate-y-1/2"></div>

                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-full text-brand-lime font-bold text-sm uppercase tracking-widest mb-8">
                            Portfolio
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tighter">
                            <span className="text-white">Nos</span>{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-lime">Réalisations</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                            {t.projectsPage.subtitle}
                        </p>
                    </motion.div>
                </div>
            </header>

            {/* Filter Section */}
            <div className="bg-white sticky top-20 z-30 border-b border-gray-100 py-6">
                <div className="container-custom flex justify-center gap-4 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${filter === cat.id
                                ? 'bg-brand-blue text-white border-brand-blue shadow-lg shadow-brand-blue/20'
                                : 'bg-gray-50 text-gray-500 border-gray-100 hover:bg-gray-100'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <section className="py-24 container-custom">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.5, delay: idx * 0.05 }}
                                className="group relative"
                            >
                                <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-gray-100 shadow-sm transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-brand-blue/10">
                                    {/* Real Campaign Result Background */}
                                    <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                                        <img
                                            src={project.bgImage}
                                            alt={project.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        {/* Overlay to ensure text readability */}
                                        <div className="absolute inset-0 bg-gray-950/40 group-hover:bg-gray-950/20 transition-colors duration-500"></div>
                                    </div>

                                    {/* Result Badge */}
                                    <div className="absolute top-8 left-8 z-20">
                                        <div className="px-5 py-2 bg-brand-lime text-black font-black text-xs uppercase tracking-widest rounded-full shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform">
                                            {project.results}
                                        </div>
                                    </div>

                                    {/* Hover Content Details */}
                                    <div className="absolute inset-0 z-10 flex flex-col justify-end p-10 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="space-y-4">
                                            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-lg text-white/70 text-[10px] font-black uppercase tracking-widest border border-white/10">
                                                {project.category}
                                            </div>
                                            <h3 className="text-4xl font-black text-white leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm line-clamp-2 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                                {project.desc}
                                            </p>

                                            <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                                                <button className="flex items-center gap-3 text-brand-lime font-black text-xs uppercase tracking-[0.2em] group/btn">
                                                    Voir l'Étude de Cas
                                                    <div className="w-8 h-[2px] bg-brand-lime group-hover/btn:w-12 transition-all"></div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="py-40 text-center">
                        <div className="text-6xl mb-6">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-400">Aucun projet trouvé dans cette catégorie.</h3>
                    </div>
                )}
            </section>

            {/* CTA Section */}
            <section className="py-32 bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        className="bg-white rounded-[4rem] p-12 md:p-24 text-center shadow-2xl shadow-brand-blue/5 border border-gray-100 relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Decorative Background Icon */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] text-gray-50/50 font-black -z-0 pointer-events-none select-none">
                            GROW
                        </div>

                        <div className="relative z-10 scale-100 md:scale-110">
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 max-w-3xl mx-auto leading-tight">
                                {t.projectsPage.cta}
                            </h2>
                            <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto">
                                Transformons ensemble votre vision en une success story digitale incontestable.
                            </p>
                            <Link to="/contact">
                                <button className="px-12 py-6 bg-brand-blue text-white font-black rounded-[2rem] hover:shadow-[0_20px_40px_-10px_rgba(45,108,223,0.3)] transition-all transform hover:-translate-y-1 text-xl group">
                                    Démarrer un Projet
                                    <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
