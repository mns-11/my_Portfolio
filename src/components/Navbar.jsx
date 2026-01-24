import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'عني', href: '#about' },
        { name: 'المشاريع', href: '#projects' },
        { name: 'المهارات', href: '#skills' },
        { name: 'تواصل معي', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-2 shadow-sm' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 flex items-center"
                    >
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-purple bg-clip-text text-transparent font-cairo">
                            منصور باسلمة
                        </span>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-reverse space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-gray-600 hover:text-primary font-medium transition-colors"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <div className="flex items-center space-x-reverse space-x-4 mr-4">
                            <a href="https://github.com/mns-11" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Github size={20} /></a>
                            <a href="https://linkedin.com/in/mansoor-ba-salama" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-600 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden glass-morphism border-t border-gray-100"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-primary-light transition-all"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
