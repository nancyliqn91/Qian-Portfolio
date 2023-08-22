const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;

  // Create a Nodemailer transport
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Setup the email data
  const mailOptions = {
    from: email,
    to: 'nancyliqn91@gmail.com', // Your email address to receive the message
    subject: subject,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.send('Email sent successfully');
    }
  });
});

// Start the server
const port = 3000; // You can change the port as needed
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});