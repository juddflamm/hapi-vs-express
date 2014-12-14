var Hapi = require('hapi');
var Joi = require("joi");
var server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 3000
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply('path param: ' + request.params.name + '<br>query param (id): ' + request.query.id);
  },
  config: {
    validate: {
      params: {
        name: Joi.string().valid(["Ren","Stimpy"]).default("Stimpy")
      },
      query: {
        id: Joi.number().integer().less(10).required()
      }
    }
  }
});

server.start(function () {
  console.log('Hapi server running at:', server.info.uri);
});
