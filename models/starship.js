var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StarshipSchema = new Schema(
  {
    name: {type: String, required: true},
    shiptype: {type: String, required: true},
    shipclass: {type: String, required: true},
    description: String,
    crew: Number,
    passenger: Number,
    length: Number,
    manufacturer: String,
    cost: Number
  }
);

module.exports = mongoose.model('Starship', StarshipSchema);

