const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect(
      'mongodb+srv://root:Admin@api-elgeladon.e8wxutg.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    .then(() => {
      console.log('Database Connected');
    })
    .catch((err) => {
      console.log('Error in database: ', err);
    });
};

module.exports = connectToDatabase;
