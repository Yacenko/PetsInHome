const mongoClient = require('mongodb').MongoClient;

const loadData = async (table, req, res, params = {}) => {
  try {
    const client = await mongoClient.connect(process.env.DB_URL);
    const db = client.db(process.env.DB_NAME);
    const result = await db.collection(table).find(params).toArray();

    res.json(result);
  } catch (err) {
    console.log(`Error while getting data from ${table}`, err.stack);
  }
};

const loadAnimals = (req, res) => {
  return loadData('zoo', req, res);
};

const findAnimal = (req, res) => {
  return loadData('zoo', req, res, {name: req.params.name});
};

const loadQuestions = (req, res) => {
  return loadData('questions', req, res);
};

const loadTexts = (req, res) => {
  return loadData('text', req, res);
};

const loadTranslations = (req, res) => {
  return loadData('translations', req, res);
};

module.exports = {
  loadAnimals,
  loadQuestions,
  loadTexts,
  findAnimal,
  loadTranslations
};
