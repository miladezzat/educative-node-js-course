require('dotenv').config();
const app = require('./src/app');
const connectToDB = require('./connect-to-db');
const { appPort } = require('./config/app.config');

const boot = async () => {
  await connectToDB();
  app.listen(appPort, () => {
    console.log(`Server running on port ${appPort}`);
  });
};

boot();
