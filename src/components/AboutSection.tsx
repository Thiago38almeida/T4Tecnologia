'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cpu, Cloud, Zap } from 'lucide-react'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Tecnologia Avançada',
      description: 'Utilizamos as mais modernas tecnologias para criar soluções robustas e escaláveis.',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Integração Completa',
      description: 'Conectamos sistemas complexos de forma simples e eficiente.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Otimizada',
      description: 'Soluções que aceleram processos e maximizam resultados.',
    },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Inovação em cada{' '}
            <span className="text-gradient">linha de código</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Somos especialistas em criar experiências digitais que transformam negócios. 
            Combinamos tecnologia de ponta, design e expertise em automação para entregar 
            soluções robustas, escaláveis e inovadoras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-primary-cyan mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}