import nodemailer from 'nodemailer';

export default function sendVerificationEmail(email, token) {
   try {
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.SenderEmail,
            pass:process.env.SenderPassword
        }
    })

    let mailOptions={
        from:process.env.SenderEmail,
        to:email,
        subject:'Email Verification',
        text:`Please verify your email by clicking the following link: http://localhost:5000/api/user/verify-email?token=${token}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending verification email:', error);
            reject(false);
        } else {
            console.log('Verification email sent:', info.response);
            resolve(true);
        }
    });

   } catch (error) {
    
   }
}