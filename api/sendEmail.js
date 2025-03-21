const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nombre, telefono, email, about } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'moiselias7@gmail.com',
                pass: 'mkiggtqyspgpllxs',
            },
        });

        const mailOptions = {
            from: email,
            to: 'moiselias7@gmail.com',
            subject: 'Nuevo mensaje de contacto',
            text: `Nombre: ${nombre}\nTeléfono: ${telefono}\nEmail: ${email}\nMensaje: ${about}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email enviado' });
        } catch (error) {
            res.status(500).json({ error: error.toString() });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}