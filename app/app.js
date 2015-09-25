// THIS IS OUR SHOE COLLECTION APP. HOW MANY SHOES DO YOU HAVE IN YOUR COLLECTION? GET THIS APP TO WORK AND YOU WILL BE ABLE TO KEEP TRACK OF ALL YOUR CRAZY SHOES
var express = require('express');
var path = require('path');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shoes-app');

var routes = require('./config/');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(++3000);