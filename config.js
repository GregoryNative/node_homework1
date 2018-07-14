const fs = require('fs');

const environments = {};

environments.default = {
  httpsServerOptions: {
    key: fs.readFileSync('./https/key.pem'),
    cert: fs.readFileSync('./https/cert.pem'),
  },
};

environments.staging = {
  port: 3000,
  portHttps: 3001,
  envName: 'staging',
};

environments.production = {
  port: 5000,
  portHttps: 5001,
  envName: 'production',
};

const currentEnvironment =
  typeof process.env.NODE_ENV == 'string'
    ? process.env.NODE_ENV.toLowerCase()
    : '';

const environmentToExport =
  typeof environments[currentEnvironment] == 'object'
    ? environments[currentEnvironment]
    : environments.staging;

module.exports = Object.assign({}, environments.default, environmentToExport);
