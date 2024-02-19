import nodemailer from 'nodemailer'

const sendMail = async (to, subject,text) =>{
    const transport = nodemailer.createTestAccount({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const mailOptions = {
        from: process.env.EMAIL,
        to,
        subject,
        text
    }
    return transport.sendMail(mailOptions)
}

export default sendMail