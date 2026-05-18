const mongoose=require('mongoose')

const contactSchema=mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    message:{type:String},
    createdAt:{type:Date, default:Date.now}
})

const contactModel=new mongoose.model("contact", contactSchema)

module.exports=contactModel
