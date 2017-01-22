var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    group_id : {type : Number, required: true, unique : true},
    password : {type : String, default: null, minlength : 6},
    project : {type : String , default : null}
});

module.exports = mongoose.model('User', schema);