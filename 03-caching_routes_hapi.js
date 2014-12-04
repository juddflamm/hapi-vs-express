var Hapi = require('hapi');
var server = new Hapi.Server(3000);

var colours = ["red", "blue", "indigo", "violet", "green"];
server.method('randomColor', function(next){
  var colour = colours[Math.floor(Math.random() * colours.length)];
  next(null, colour);
}, {
  cache: { expiresIn: 10000 }
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    server.methods.randomColor(function(err, colour) {
      reply('Hello World from Hapi. Your color is: ' + colour);
    });
  }
});

server.start(function () {
  console.log('Hapi server running at:', server.info.uri);
});
