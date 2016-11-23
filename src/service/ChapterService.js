var Model   = require('../model');

/**
 * Send all categories
 */
module.exports.findAll = function(req, res) {
    Model.find({}, function(err, models) {
        if (err) throw err;
        res.send(models);
    });
}

/**
 * Filter considering categories
 */
module.exports.findFiltered = function(req, res, query) {
    var regexpField = new RegExp('^.*' + query + '.*$', 'gi');

    // find
    Model.find( { $or:[ { 'number' : regexpField },
                        { 'name' : regexpField }, 
                        { 'groups.name' : regexpField },
                        { 'categories.subcategories.subcategory' : regexpField },
                        { 'categories.subcategories.name' : regexpField },
                        { 'categories.category' : regexpField },
                        { 'categories.name' : regexpField } ] }, function(err, models) {
        if (err) throw err;
        res.send(models);
    });
}