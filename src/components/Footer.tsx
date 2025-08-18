'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from 'lucide-react'
import ContactModal from './Modal/ContactModal'
import { useState } from 'react'

export default function Footer() {
   const [open, setOpen] = useState(false)
  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
  ]

  return (
    <footer id="contact" className="bg-dark-900 py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-3xl font-heading font-bold text-gradient mb-4">
              T4 Tecnologia
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Inovação em cada linha de código. Transformamos negócios através
              de soluções tecnológicas inteligentes e eficientes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-primary-dark rounded-lg flex items-center justify-center text-primary-cyan hover:bg-primary-cyan hover:text-primary-dark transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-white">
              Contato
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-cyan" />
                <span>(11) 99645-3490</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-cyan" />
                <span>comercial@t4tecnologia.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary-cyan" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

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
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 T4 Tecnologia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
