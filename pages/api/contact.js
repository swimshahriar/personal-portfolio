import nodemailer from "nodemailer";
import { google } from "googleapis";

export default async (req, res) => {
  const { subject, email, name, message } = req.body;

  if (!subject && !email && !name && !message) {
    return res.status(400).json({
      status: "failed",
      message: "Input fields are empty",
    });
  }

  const oAuth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.NODE_MAILER_USER,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
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
    await transporter.verify((error, _) => {
      if (error) {
        return res.status(400).json({
          status: "failed",
          message: err.message,
        });
      }
    });

    // send mail
    await transporter.sendMail(mailData, (err, _) => {
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
  } catch (error) {
    return res.status(400).json({
      status: "failed",
      message: error.message,
    });
  }
};
