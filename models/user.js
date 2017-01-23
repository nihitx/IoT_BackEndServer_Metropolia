var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    group_id : {type : Number, required: true, unique : true},
    password : {type : String, default: null, minlength : 6},
    project_name : {type : String , default : null},
    authors : {type : Object, required : true }
});

// authors [] and name

module.exports = mongoose.model('User', schema);