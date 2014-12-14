var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

server.start(function () {
  console.log('Hapi server running at:', server.info.uri);
});
