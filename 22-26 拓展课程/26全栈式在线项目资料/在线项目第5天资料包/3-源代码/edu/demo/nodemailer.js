'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'smtp.ym.163.com',
  auth: {
    user: 'test2@lipengzhou.com',
    pass: 'a123456'
  }
});

// setup email data with unicode symbols
let mailOptions = {
  from: '"Fred Foo 👻" <test2@lipengzhou.com>', // sender address
  to: 'lipengzhou@itcast.cn', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world ?', // plain text body
  html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
});
