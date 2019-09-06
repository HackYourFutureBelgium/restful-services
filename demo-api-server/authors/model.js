const mongoose = require('mongoose');

const authorSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    }
  }
);

module.exports = mongoose.model('author', authorSchema);
