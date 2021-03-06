'use strict';

const {postgres} = require('getconfig');

const SSL = '?ssl=true';
const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  idleTimeoutMillis: 1000,
  max: 10,
  connectionString: PROD && !postgres.endsWith(SSL) ? postgres + SSL : postgres
};
