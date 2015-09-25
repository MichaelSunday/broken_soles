// THIS IS OUR SHOE COLLECTION APP. HOW MANY SHOES DO YOU HAVE IN YOUR COLLECTION? GET THIS APP TO WORK AND YOU WILL BE ABLE TO KEEP TRACK OF ALL YOUR CRAZY SHOES
var express = require('express');
var path = require('path');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shoes-app');

var routes = require('./config/routes');

app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(++3000);

"body-parser": "^1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "ejs": "^2.3.3",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "method-override": "^2.3.4",
    "mongoose": "^4.0.7",
    "morgan": "~1.6.1"
