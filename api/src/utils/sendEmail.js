import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const sendMail = async (to, subject, text) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAILPASS,
    },
  });

  console.log("SA", transport);
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text,
  };
  return transport.sendMail(mailOptions);
};

export default sendMail;
