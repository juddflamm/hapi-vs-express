var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

var publicFilesPath = (process.env.PUB_FILES)?process.env.PUB_FILES:'./public';

server.route([
  {
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply('Hello World from Hapi');
    }
  },
  {
    method: 'GET',
    path: '/public/{path*}',
    handler: {
      directory: { path: publicFilesPath, listing: false, index: true }
    }
  }
]);

server.start(function () {
  console.log('Hapi server running at:', server.info.uri);
});
