/**
 * Created by mandoo on 2016-10-28.
 */

var mysql = require('mysql');
var dbconfig = require('./dbconfig');

module.exports = mysql.createPool(dbconfig);

