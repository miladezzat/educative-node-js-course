module.exports = {
  appPort: process.env.PORT,
  appHost: process.env.APP_HOST,
  databaseUrl: process.env.DATABASE_URL,
  databaseAuth: process.env.DATABASE_AUTH
    ? JSON.parse(Buffer.from(process.env.DATABASE_AUTH, 'base64').toString('utf8'))
    : null,
};
