var express = require('express');
var app = express();

app.get('/:name', function(req, res){
  res.send('path param: ' + req.param('name') + '<br>query param (id): ' + req.param('id'));
});

var server = app.listen(3000, function(){
  console.log('Express listening on port %d', server.address().port);
});
