var express = require('express');
var bodyParser = require('body-parser');
var moment = require('moment');
var dbMethods = require("./db_methods.js")
var pg = require('pg');

var app = express();    
var port = process.env.PORT || 3000; //define POST variable for Heroku
/*
var config = (
user: 'josephdarkins',
database: 'webhooks',
host: 'localhost',
port: '5432'
);*/

const connectionString = 'postgres://localhost:5432/webhooks';

const client = new pg.Client(connectionString);

client.connect();




//====================================================================================
//====================================================================================
   





//====================================================================================
//====================================================================================









//used to parse the URL
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.post('/', function(req, res) {
    
    var inTime = moment(req.body.RECEIVETIME).format('LL');

    console.log('Body : ' + req.body.BODY);
    console.log('MO number : ' + req.body.MONUMBER);
    console.log('Destination : ' + req.body.DESTINATION);
    console.log('Receive time : ' + inTime); //format the date and time 
    dbMethods.create_incoming_message(client, req.body.BODY, req.body.MONUMBER, req.body.DESTINATION, inTime);
    res.send('You have successfully posted an SMS');

    //forward MT to a number of m choice

});

app.listen(port, function () {
  console.log('SMS receive app listening on port 3000!');
});