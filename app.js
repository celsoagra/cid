var http = require('http');
var express       = require('express');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var UploadUtil    = require('./src/util/UploadUtil.js');

// Configuração BD Mongo
var mongoose = require('mongoose');
var mongoConfig = 'mongodb://' + process.env.DB_USER_ENV +  ':' + process.env.DB_PASS_ENV + '@' +  process.env.DB_CONFIG_ENV;
mongoose.Promise = global.Promise;
mongoose.connect(mongoConfig).then(() =>  console.log('connection succesful')).catch((err) => console.error(err));

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', require('./routes.js'));

module.exports = app;