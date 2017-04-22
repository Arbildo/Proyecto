var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cancionSchema = new Schema({
  idplaylist:{ type: Schema.Types.ObjectId, ref:'playlist'} ,
    nombre: { type: String, required: true },
    autor: { type: String, required: true },
    tags: {type: String},
    url:{type: String, required:true}

});
module.exports = mongoose.model('cancion', cancionSchema);
