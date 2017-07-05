var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8110;
var pg = require('pg');
var bodyParser = require('body-parser');
var morgan = require('morgan');


var connectionPool = require('./config/database');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + '/shop-around/')));

app.use (function (req, res, next){

    if (!req.headers.host.startsWith("localhost") && req.headers['x-forwarded-proto'] !== 'https') {
        let httpsUrl = ['https://nwen304-group-project.herokuapp.com/', res.url].join('');
        return res.redirect(httpsUrl);
    }
    return next();
});

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

require('./routes/search.js')(app,connectionPool);

app.listen(port, function () {
    console.log('Example app listening on port 8080!');});


