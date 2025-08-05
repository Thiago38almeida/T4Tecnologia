import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'T4 Tecnologia - Inovação em Logística, ERP e Simuladores Automotivos',
  description: 'Soluções inteligentes para logística, integração ERP e simuladores automotivos ECU. Tecnologia que move o futuro.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className=" bg-gradient-to-br from-[#0A192F] to-[#1A1A1A] min-h-screen">
        <div className="max-w-7xl mx-auto px-4">
          {children}
        </div>
      </body>
    </html>
  )
}