'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Truck, Database, Car, Settings2 } from 'lucide-react'
import { useState } from 'react'
import ContactModal from './Modal/ContactModal'

export default function SolutionsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [open, setOpen] = useState(false)

  const solutions = [
    {
      icon: <Truck className="w-12 h-12" />,
      title: 'Logística Digital',
      description: 'Transforme sua operação logística com tecnologia inteligente.',
      features: [
        'Dashboards inteligentes',
        'Otimização de rotas',
        'App de Conferência de Produtos',

      ],
      color: 'from-blue-500 to-cyan-400',
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Integração ERP X WMS',
      description: 'Conecte todos os seus sistemas de forma eficiente e segura.',
      features: [
        'APIs personalizadas',
        'Automação de processos',
        'Sincronização em tempo real',
      ],
      color: 'from-purple-500 to-pink-400',
    },
    {
      icon: <Settings2 className="w-12 h-12" />,
      title: 'Sistemas Personalizados',
      description: 'Soluções avançadas para o seu negócio.',
      features: [
        'Testes de ECU completos',
        'Leitura de sensores',
        'Simulação de falhas',
      ],
      color: 'from-green-500 to-teal-400',
    },
  ]

  return (
    <section id="solutions" className="py-20 px-6 bg-gradient-to-b from-transparent to-dark-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Nossas <span className="text-gradient">Soluções</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologias inovadoras para impulsionar seu negócio para o futuro.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-3xl p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className={`bg-gradient-to-r ${solution.color} p-4 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {solution.icon}
                </div>
              </div>

              <h3 className="text-2xl font-heading font-bold mb-4">
                {solution.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {solution.description}
              </p>

              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-primary-cyan rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button onClick={() => setOpen(true)} className="mt-6 w-full py-3 border border-primary-cyan text-primary-cyan rounded-xl hover:bg-primary-cyan hover:text-primary-dark transition-all duration-300">
                Saiba Mais
              </button>

            </motion.div>
          ))}
        </div>
        <ContactModal open={open} onClose={() => setOpen(false)} />
      </div>
    </section>
  )
}