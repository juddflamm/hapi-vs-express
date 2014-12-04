var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World from Express');
});

var server = app.listen(3000, function(){
  console.log('Express listening on port %d', server.address().port);
});
