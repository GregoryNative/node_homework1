const ping = require('./ping');
const hello = require('./hello');
const notFound = require('./notfound');

const routers = {
  ping: ping,
  hello: hello,

  notFound: notFound,
};

module.exports = routers;
