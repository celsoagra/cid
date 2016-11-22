var express        = require('express');
var Model          = require('./src/model');
var CidController  = require('./src/controller/CidController.js');
var router         = express.Router();

router.get('/' , index);
router.get('/category' , CidController.findCategory);

function index(req, res, next) {
  var data = { name : 'icd', version : '0.1'};

  res.send(data);
}

module.exports = router;
