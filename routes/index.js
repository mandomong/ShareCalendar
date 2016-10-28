var express = require('express');

var router = express.Router();
var mysql = require('mysql');


/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index');
  /*
  pool.getConnection(function(err, connection){
    connection.query('SELECT * FROM USERS', function(err, rows){
      if (err){
        console.err("err : " + err);
      }

      console.log("rows : " + JSON.stringify(rows));
      res.render('index', { title: 'Express' });

    });
  });
  */

});

module.exports = router;
