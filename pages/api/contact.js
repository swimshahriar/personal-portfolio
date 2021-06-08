import nodemailer from "nodemailer";

export default async (req, res) => {
  const { subject, email, name, message } = req.body;

  if (!subject && !email && !name && !message) {
    return res.status(400).json({
      status: "failed",
      message: "Input fields are empty",
    });
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NODE_MAILER_USER,
      pass: process.env.NODE_MAILER_PASS,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.NODE_MAILER_USER,
    to: process.env.EMAIL,
    subject: `${subject}`,
    text: message + "Sent from: " + email,
    html: `<div>
        <p>From: ${email}</p>
        <p>Name: ${name}</p>
        <p>Message: ${message}</p>
      </div>`,
  };

  // verify connection configuration
  transporter.verify((error, _) => {
    if (error) {
      return res.status(400).json({
        status: "failed",
        message: err.message,
      });
    }
  });

  // send mail
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      return res.status(400).json({
        status: "failed",
        message: err.message,
      });
    }
    return res.status(200).json({
      status: "success",
    });
  });
};
