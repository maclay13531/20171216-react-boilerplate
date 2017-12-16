var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config');
var connection = mysql.createConnection(config)
connection.connect();

var bcrypt = require('bcrypt-nodejs');
var randToken = require('rand-token');

/* GET home page. */

module.exports = router;
