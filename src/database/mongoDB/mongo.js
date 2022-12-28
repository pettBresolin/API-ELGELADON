const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(process.env.URI_DATABASE, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Database Connected in MongoDB Atlas');
    })
    .catch((err) => {
      console.log('Error in database: ', err);
    });
};

module.exports = connectToDatabase;
