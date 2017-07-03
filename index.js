var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;
var pg = require('pg');
var bodyParser = require('body-parser');

var connectionString = "postgres://gpqmvhmwnsyjoe:sttng1abc@ec2-54-197-232-155.compute-1.amazonaws.com:5432/d1obt7gii4e3oh";

var client = new pg.Client(connectionString);
client.connect();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/shop-around/')));


// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*')
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow , 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    // Pass to next layer of middleware
    next();
});

// Get request for search box
app.post('/search', function (req, res) {

    var keyword = req.body.searchBar;

    var query = client.query("SELECT * FROM collections WHERE LOWER (item_name) LIKE LOWER('%" + keyword + "%');");
    var results = [];

    query.on('error', function (err) {
        console.log(err);
    });

    query.on('row',function(row){
        results.push(row);
    });

    query.on('end',function() {
        console.log(results.length);
        res.json(results);
    });


    if(keyword.length<2){
        console.log('nothing entered');
        res.send('Nothing found');
    }
    });

app.listen(port, function () {
    console.log('Example app listening on port 8080!');});


