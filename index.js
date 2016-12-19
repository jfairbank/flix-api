var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/login', function(req, res) {
  if (req.body.email !== 'user@flix.com') {
    return res.sendStatus(401);
  }

  if (req.body.password !== 'password') {
    return res.sendStatus(401);
  }

  var token = jwt.sign({ user: {
    firstName: 'Test',
    lastName: 'User',
  }}, 'secret', { expiresIn: '1h' });

  res.send({ token });
});

app.listen(process.env.PORT || 3001, function() {
  console.log('Flix API listening on a magical port that shall not be named');
})
