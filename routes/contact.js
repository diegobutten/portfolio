const router = require("express").Router();
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

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

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

module.exports = router;