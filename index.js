const express = require('express');
require('dotenv').config();
const cors = require('cors');
const nodemailer = require('nodemailer');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const requestRoutes = require('./routes/requestRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const logRoutes = require('./routes/logRoutes');
const servicecinRoutes = require('./services/servicecin/routes/servicecinRoutes');
const servicetaxRoutes = require('./services/servicetax/routes/servicetaxRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(fileUpload());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/cin', servicecinRoutes);
app.use('/api/tax', servicetaxRoutes);

const transporter = nodemailer.createTransport({
  service:"murielarisoaran@gmail.com",
  auth: {
    user: "murielarisoaran@gmail.com",
    pass: "aldm lrgh vzwr txzu"
  }
});

app.post('/api/verify', (req, res) => {
  const { email, verificationCode } = req.body;

  if (!email || !verificationCode) {
    return res.status(400).send('Email and verification code are required.');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Email verification',
    text: `Your verification code is: ${verificationCode}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message)
      return res.status(500).send('Error sending email: ' + error.message);
    }
    res.status(200).send('Verification code sent successfully.');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
