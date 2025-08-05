'use client'
import { useState } from 'react'
import { Truck, Database, Cpu, Settings2 } from 'lucide-react' // Ícones representativos

export default function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', segment: '', employees: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSuccess(true)
        setForm({ name: '', email: '', phone: '', segment: '', employees: '' })
      } else {
        setError('Erro ao enviar. Tente novamente.')
      }
    } catch {
      setError('Erro ao enviar. Tente novamente.')
    }
    setLoading(false)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl mx-4 flex rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
        {/* Lado esquerdo - Soluções T4 */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-[#0A192F] to-[#1e3a5c] text-white w-1/2 p-8 gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl font-bold text-cyan-300 mb-2">Soluções T4 Tecnologia</span>
            <hr className="w-16 border-cyan-400 my-2" />
            <p className="text-center text-base mt-2 text-cyan-100">
              Potencialize sua empresa com tecnologia sob medida:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 w-full mt-4">
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-cyan-300" />
              <span className="text-base">Logística Inteligente</span>
            </div>
            <div className="flex items-center gap-3">
              <Database className="w-8 h-8 text-cyan-300" />
              <span className="text-base">Integração com ERP/WMS</span>
            </div>
            <div className="flex items-center gap-3">
              <Cpu className="w-8 h-8 text-cyan-300" />
              <span className="text-base">Simuladores Automotivos (ECU)</span>
            </div>
            <div className="flex items-center gap-3">
              <Settings2 className="w-8 h-8 text-cyan-300" />
              <span className="text-base">Sistemas Customizados</span>
            </div>
          </div>
        </div>
        {/* Lado direito - Formulário */}
        <div className="bg-white w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-xl font-bold text-cyan-700 mb-2 text-center">Fale com a T4 Tecnologia</h2>
          <p className="text-gray-600 text-sm mb-6 text-center">
            Preencha os dados para solicitar uma demonstração ou contato comercial.
          </p>
          {success ? (
            <div className="text-green-600 font-semibold text-center py-8">Mensagem enviada com sucesso!</div>
          ) : (
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                name="name"
                type="text"
                placeholder="Seu Nome"
                value={form.name}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                name="email"
                type="email"
                placeholder="Seu E-mail"
                value={form.email}
                onChange={handleChange}
                required
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <input
                name="phone"
                type="tel"
                placeholder="(DDD) + Telefone"
                value={form.phone}
                onChange={handleChange}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <select
                name="segment"
                value={form.segment}
                onChange={handleChange}
                className="border text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="">Selecione o segmento...</option>
                <option value="logistica">Logística Inteligente</option>
                <option value="erp">Integração com ERP</option>
                <option value="wms">Integração com WMS</option>
                <option value="custom">Sistemas Customizados</option>
                <option value="simuladores">Simuladores Automotivos</option>
              </select>
              <select
                name="employees"
                value={form.employees}
                onChange={handleChange}
                className="border  text-black rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="">Nº de funcionários da empresa?</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="200+">200+</option>
              </select>
              {error && <div className="text-red-600 text-center">{error}</div>}
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded px-4 py-2 font-semibold hover:from-cyan-500 hover:to-blue-600 transition mt-2"
                disabled={loading}
              >
                {loading ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          )}
        </div>
      </div>
      {/* Animação fade-in */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeInModal 0.25s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fadeInModal {
          from { opacity: 0; transform: translateY(40px) scale(0.98);}
          to { opacity: 1; transform: translateY(0) scale(1);}
        }
      `}</style>
    </div>
  )
}