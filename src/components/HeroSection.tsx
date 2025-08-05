'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react';
import ContactModal from './Modal/ContactModal';

type Particle = { left: number; top: number }

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // Só roda no cliente!
    const arr: Particle[] = []
    for (let i = 0; i < 50; i++) {
      arr.push({
        left: Math.random() * 100,
        top: Math.random() * 100,
      })
    }
    setParticles(arr)
  }, [])
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Animation */}
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-dark-900/90 z-10" />

        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-cyan rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              delay: (i % 10) * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Tecnologia que{' '}
            <span className="text-gradient">move o futuro</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Soluções inteligentes para logística, integração ERP e automação automotiva.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-8 py-4 rounded-xl text-lg font-bold animate-glow"
            onClick={() => setOpen(true)}
          >
            Falar com um especialista
          </motion.button>
        </motion.div>
        <ContactModal open={open} onClose={() => setOpen(false)} />

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary-cyan"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}