require('dotenv').config();
const app = require('./src/app');
const { appPort } = require('./config/app-config');

const boot = () => {
  app.listen(appPort, () => {
    console.log(`Server running on port ${appPort}`);
  });
};

boot();
