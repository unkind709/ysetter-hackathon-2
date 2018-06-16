var express = require('express');
var router = express.Router();

var mongojs = require('./db');
var db = mongojs.connect;

router.use(express.json())
router.get('/getuser', function(req, res, next) {
  const getdb = db.employee.find({name: req.query.name},function(err,data) {
    console.log("pass");
    res.json(data);
  });
});
/* GET users listing. */
router.post('/postuser', function(req, res, next) {
  console.log(req.body); // your JSON
  res.send(req.body);
  db.employee.insert(req.body);
});

module.exports = router;
