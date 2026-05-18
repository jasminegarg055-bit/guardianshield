const mongoose=require('mongoose')

const jobSchema=mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String},
    job:{type:String},
    createdAt:{type:Date, default:Date.now}
})

const jobModel=new mongoose.model("jobs", jobSchema)

module.exports=jobModel
