const express = require('express');
const helmet = require('helmet');

// TODO path?
const path = require('path');
const app = express();

const mongoClient = require('mongodb').MongoClient;

// http://expressjs.com/uk/advanced/best-practice-security.html
app.use(helmet());


app.use(express.static(path.join(__dirname, './../frontend/build')));

app.get('/animals', (req, res) => {
    mongoClient.connect('mongodb://localhost:27017/animals', function(err, db) {
        if (err) {
            throw err;
        }

        const collection = db.collection('furry');

        collection.find({ name: 'cat' }).toArray(function(err, result) {
            if (err) {
                throw err;
            }

            console.log(result);

            res.json(result);
        });

    });

});



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname , 'index.html'));
});





const port = process.env.PORT || 5000;

app.listen(port, function () {
  console.log(`Application example listening to port ${port}`);
});
