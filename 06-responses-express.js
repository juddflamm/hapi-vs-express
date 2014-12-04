var express = require('express');
var app = express();

app.get('/:name', function(req, res){
  var json = {"name": req.param('name'), "id": req.param('id')};
  res.send(json);
});

var server = app.listen(3000, function(){
  console.log('Express listening on port %d', server.address().port);
});
