var CategoryService   = require('../service/CategoryService.js');

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