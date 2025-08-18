'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function CTASection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  type Particle = { left: number; top: number }

  const [particles, setParticles] = useState<Particle[]>([])

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
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 opacity-10">
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

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Pronto para <span className="text-gradient">transformar</span> seu negócio?
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossas soluções podem 
              revolucionar sua operação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2"
              >
                Fale com um especialista
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-cyan text-primary-cyan px-8 py-4 rounded-xl text-lg font-bold hover:bg-primary-cyan hover:text-primary-dark transition-all duration-300"
              >
                Agendar demonstração
              </motion.button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-cyan" />
                <span>(11) 99645-3490</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-cyan" />
                <span>comercial@t4tecnologia.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
