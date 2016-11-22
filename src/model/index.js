var Mongoose = require('mongoose');
var paginate = require('mongoose-paginate');

var schemaSubcategory = new Mongoose.Schema(
	{
        subcategory : { type: String, required: true, unique: true },
        classfication : { type: String },
        name : { type: String },
        death : { type: String },
        sex : { type: String }
	}
);

var schemaCategory = new Mongoose.Schema(
	{
        category : { type: String, required: true, unique: true },
        classfication : { type: String },
        name : { type: String },
        subcategories: [ schemaSubcategory]
	}
);

var schemaGroup = new Mongoose.Schema(
	{
        begin : { type: String },
        end : { type: String },
        name : { type: String, required: true, unique: true }
	}
);

var schema = new Mongoose.Schema(
	{
        number : { type: String, required: true, unique: true },
        begin : { type: String },
        end : { type: String },
        name : { type: String, required: true, unique: true },
        categories : [ schemaCategory ],
        groups : [ schemaGroup ]
	}
);
schema.plugin(paginate);

/*
* Cria o modelo
*/
module.exports = Mongoose.model('Chapter', schema);