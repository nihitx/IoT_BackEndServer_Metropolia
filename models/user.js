var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    group_id : {type : Number, required: true},
    password : {type : String, default: null},
    project : {type : String , default : null}
});

module.exports = mongoose.model('User', schema);