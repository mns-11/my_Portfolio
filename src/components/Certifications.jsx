import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations/variants';
import { Award, GraduationCap, Briefcase, CheckCircle } from 'lucide-react';

const Certifications = () => {
    const education = {
        degree: "بكالوريوس تقنية معلومات",
        university: "جامعة العرب",
        year: "التخرج: 2025"
    };

    const experience = {
        title: "مطور برمجيات (مستوى مبتدئ)",
        company: "شركة ARAB WARE DOS",
        year: "2025",
        desc: "حاصل على شهادة خبرة معتمدة من الشركة. عملت على مشروع 'بلغني' لإعادة هندسة الكود وتحسين الأداء."
    };

    const certifications = [
        {
            title: "شهادة كفاءة في اللغة الإنجليزية",
            issuer: "دورة مكثفة",
            duration: "150 ساعة تدريبية"
        },
        {
            title: "تطوير الويب Front-End",
            issuer: "Udemy",
            duration: ""
        },
        {
            title: "أساسيات تحليل النظم",
            issuer: "Coursera",
            duration: ""
        },
        {
            title: "إدارة البيانات باستخدام SQL",
            issuer: "LinkedIn Learning",
            duration: ""
        }
    ];

    return (
        <section id="experience" className="py-24 bg-background-soft">
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
                        التعليم و<span className="text-accent-purple">الشهادات</span>
                    </motion.h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Education & Experience */}
                    <motion.div
                        variants={staggerContainer(0.2, 0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        {/* Education */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-cairo flex items-center">
                                <GraduationCap className="ml-3 text-primary" size={28} />
                                التعليم
                            </h3>
                            <motion.div
                                variants={fadeIn("up", 0.1)}
                                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
                            >
                                <h4 className="text-xl font-bold text-gray-900">{education.degree}</h4>
                                <p className="text-primary font-medium">{education.university}</p>
                                <p className="text-sm text-gray-500">{education.year}</p>
                            </motion.div>
                        </div>

                        {/* Experience */}
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 font-cairo flex items-center">
                                <Briefcase className="ml-3 text-secondary" size={28} />
                                الخبرة العملية
                            </h3>
                            <motion.div
                                variants={fadeIn("up", 0.2)}
                                className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm"
                            >
                                <h4 className="text-xl font-bold text-gray-900">{experience.title}</h4>
                                <p className="text-secondary font-medium">{experience.company}</p>
                                <p className="text-sm text-gray-500 mb-2">{experience.year}</p>
                                <p className="text-gray-600">{experience.desc}</p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        variants={staggerContainer(0.2, 0.1)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 font-cairo flex items-center">
                            <Award className="ml-3 text-accent-purple" size={28} />
                            الشهادات والدورات
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeIn("right", index * 0.1)}
                                    whileHover={{ x: -10 }}
                                    className="p-4 bg-white rounded-2xl border border-gray-100 flex items-start group shadow-sm"
                                >
                                    <CheckCircle className="text-accent-purple ml-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm md:text-base">{cert.title}</h4>
                                        <p className="text-xs text-gray-500 font-medium">{cert.issuer} {cert.duration && `• ${cert.duration}`}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
