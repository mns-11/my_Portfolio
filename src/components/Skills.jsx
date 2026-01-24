import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../animations/variants';

const skillCategories = [
    {
        title: "تطوير الجوال",
        skills: [
            { name: "Flutter", level: 90, icon: "📱" },
            { name: "Dart", level: 90, icon: "🎯" }
        ]
    },
    {
        title: "تطوير الويب",
        skills: [
            { name: "React", level: 85, icon: "⚛️" },
            { name: "JavaScript", level: 85, icon: "🟨" },
            { name: "HTML", level: 95, icon: "🌐" },
            { name: "CSS", level: 95, icon: "🎨" },
            { name: "Bootstrap", level: 90, icon: "🅱️" }
        ]
    },
    {
        title: "التصميم",
        skills: [
            { name: "Figma", level: 85, icon: "📐" },
            { name: "UI/UX Design", level: 80, icon: "✨" },
            { name: "Draw.io", level: 70, icon: "📊" }
        ]
    },
    {
        title: "قواعد البيانات",
        skills: [
            { name: "SQL Server", level: 75, icon: "🗄️" },
            { name: "SQLite", level: 80, icon: "💾" }
        ]
    },
    {
        title: "الأدوات",
        skills: [
            { name: "Git", level: 90, icon: "🌿" },
            { name: "GitHub", level: 90, icon: "🐱" },
            { name: "VS Code", level: 95, icon: "💻" },
            { name: "Postman", level: 80, icon: "📮" },
            { name: "Jira", level: 70, icon: "📋" }
        ]
    },
    {
        title: "أدوات الذكاء الاصطناعي",
        skills: [
            { name: "ChatGPT", level: 90, icon: "🤖" },
            { name: "Gemini", level: 85, icon: "✨" },
            { name: "Antigravity", level: 85, icon: "🚀" },
            { name: "Qoder", level: 80, icon: "💡" }
        ]
    }
];


const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white">
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
                        المهارات <span className="text-accent-purple">التقنية</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn("up", 0.2)}
                        className="text-lg text-gray-600 max-w-2xl mx-auto"
                    >
                        مجموعة التقنيات والأدوات التي أستخدمها لتحويل الأفكار إلى واقع.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            variants={fadeIn("up", catIndex * 0.15)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <h3 className="text-2xl font-bold text-gray-900 font-cairo border-b-2 border-primary-light pb-2 inline-block">
                                {category.title}
                            </h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="flex items-center font-medium text-gray-700">
                                                <span className="ml-2">{skill.icon}</span>
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-400 font-bold">{skill.level}%</span>
                                        </div>
                                        <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                                                className={`h-full rounded-full ${catIndex === 0 ? 'bg-primary' :
                                                    catIndex === 1 ? 'bg-secondary' :
                                                        catIndex === 2 ? 'bg-accent-purple' :
                                                            catIndex === 3 ? 'bg-accent-coral' :
                                                                'bg-primary'
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
