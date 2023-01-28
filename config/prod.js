const interfaceService = require('../services/interface.service');
const configInterface = require('./config.scheme');

const devConf = {
  db: {
    name: 'ED',
    url: 'mongodb+srv://ED_ADMIN:ED_APP_12345@ed.39otwpx.mongodb.net/?retryWrites=true&w=majority'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'some_secret_string',
    options: {
      expiresIn: process.env.JWT_EXPIRES || '5h',
      algorithm: process.env.JWT_ALGORITHM || 'HS256'
    }
  }
}

interfaceService.validateType(configInterface, devConf, true);
module.exports = devConf