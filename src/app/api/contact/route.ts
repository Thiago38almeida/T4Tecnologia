import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, phone, segment, employees } = await req.json()

  // ⚙️ Configure aqui seu servidor SMTP
  const transporter = nodemailer.createTransport({
    host: 'mail.t4tecnologia.com.br', // geralmente é "mail.seudominio.com.br"
    port: 465, // ou 587, depende da hospedagem
    secure: true, // true para 465, false para 587
    auth: {
      user: 'comercial@t4tecnologia.com.br',
      pass: process.env.EMAIL_PASSWORD, // coloque a senha real no .env
    },
  })

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; padding: 32px 24px; border: 1px solid #e0e0e0;">
      <h2 style="color: #2563eb; margin-bottom: 8px;">Novo contato comercial</h2>
      <p style="color: #222; margin-bottom: 24px;">Você recebeu uma nova solicitação de contato pelo site.</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">Nome:</td><td>${name}</td></tr>
        <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">E-mail:</td><td>${email}</td></tr>
        <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">Telefone:</td><td>${phone}</td></tr>
        <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">Segmento:</td><td>${segment}</td></tr>
        <tr><td style="padding: 8px 0; color: #555; font-weight: bold;">Qtd Funcionários:</td><td>${employees}</td></tr>
      </table>
      <hr style="margin: 32px 0 16px 0; border: none; border-top: 1px solid #e0e0e0;" />
      <p style="font-size: 13px; color: #888;">Mensagem automática do site T4 Tecnologia.</p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: `"Site T4 Tecnologia" <comercial@t4tecnologia.com.br>`,
      to: 'tabstecnologia@gmail.com', // destino
      subject: 'Contato Comercial',
      html: htmlContent,
    })

    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('Erro ao enviar e-mail:', e)
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 })
  }
}
