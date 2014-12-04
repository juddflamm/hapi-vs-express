var Hapi = require('hapi');
var server = new Hapi.Server(3000);

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello World from Hapi');
  }
});

server.start(function () {
  console.log('Hapi server running at:', server.info.uri);
});
