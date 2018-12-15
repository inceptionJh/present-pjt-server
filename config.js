require('dotenv').config();

module.exports = function() {
  console.log('[+] NODE_ENV =', process.env.NODE_ENV);

  switch (process.env.NODE_ENV) {
    case 'develop':
      return {};
    case 'product':
      return {};
    default:
      return;
  }
};
