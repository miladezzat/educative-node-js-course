const mongoose = require('mongoose');

const { databaseUrl, databaseAuth } = require('./config/app.config');

const connectToDB = async () => {
  mongoose.Promise = global.Promise;

  return mongoose.connect(
    `${databaseUrl}`,
    {
      auth: databaseAuth,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
    .then(() => console.log('MongoDB connected', { databaseUrl }))
    .catch((error) => console.error('Error to connect to mongodb', { error, message: error.message }));
};

module.exports = connectToDB;
