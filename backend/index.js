require('dotenv').load();

const express = require('express');
const helmet = require('helmet');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const {
  loadAnimals,
  loadQuestions,
  loadTexts,
  findAnimal,
  loadTranslations
} = require('./data');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './../frontend/build')));

// TODO send mails when it is needed
// const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'mjacenk@gmail.com',
//     pass: 'hierodula7'
//   }
// });
//
// const mailOptions = {
//   from: 'mjacenk@gmail.com',
//   to: 'prayingmantis@ukr.net',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };
//
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

app.post('/contact', function (req, res) {
  const email = req.body.email;
  const letter = req.body.letter;
  res.send('Мое мыло '+ email + ' Письмо ' + letter );
});

app.get('/animals/all', loadAnimals);
app.get('/animals/:name', findAnimal);
app.get('/questions', loadQuestions);
app.get('/translations', loadTranslations);
app.get('/text', loadTexts);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT, function () {
  console.log(`Application is listening to port ${process.env.PORT}`);
});
