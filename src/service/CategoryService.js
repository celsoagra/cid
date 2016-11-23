var Model   = require('../model');

/**
 * Send all categories
 */
module.exports.findAll = function(req, res) {
    Model.find({}, function(err, models) {
        if (err) throw err;
        var filtered = []
        if (models) {
          models.forEach(function(model) {
              filtered = filtered.concat(model.categories);
          });

        }

        res.send(filtered);
    });
}

/**
 * Filter considering categories
 */
module.exports.findFiltered = function(req, res, query) {
    var regexpField = new RegExp('^.*' + query + '.*$', 'gi');

    // filter by subcategory
    function findByFilterSubcategories(value) {
      var subcategory = value.subcategory.toLowerCase();
      var name = value.name.toLowerCase();
      return subcategory.search(query) != -1 || name.search(query) != -1;
    }

    // filter by category
    function findByFilter(value) {
      var category = value.category.toLowerCase();
      var name = value.name.toLowerCase();
      return category.search(query) != -1 || 
                name.search(query) != -1 || 
                value.subcategories.filter(findByFilterSubcategories).length > 0 ;
    }

    // find
    Model.find( { $or:[ { 'categories.category' : regexpField },
                        { 'categories.name' : regexpField },
                        { 'categories.subcategories.subcategory' : regexpField },
                        { 'categories.subcategories.name' : regexpField } ] }, function(err, models) {
        if (err) throw err;
        var filtered = []
        if (models) {
          models.forEach(function(model) {
              filtered = filtered.concat(model.categories.filter(findByFilter) );
          });

        }

        res.send(filtered);
    });
}