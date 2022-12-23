const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/paletas-db', {
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
