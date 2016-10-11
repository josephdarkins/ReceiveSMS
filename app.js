var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

var inputURL

//app.use(express.bodyParser());

app.get('/', function(req, res) {
    res.send('Hello World!');
    console.log('Hello world \n');
});

app.post('/messageSMS', function(req, res) {
    
    //var query = req.url.parse(req.url,true).query;
    //res.end(JSON.stringify(query));
    console.log('URL: %s', req.url);
    console.log('body: %s', req.body);
    console.log('params: %s', req.params);
    console.log('originalURL: %s', req.originalURL);
    
    res.send('You have successfully sent an SMS');


});

app.listen(port, function () {
  console.log('Example app listening on port 8000!');
});