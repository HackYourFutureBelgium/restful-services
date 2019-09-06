const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('../config');

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => { console.log('Database connection established'); })
  .catch((err) => {
    console.error(`Database error, exiting. Stack trace:\n${err}`);
    process.exit();
  });

const testingApp = express();

testingApp.use(cors());
testingApp.use(bodyParser.urlencoded({ extended: true }));
testingApp.use(bodyParser.json());

testingApp.get('/', (req, res) => {
  res.json({ welcome: 'you are testing the authors api' });
});

const authors = require("./routes");
testingApp.use("/", authors);

const port = process.env.PORT || 4000;
testingApp.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
