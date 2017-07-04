
// config/database.js
const url = require('url');
const Pool = require('pg-pool');
// the local DB URL needs to be changed to your own settings
var localDBUrl = "postgres://gpqmvhmwnsyjoe:sttng1abc@ec2-54-197-232-155.compute-1.amazonaws.com:5432/d1obt7gii4e3oh";
var databaseUrl = process.env.DATABASE_URL || localDBUrl;
var params = url.parse(databaseUrl);
var auth = params.auth.split(':');
var config = {
    user: auth[0],
    password: auth[1],
    host: params.hostname,
    port: params.port,
    database: params.pathname.split('/')[1],
    ssl: true   // NOTICE: if connecting on local db, this should be false
};
const pool = new Pool(config);
module.exports = pool;