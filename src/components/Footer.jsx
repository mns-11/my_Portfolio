import React from 'react';
import { Heart, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h3 className="text-2xl font-bold font-cairo mb-4 bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent">
                        منصور باسلمة
                    </h3>
                    <p className="text-gray-400 mb-6">
                        مهندس تقنية معلومات | مطور Front-End ومصمم UI/UX
                    </p>

                    <div className="flex justify-center gap-4 mb-8">
                        <a
                            href="https://github.com/mns-11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/in/mansoor-ba-salama"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-primary transition-all"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <p className="text-gray-500 font-medium flex items-center justify-center">
                            صُنع بـ <Heart size={16} className="mx-2 text-accent-coral fill-accent-coral" /> بواسطة منصور باسلمة &copy; {new Date().getFullYear()}
                        </p>
                        <p className="text-gray-600 text-sm mt-2">
                            جميع الحقوق محفوظة
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
