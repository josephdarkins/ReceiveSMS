var express = require('express');
var app = express();
var bodyParser = require('body-parser')

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
    
    //var query = req.url.parse(req.url,true).query;
    //res.end(JSON.stringify(query));
    //console.log(req.url);
    console.log(req.body);
    //console.log(req.params);
    //console.log(req.originalURL);
    
    res.send('You have successfully sent an SMS');


});

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});