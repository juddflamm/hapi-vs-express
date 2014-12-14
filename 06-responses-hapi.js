var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    var json = {"name": request.params.name, "id": request.query.id};
    reply(json);
  }
});

server.start(function () {
  console.log('Hapi server running at:', server.info.uri);
});
