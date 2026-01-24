import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations/variants';
import { Code2, Palette, Rocket, Heart } from 'lucide-react';

const About = () => {
    const features = [
        {
            icon: <Code2 className="text-primary" />,
            title: "كود نظيف",
            desc: "كتابة كود قابل للقراءة والصيانة والتطوير هي أولويتي."
        },
        {
            icon: <Palette className="text-accent-purple" />,
            title: "تصميم عصري",
            desc: "إنشاء واجهات مستخدم جذابة وبديهية وسهلة الاستخدام."
        },
        {
            icon: <Rocket className="text-secondary" />,
            title: "أداء سريع",
            desc: "التحسين المستمر للسرعة وتجربة المستخدم السلسة."
        },
        {
            icon: <Heart className="text-accent-coral" />,
            title: "تركيز على المستخدم",
            desc: "التصميم مع وضع احتياجات المستخدم النهائي في الاعتبار."
        }
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    <motion.div variants={fadeIn("right", 0.2)}>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-cairo">
                            نبذة <span className="text-primary">عني</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            مهندس تقنية معلومات خريج حديث طموح، أمتلك أساسًا قويًا في تطوير البرمجيات
                            وتصميم تجربة المستخدم. متخصص في تطوير تطبيقات الجوال باستخدام Flutter
                            وتطوير واجهات الويب مع التركيز على التصميم المتميز.
                        </p>
                        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                            حاصل على شهادة خبرة معتمدة من شركة ARAB WARE DOS، وأتحدث اللغتين العربية
                            والإنجليزية بطلاقة. أسعى دائمًا لتحويل الأفكار إلى حلول تقنية تلبي
                            معايير التوظيف العالمية.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="p-4 rounded-2xl bg-background-soft border border-gray-100 shadow-sm"
                                >
                                    <div className="mb-3">{item.icon}</div>
                                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-bold text-gray-900 font-cairo">التقنيات التي أستخدمها</h3>
                            <div className="flex flex-wrap gap-4">
                                {['Flutter', 'React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'SQL Server', 'Figma'].map((tech, i) => (
                                    <motion.span
                                        key={tech}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className="px-4 py-2 bg-white rounded-xl border border-gray-100 shadow-sm text-sm font-medium text-gray-600 cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn("left", 0.4)}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                                alt="مطور يعمل"
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-light rounded-full -z-0 animate-pulse" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-light rounded-full -z-0" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
