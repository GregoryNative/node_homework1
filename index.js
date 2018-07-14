const http = require('http');
const https = require('https');

const server = require('./lib/server');

const config = require('./config');

// run HTTP server
const httpServer = http.createServer(function(req, res) {
  server(req, res);
});
httpServer.listen(config.port, function() {
  console.log('The HTTP server is running on port ' + config.port);
});

// run HTTPS server
const httpsServer = https.createServer(config.httpsServerOptions, function(req, res) {
  server(req, res);
});
httpsServer.listen(config.portHttps, function() {
  console.log('The HTTPS server is running on port ' + config.portHttps);
});
