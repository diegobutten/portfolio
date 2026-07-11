const router = require("express").Router()
// const nodemailer = require("nodemailer");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

// console.log("EMAIL_USER:", process.env.EMAIL_USER);
// console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

await resend.emails.send({
  from: "Portfolio <onboarding@resend.dev>",
  to: "darrelnaz390@gmail.com",
  subject: `Portfolio Contact — ${name}`,
  replyTo: email,
  text: `Name: ${name}

Email: ${email}

Message:
${message}`,
});

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// const dns = require("dns");

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
//   family: 4, // Force IPv4
//   getSocket: (options, callback) => {
//     dns.lookup(options.host, { family: 4 }, (err, address) => {
//       if (err) return callback(err);
//       options.host = address;
//       callback(null, false);
//     });
//   },
// });

// router.post("/", async (req, res) => {
//   try {
//     const { name, email, message } = req.body;

//     await transporter.sendMail({
//       from: email, // the client using it
//       to: process.env.EMAIL_USER,
//       subject: `Portfolio Contact — ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
//     });

//     res.json({ success: true });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to send email." });
//   }
// });

module.exports = router
