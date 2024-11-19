const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: '23.229.231.104',
    port: 465,
    secure: true,
    auth: {
        user: 'info@dataxperts.org',
        pass: 'P@55w0rd',
    },
    tls: {
        rejectUnauthorized: false,
    },
});

const mailOptions = {
    from: 'info@dataxperts.org',
    to: 'spieka@clonenuoi2024.top',
    subject: 'Test Email from Node.js',
    text: 'Hello! This is a test email sent using Node.js and Nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});
