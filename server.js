import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Servir archivos estáticos de la carpeta dist (Vite build)
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
});

app.post('/api/send-email', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: `"${name}" <${process.env.MAIL_FROM}>`,
        to: process.env.MAIL_TO,
        subject: `🚀 Nuevo Lead Algorah: ${name}`,
        text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
        html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
                <h2 style="color: #1A1A1A;">Nuevo Proyecto: ${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Desafío/Idea:</strong></p>
                <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
                    ${message}
                </div>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 12px; color: #888;">Lead generado desde Algorah Landing Page</p>
            </div>
        `,
    };

    try {
        console.log(`📤 Intentando enviar correo de: ${email} para: ${process.env.MAIL_TO}...`);
        await transporter.sendMail(mailOptions);
        console.log('✅ Correo enviado con éxito!');
        res.status(200).json({ success: true, message: 'Email enviado correctamente' });
    } catch (error) {
        console.error('❌ Error enviando email:', error.message);
        res.status(500).json({ success: false, message: 'Error interno del servidor', error: error.message });
    }
});

app.post('/api/notify-visit', async (req, res) => {
    const { page } = req.body;
    
    if (!process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
        return res.status(500).json({ success: false, message: 'Telegram credentials missing' });
    }

    // Agregar la fecha y hora de Colombia
    const date = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });
    const message = `👀 <b>¡Nueva Visita!</b>\nAlguien acaba de entrar a: <b>${page}</b>\n🕒 <i>${date}</i>`;
    const telegramUrl = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        const response = await fetch(telegramUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: process.env.TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });

        if (response.ok) {
            res.status(200).json({ success: true });
        } else {
            console.error('❌ Error desde Telegram:', await response.text());
            res.status(500).json({ success: false, message: 'Error enviando a Telegram' });
        }
    } catch (error) {
        console.error('❌ Error enviando a Telegram:', error.message);
        res.status(500).json({ success: false, message: 'Error de servidor' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor de correo Algorah corriendo en http://localhost:${PORT}`);
});
