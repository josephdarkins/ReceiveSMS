var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var moment = require('moment');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());



app.get('/', function(req, res) {
    res.send('Hello World!');
    console.log('Hello world \n');
});

app.post('/messageSMS', function(req, res) {
    
    var inTime = moment(req.body.RECEIVETIME);

    console.log('all params : ' + req.body);
    console.log('Body : ' + req.body.BODY);
    console.log('MO number : ' + req.body.MONUMBER);
    console.log('Destination : ' + req.body.DESTINATION);
    console.log('Receive time : ' + inTime.format('LLL'));
    
    res.send('You have successfully posted an SMS');


});

app.listen(port, function () {
  console.log('SMS receive app listening on port 3000!');
});