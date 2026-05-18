const mongoose = require('mongoose')

const volunteerSchema = mongoose.Schema(
    {
        firstname:{type:String, required:true},
        secname:{type:String},
        gender:{type:String, required:true},
        dob:{type:Date, required:true},
        address:{type:String, required:true},
        country:{type:String, required:true},
        state:{type:String, required:true},
        city:{type:String, required:true},
        zip:{type:String, required:true},
        email:{type:String, required:true},
        phone:{type:String, required:true},
        availiability:{type:String, required:true},
        skills:{type:String, required:true},
        experience:{type:String},
        createdAt:{type:Date, default:Date.now}
    }
)

const volunteerModel = new mongoose.model("Volunteer", volunteerSchema)

module.exports= volunteerModel