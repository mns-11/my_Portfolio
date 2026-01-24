import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations/variants';
import { ArrowLeft, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden flex items-center justify-center gradient-bg">
            {/* Floating Shapes */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-10 w-32 h-32 bg-primary-light rounded-full opacity-50 blur-xl"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -10, 0]
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-10 w-48 h-48 bg-secondary-light rounded-full opacity-50 blur-xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-coral/10 rounded-full blur-3xl"
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    variants={staggerContainer(0.1, 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <motion.div
                        variants={fadeIn("up", 0.1)}
                        className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 text-primary font-medium text-sm mb-6 shadow-sm"
                    >
                        <Sparkles size={16} className="ml-2" />
                        <span>متاح لفرص عمل جديدة</span>
                    </motion.div>

                    <motion.h1
                        variants={fadeIn("up", 0.2)}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-cairo leading-tight"
                    >
                        منصور أحمد خميس <span className="text-primary">باسلمة</span>
                    </motion.h1>

                    <motion.h2
                        variants={fadeIn("up", 0.25)}
                        className="text-xl md:text-2xl font-semibold text-gray-700 mb-6"
                    >
                        مهندس تقنية معلومات | مطور <span className="text-accent-purple">Front-End</span> ومصمم <span className="text-secondary">UI/UX</span>
                    </motion.h2>

                    <motion.p
                        variants={fadeIn("up", 0.3)}
                        className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        خريج حديث طموح، أمتلك أساسًا قويًا في تطوير تطبيقات الجوال باستخدام Flutter
                        وتطوير واجهات الويب مع التركيز على تجربة المستخدم والتصميم المتميز.
                    </motion.p>

                    <motion.div
                        variants={fadeIn("up", 0.4)}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center transition-all shadow-lg shadow-primary/20"
                        >
                            <ArrowLeft size={20} className="ml-2" />
                            شاهد أعمالي
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/60 backdrop-blur-sm text-gray-700 border border-gray-200 rounded-2xl font-bold transition-all"
                        >
                            تواصل معي
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
