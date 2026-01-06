import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { blogs } from '../data/blogs';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
    const { t, language } = useLanguage();
    const [selectedBlog, setSelectedBlog] = useState(null);

    return (
        <div className="pt-32 pb-20 overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm mb-4 block"
                    >
                        Blog
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold text-brand-text mb-6"
                    >
                        {t.blogsPage.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg md:text-xl"
                    >
                        {t.blogsPage.subtitle}
                    </motion.p>
                </div>

                {/* Blogs Grid */}
                {!selectedBlog ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                        {blogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <BlogCard blog={blog} onClick={setSelectedBlog} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    /* Detailed Blog View */
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="max-w-4xl mx-auto px-4"
                    >
                        <button
                            onClick={() => setSelectedBlog(null)}
                            className="flex items-center gap-2 text-brand-blue font-bold mb-8 hover:translate-x-2 transition-transform duration-300"
                        >
                            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                            {t.blogsPage.backToBlogs}
                        </button>

                        <div className="relative h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden mb-12 shadow-2xl">
                            <img
                                src={selectedBlog.imageLink}
                                alt={selectedBlog.title[language]}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-end p-8 md:p-12">
                                <div className="mt-auto">
                                    <span className="bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
                                        {selectedBlog.category}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                        {selectedBlog.title[language]}
                                    </h2>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-10 pb-10 border-b border-gray-100">
                            <div className="flex items-center gap-2">
                                <span className="font-medium text-brand-text">{selectedBlog.author}</span>
                            </div>
                            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                            <div>{new Date(selectedBlog.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                        </div>

                        <div
                            className="prose prose-lg max-w-none text-gray-700 leading-relaxed blog-content"
                            dangerouslySetInnerHTML={{ __html: selectedBlog.content[language] }}
                        />

                        {/* CTA Section */}
                        <div className="mt-20 p-12 bg-brand-blue rounded-[2.5rem] text-center text-white relative overflow-hidden group">
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>
                            <div className="relative z-10">
                                <h3 className="text-3xl md:text-4xl font-bold mb-6">{t.blogsPage.cta}</h3>
                                <button className="bg-white text-brand-blue px-10 py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    {t.hero.btnPrimary}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
