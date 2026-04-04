import nodemailer from 'nodemailer';

export const sendVerificationEmail = async (email, token,senderEmail, senderPassword) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: senderEmail,
                pass: senderPassword
            }
        });

        await transporter.sendMail({
            from: senderEmail,
            to: email,
            subject: 'Verify your email',
            html: `<p>Click <a href="${process.env.CLIENT_URL}/verify-email?token=${token}">here</a> to verify your email.</p>`
        });
                pass: process.env.PASSWORD
            }
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: 'Verify your email',
            html: `<p>Click <a href="${process.env.CLIENT_URL}/verify-email?token=${token}">here</a> to verify your email.</p>`
        });

    } catch (error) {
        
    }
}