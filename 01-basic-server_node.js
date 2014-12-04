var http = require('http');
var server = http.createServer(function(){});

server.listen(3000, function(){
  console.log("Listening on port 3000");
});
