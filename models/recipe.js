var mongoose = require ('mongoose')
    Schema       = mongoose.Schema;

    
/// schema /////
var dinnerSchema = new Schema({
    recipe: {type: String},
    ingredients: {type: String},
  });

var Dinner = mongoose.model('Dinner', dinnerSchema);

module.exports = Dinner;
