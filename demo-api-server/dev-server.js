const express = require("express");
const testingApp = express();
const mongoose = require('mongoose');

require('./config');

mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => { console.log('Database connection established'); })
  .catch((err) => {
    console.error(`Database error, exiting. Stack trace:\n${err}`);
    process.exit();
  });

const bodyParser = require('body-parser');
const cors = require('cors');

testingApp.use(cors());
testingApp.use(bodyParser.urlencoded({ extended: true }));
testingApp.use(bodyParser.json());

testingApp.get('/api', (req, res) => {
  res.json({ message: 'API ready' });
});

const apiServices = require("./services");
testingApp.use("/api", apiServices);

const port = process.env.PORT || 4000;
testingApp.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
