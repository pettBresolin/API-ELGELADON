const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect("mongodb://0.0.0.0:27017/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database Connected');
    })
    .catch((err) => {
      console.log('Error in database: ', err);
    });
};

module.exports = connectToDatabase;
