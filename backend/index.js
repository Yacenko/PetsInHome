const express = require('express');
const helmet = require('helmet');

// TODO path?
const path = require('path');
const app = express();

const mongoClient = require('mongodb').MongoClient;

// http://expressjs.com/uk/advanced/best-practice-security.html
app.use(helmet());
//для работы с фронтендом оборачивается в гет-запрос.

//передать из браузера нужный ключ после ответа на вопрос и найти по нему имена, записать в результат.
//
// mongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
//     if (err) {
//         throw err;
//     }
//
//     //const collection = db.collection('furry');
//
//     animals.find({ keys: 'animalkey' }).toArray(function(err, result) {
//         if (err) {
//             throw err;
//         }
//
//         console.log(result);
//
//     });
//
// });




//app.use(express.static(path.join(__dirname, './../frontend/build')));
//гет-запрос для фронтенда.
// app.get('./animals', (req, res) => {
//     mongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
//         if (err) {
//             throw err;
//         }
//
//         const collection = db.collection('furry');
//
//         collection.find({ name: 'богомол' }).toArray(function(err, result) {
//             if (err) {
//                 throw err;
//             }
//
//             console.log(result);
//
//             res.json(result);
//         });
//
//     });
//
// });

app.get('/animals:name', (req, res) => {
   console.log(res.send(req.params.name));

    
});
//получили из браузера некий параметр.

app.get('/animals/all', (req, res) => {
    

    console.log(res.send(req.params));
});

app.get('/questions', (req, res) => {
    

    console.log(res.send(req.params));
});


//app.get('/', (req, res) => {
 // res.sendFile(path.join(__dirname , 'index.html'));
//});





const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Application example listening to port ${port}`);
});
