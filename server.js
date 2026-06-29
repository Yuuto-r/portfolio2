// server.js (Your custom backend)
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Configure your direct SMTP connection (e.g., your hosting provider or Gmail app pass)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jovertcardiente0999@gmail.com',
    pass: 'YOUR_GMAIL_APP_PASSWORD', // Generated securely via Google Account
  },
});

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'jovertcardiente0999@gmail.com',
    subject: `Portfolio inquiry from ${name}`,
    text: `Sender Email: ${email}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, error: error.toString() });
    }
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));