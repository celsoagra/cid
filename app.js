var http = require('http');
var express       = require('express');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

// Configuração BD Mongo
var mongoose = require('mongoose');
var mongoConfig = 'mongodb://' + process.env.DB_USER_ENV +  ':' + process.env.DB_PWD_ENV + '@' +  process.env.DB_CONFIG_ENV;
mongoose.Promise = global.Promise;
mongoose.connect(mongoConfig).then(() =>  console.log('connection succesful')).catch((err) => console.error(err));

var app = express();
app.use(function (req, res, next) {
	var domains = [ req.headers.origin , '*' ]
    res.setHeader('Access-Control-Allow-Origin', domains);
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', require('./routes.js'));

module.exports = app;