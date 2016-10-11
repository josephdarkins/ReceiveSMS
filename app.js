var express = require('express');
var app = express();

//app.use(express.bodyParser());

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.post('/messageSMS', function(req, res) {
    console.log('input: %s', req.url);
    res.send('You have successfully sent an SMS');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});