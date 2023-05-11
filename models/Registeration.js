const mongoose = require('mongoose')

const signup = new mongoose.Schema({
    name:{
        type:String,
        required:[false]
    },
    email:{
        type:String,
        required:[true]
    },
    mobileNumber:{
        type: Number ,
        required:[false]
    },
    password:{
        type:String,
        required:[true]
    },
   
})

module.exports = mongoose.model('Signup', signup)