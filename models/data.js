var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required : true},
    value :{type : Number , required : true} ,
    valueString : {type : String, required : true},
    sensorStatus : {type : Boolean , default : 0},
    timeStamp  : {type :String , required : true}

});

module.exports = mongoose.model('Data', schema);