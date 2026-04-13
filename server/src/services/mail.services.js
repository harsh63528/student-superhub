import nodemailer from 'nodemailer';

export default async function sendVerificationEmail(email, token) {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SenderEmail,
        pass: process.env.SenderPassword
      }
    });

    let mailOptions = {
      from: process.env.SenderEmail,
      to: email,
      subject: 'Email Verification',
      html: `<p>Please verify your email by clicking: 
        <a href="http://localhost:5000/api/users/verify/${token}">Verify Email</a></p>`
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Verification email sent:', info.response);
    return true;
  } catch (error) {
    console.error('Error sending verification email:', error);
    return false;
  }
}
