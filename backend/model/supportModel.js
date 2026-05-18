const mongoose=require('mongoose')

const supportSchema=mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    issuetype:{type:String},
    phone:{type:String},
    description:{type:String},
    createdAt:{type:Date, default:Date.now}
})

const supportModel=new mongoose.model("support", supportSchema)

module.exports=supportModel
