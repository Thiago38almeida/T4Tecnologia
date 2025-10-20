'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ContactModal from '../components/Modal/ContactModal'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Soluções', href: '#solutions' },
        { name: 'Contato', href: '#contact' },
    ]

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'glass-effect py-4' : 'py-6'
                }`}
        >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between w-full">
                    {/* Logo */}
                    <div
                        className="text-xl sm:text-2xl font-bold"
                        style={{
                            background: 'linear-gradient(90deg, #00FFF7 0%, #3A8DFF 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        T4 Tecnologia
                    </div>

                    {/* Navegação Desktop */}
                    <nav className="hidden md:flex flex-row items-center space-x-6">
                        <a href="#home" className="text-white hover:text-cyan-400 transition-colors duration-300 text-base font-medium">Início</a>
                        <a href="#about" className="text-white hover:text-cyan-400 transition-colors duration-300 text-base font-medium">Sobre</a>
                        <a href="#solutions" className="text-white hover:text-cyan-400 transition-colors duration-300 text-base font-medium">Soluções</a>
                        <a href="#contact" className="text-white hover:text-cyan-400 transition-colors duration-300 text-base font-medium">Contato</a>
                    </nav>

                    {/* Botão Desktop */}
                    <div className="hidden md:flex items-center">
                        <button
                            onClick={() => setOpen(true)}
                            className="px-6 py-3 rounded-md text-base font-semibold shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-cyan-400/50"
                            style={{
                                background: 'linear-gradient(90deg, #00FFF7 0%, #3A8DFF 100%)',
                                color: '#0A192F'
                            }}
                        >
                            Fale Conosco
                        </button>
                        <ContactModal open={open} onClose={() => setOpen(false)} />
                    </div>

                    {/* Botão Mobile */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-white p-2"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden w-full px-4 sm:px-6 lg:px-8 mt-4"
                >
                    <div
                        className="rounded-lg p-6"
                        style={{
                            background: 'rgba(10, 25, 47, 0.9)',
                            backdropFilter: 'blur(16px)',
                            border: '1px solid rgba(0, 255, 247, 0.2)'
                        }}
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="text-white hover:text-cyan-400 transition-colors duration-300 py-2 text-base"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <button
                                className="w-full mt-4 py-3 rounded-md text-base font-semibold"
                                style={{
                                    background: 'linear-gradient(90deg, #00FFF7 0%, #3A8DFF 100%)',
                                    color: '#0A192F'
                                }}
                            >
                                Fale Conosco
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.header>

    )
}