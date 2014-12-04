var Hapi = require('hapi');
var server = new Hapi.Server(3000);

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply('path param: ' + request.params.name + '<br>query param (id): ' + request.query.id);
  }
});

server.start(function () {
  console.log('Hapi server running at:', server.info.uri);
});
