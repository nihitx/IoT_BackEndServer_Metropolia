var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required : true},
    name :{type : String , required : true} ,
    description : {type : String, required : true},
    sensorStatus : {type : Boolean , default : 0},
    properties : {type : Object, default : null},
    readings : {type : Object , default : null},
    timeStamp  : {type :String , required : true}

});



module.exports = mongoose.model('Data', schema);