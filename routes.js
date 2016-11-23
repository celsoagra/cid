var express        = require('express');
var Model          = require('./src/model');
var CidController  = require('./src/controller/CidController.js');
var router         = express.Router();

router.get('/' , index);
router.get('/category' , CidController.findCategory);
router.get('/chapter' , CidController.findChapter);

function index(req, res, next) {
  var data = {
    name : 'icd',
    description: 'application focused on consult information about ICD (International Classification of Diseases)',
    url : 'https://github.com/celsoagra/icd',
    demo : 'https://celsoagra.github.io/icd',
    version : '0.1'
  };
  res.send(data);
}

module.exports = router;
