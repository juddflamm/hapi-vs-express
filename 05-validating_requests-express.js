var express = require('express');
var app = express();

var router = express.Router();
router.param('name', function(req, res, next, name) {
  //TODO Roll your own validation, and error reporting
  req.name = name;
  next();
});

app.get('/:name', function(req, res){
  res.send('path param: ' + req.param('name') + '<br>query param (id): ' + req.param('id'));
});

app.use('/', router);

var server = app.listen(3000, function(){
  console.log('Express listening on port %d', server.address().port);
});
