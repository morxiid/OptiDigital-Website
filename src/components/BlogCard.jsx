import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const BlogCard = ({ blog, onClick }) => {
    const { language, t } = useLanguage();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -10 }}
            className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full cursor-pointer"
            onClick={() => onClick(blog)}
        >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={blog.imageLink}
                    alt={blog.title[language]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="bg-brand-blue/90 backdrop-blur-md text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        {blog.category}
                    </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">
                        {t.blogsPage.readMore}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <span>{new Date(blog.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{blog.author}</span>
                </div>

                <h3 className="text-2xl font-bold text-brand-text mb-4 group-hover:text-brand-blue transition-colors duration-300 line-clamp-2">
                    {blog.title[language]}
                </h3>

                <p className="text-gray-600 line-clamp-3 mb-6">
                    {blog.shortDescription[language]}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-brand-blue font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                        {t.blogsPage.readMore}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default BlogCard;
