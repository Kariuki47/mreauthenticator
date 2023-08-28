const baseConfig = require('../common/config');

module.exports = {
  ...baseConfig,
  PORT: process.env.PORT || 8081,
  EMAILER_URL: process.env.EMAILER_URL || 'http://localhost:8082/emailer',
  SIGNUP: process.env.SIGNUP === 'true' || true,
  DOMAIN_URL: process.env.DOMAIN_URL || 'http://localhost',
};
