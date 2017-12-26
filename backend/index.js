const express = require('express');
const helmet = require('helmet');

// TODO path?
const path = require('path');
const app = express();

const mongoClient = require('mongodb').MongoClient;

app.use(helmet());

app.use(express.static(path.join(__dirname, './../frontend/build')));
//для работы с фронтендом оборачивается в гет-запрос.

//передать из браузера нужный ключ после ответа на вопрос и найти по нему имена, записать в результат.

app.get('/animals/all', (req, res) => {
    
  mongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
        
    if (err) {
      throw err;
    }

    db.collection('zoo').find({}).toArray(function(err, result) {
            
      if (err) {
        throw err;
      }
            
      res.json(result);
    });

  });
  
});

app.get('/animals/:name', (req, res) => {
   

  mongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
        
    if (err) {
      throw err;
    }

    let name = res.send(req.params.name);

    // имя БД анималс передалось нам в параметре дб, далее надо работать с одной коллекцией
    db.collection('zoo').find({ name }).toArray(function(err, result) {
            
      if (err) {
        throw err;
      }
            
      res.json(result);
    });

  });
 
});


app.get('/questions', (req, res) => {
    
  mongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
        
    if (err) {
      throw err;
    }

    db.collection('questions').find().toArray(function(err, result) {
            
      if (err) {
        throw err;
      }
            
      res.json(result);
    });

  });
    
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , 'index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Application is listening to port ${port}`);
});
