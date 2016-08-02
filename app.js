
var apiVersion = 1;

var express = require('express');
var colors = require('colors');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

app.use('/public/components', express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/src'));

app.get('/api/' + apiVersion + '/test', function(req, res) {
  console.log('REQUEST ~~~ [GET] '.yellow  + 'GET TEST');
  res.send('Hello world');
});

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.listen(8765);
console.log('[INIT] '.green + 'Server initiated on port 8765');
