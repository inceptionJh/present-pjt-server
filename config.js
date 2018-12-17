require('dotenv').config();

module.exports = function() {
  console.log('[+] NODE_ENV =', process.env.NODE_ENV);

  switch (process.env.NODE_ENV) {
    case 'develop':
      return {
        STATIC_PATH: '../im09-2018-11-prj-present-client/build'
      };
    case 'product':
      return {
        STATIC_PATH: '/client/build'
      };
  }
};
