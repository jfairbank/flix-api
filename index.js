var express = require('express');
var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.post('/verify', function(req, res) {
	res.send({ token: 123 });
});

app.listen(3001, function() {
	console.log('Flix API listening on port 3001');
})
