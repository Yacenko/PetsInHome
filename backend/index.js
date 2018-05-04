const express = require('express');
const helmet = require('helmet');

const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const mongoClient = require('mongodb').MongoClient;

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

app.get('/animals/all', (req, res) => {
  mongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
    if (err) {
      throw err;
    }

    db.collection('zoo').find({}).toArray(function (err, result) {
      if (err) {
        throw err;
      }

      res.json(result);
    });
  });
});

app.get('/animals/:name', (req, res) => {
  mongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
    if (err) {
      throw err;
    }

    db.collection('zoo').find({name: req.params.name}).toArray(function (err, result) {
      if (err) {
        throw err;
      }

      res.json(result);
    });
  });
});

app.get('/questions', (req, res) => {
  mongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
    if (err) {
      throw err;
    }

    db.collection('questions').find().toArray(function (err, result) {
      if (err) {
        throw err;
      }

      res.json(result);
    });
  });
});

app.get('/text', (req, res) => {
  mongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
    if (err) {
      throw err;
    }

    db.collection('text').find().toArray(function (err, result) {
      if (err) {
        throw err;
      }

      res.json(result);
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`Application is listening to port ${port}`);
});
