'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      name: 'João Silva',
      position: 'Diretor de Operações',
      company: 'LogiTech Solutions',
      content: 'A solução de logística digital revolucionou nosso controle de estoque. Integração perfeita com nosso ERP e resultados impressionantes!',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      position: 'CTO',
      company: 'AutoParts Brasil',
      content: 'Os simuladores ECU da T4 Tecnologia são excepcionais. Conseguimos reduzir o tempo de testes em 60% mantendo a qualidade.',
      rating: 5,
    },
    {
      name: 'Carlos Oliveira',
      position: 'Gerente de TI',
      company: 'Indústria Moderna',
      content: 'Implementação rápida e suporte técnico excepcional. Nossa integração ERP nunca funcionou tão bem quanto agora.',
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Histórias de sucesso que comprovam a qualidade das nossas soluções.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-8 relative hover:scale-105 transition-transform duration-300"
            >
              <Quote className="text-primary-cyan w-8 h-8 mb-4 opacity-50" />
              
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-primary-cyan text-sm">{testimonial.position}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}