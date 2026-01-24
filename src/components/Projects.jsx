import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations/variants';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "تطبيق الأذكار",
        desc: "تطبيق للأذكار اليومية والأدعية مع واجهة مستخدم سهلة وتجربة استخدام ممتازة.",
        tags: ["Flutter", "Dart"],
        color: "bg-primary-light text-primary",
        image: "/athkar.jpg",
        github: "https://github.com/mns-11/athkar_update"
    },
    {
        title: "تطبيق وهم WAHM",
        desc: "تطبيق متكامل مربوط بـ API لإدارة البيانات وتقديم تجربة مستخدم سلسة.",
        tags: ["Flutter", "Dart", "REST APIs"],
        color: "bg-secondary-light text-secondary",
        image: "/wahm.jpg",
        github: "https://github.com/mns-11/wahm-app-with-api"
    },
    {
        title: "تطبيق My Tasks",
        desc: "تطبيق لإدارة المهام اليومية والتخطيط الشخصي مع واجهة بسيطة وفعالة.",
        tags: ["Flutter", "Dart"],
        color: "bg-accent-coral/10 text-accent-coral",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600",
        github: "https://github.com/mns-11/my_tasks"
    }

];



const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-background-soft">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        variants={fadeIn("up", 0.1)}
                        className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-cairo"
                    >
                        المشاريع <span className="text-secondary">المميزة</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.2)}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        مجموعة من أعمالي الأخيرة التي تجمع بين الكود النظيف والتصميم العصري والأداء المتميز.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", index * 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="flex space-x-reverse space-x-4">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all">
                                            <Github size={20} />
                                        </a>
                                        <button className="p-3 bg-white rounded-full text-gray-900 hover:bg-primary hover:text-white transition-all">
                                            <ExternalLink size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className={`px-3 py-1 rounded-full text-xs font-bold ${project.color}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 font-cairo">{project.title}</h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">
                                    {project.desc}
                                </p>
                                <button className="text-primary font-bold flex items-center group-hover:-translate-x-2 transition-transform">
                                    <ArrowLeft size={16} className="ml-1" />
                                    عرض المزيد
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ArrowLeft = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
);

export default Projects;
