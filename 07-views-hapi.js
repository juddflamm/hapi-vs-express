var Hapi = require('hapi');
var server = new Hapi.Server(3000);

server.views({ engines: { jade: require('jade') } });

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    var json = {"name": request.params.name, "id": request.query.id};
    reply.view('index', json);
  }
});

server.start(function () {
  console.log('Hapi server running at:', server.info.uri);
});
