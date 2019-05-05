const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var user = new Schema({
    name: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    contacts: [{name:String,phone:String}],

})
module.exports.users = mongoose.model('users', user);