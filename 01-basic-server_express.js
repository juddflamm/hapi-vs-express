var express = require('express');
var app = express();

var server = app.listen(3000, function(){
  console.log('Express listening on port %d', server.address().port);
});
