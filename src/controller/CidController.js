var CategoryService   = require('../service/CategoryService.js');
var ChapterService   = require('../service/ChapterService.js');

/**
 * Return categories by query.
 */
module.exports.findCategory = function (req, res, next) {
  if (!req.query.q) {
    CategoryService.findAll(req, res);
  } else {
    var query = req.query.q.toLowerCase();
    CategoryService.findFiltered (req, res, query);
  }
}

/**
 * Return chapter by query.
 */
module.exports.findChapter = function (req, res, next) {
  if (!req.query.q) {
    ChapterService.findAll(req, res);
  } else {
    var query = req.query.q.toLowerCase();
    ChapterService.findFiltered (req, res, query);
  }
}