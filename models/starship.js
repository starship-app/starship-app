var mongoose = require('mongoose');

var Schema = mongoose.Scheme;

var StarshipSchema = new Schema(
  {
    
    name: {type: String, required: true}
    /*
    author: {type: Schema.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.ObjectId, ref: 'Genre'}]
    */
  }
);



