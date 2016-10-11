var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

//app.use(express.bodyParser());

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.post('/messageSMS', function(req, res) {
    console.log('input: %s', req.url);
    res.send('You have successfully sent an SMS');
});

app.listen(port, function () {
  console.log('Example app listening on port 8000!');
});