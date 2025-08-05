import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, phone, segment, employees } = await req.json()
  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'tabstecnologia@gmail.com',
      subject: 'Contato Comercial',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; padding: 32px 24px; border: 1px solid #e0e0e0;">
          <h2 style="color: #2563eb; margin-bottom: 8px;">Novo contato comercial</h2>
          <p style="color: #222; margin-bottom: 24px;">Você recebeu uma nova solicitação de contato pelo site.</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">Nome:</td>
              <td style="padding: 8px 0; color: #222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">E-mail:</td>
              <td style="padding: 8px 0; color: #222;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">Telefone:</td>
              <td style="padding: 8px 0; color: #222;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">Segmento:</td>
              <td style="padding: 8px 0; color: #222;">${segment}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">Qtd Funcionários:</td>
              <td style="padding: 8px 0; color: #222;">${employees}</td>
            </tr>
          </table>
          <hr style="margin: 32px 0 16px 0; border: none; border-top: 1px solid #e0e0e0;" />
          <p style="font-size: 13px; color: #888;">Mensagem automática do site T4 Tecnologia.</p>
        </div>
      `
    });
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: e + 'Erro ao enviar' }, { status: 500 })
  }
}