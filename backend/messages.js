const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    phone:String,
    units:Number,
})

const UserModel = mongoose.model("messages", UserSchema)
module.exports = UserModel