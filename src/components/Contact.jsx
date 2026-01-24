import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations/variants';
import { Mail, Send, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary-light rounded-full blur-3xl opacity-30" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                        تواصل <span className="text-accent-coral">معي</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.2)}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        سواء كان لديك سؤال أو فكرة مشروع أو تريد فقط التحية، بريدي الإلكتروني مفتوح دائمًا.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        variants={fadeIn("right", 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center p-4 bg-background-soft rounded-2xl shadow-sm border border-gray-100">
                            <div className="p-3 bg-primary-light rounded-xl ml-4">
                                <Mail className="text-primary" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">البريد الإلكتروني</p>
                                <a href="mailto:baslmtmnswr@gmail.com" className="text-lg font-medium text-gray-900 hover:text-primary transition-colors">baslmtmnswr@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center p-4 bg-background-soft rounded-2xl shadow-sm border border-gray-100">
                            <div className="p-3 bg-secondary-light rounded-xl ml-4">
                                <Phone className="text-secondary" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">رقم الهاتف</p>
                                <a href="tel:+966550337655" className="text-lg font-medium text-gray-900 hover:text-primary transition-colors" dir="ltr">+966 550 337 655</a>
                            </div>
                        </div>

                        <div className="flex items-center p-4 bg-background-soft rounded-2xl shadow-sm border border-gray-100">
                            <div className="p-3 bg-accent-coral/10 rounded-xl ml-4">
                                <MapPin className="text-accent-coral" size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">الموقع</p>
                                <p className="text-lg font-medium text-gray-900">المملكة العربية السعودية</p>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a
                                href="https://github.com/mns-11"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all"
                            >
                                <Github size={20} />
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/mansoor-ba-salama"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all"
                            >
                                <Linkedin size={20} />
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="bg-background-soft p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 mr-1">الاسم</label>
                                    <input
                                        type="text"
                                        placeholder="أدخل اسمك"
                                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 mr-1">البريد الإلكتروني</label>
                                    <input
                                        type="email"
                                        placeholder="example@email.com"
                                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                        dir="ltr"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 mr-1">الرسالة</label>
                                <textarea
                                    rows="4"
                                    placeholder="اكتب رسالتك هنا..."
                                    className="w-full px-5 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                ></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-primary-dark transition-all"
                            >
                                <Send size={18} className="ml-2" />
                                إرسال الرسالة
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
