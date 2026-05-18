const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
    title_en:{type:String, required:true},
    title_hi:{type:String, required:true},
    category:{type:String, required:true},
    postby:{type:String},
    description_en:{type:String},
    description_hi:{type:String},
    photo:{type:String},
    photopath:{type:String},
    poston:{type:Date, default:Date.now},
    author:{type:String},
    readtime:{type:String}
})

const blogModel=new mongoose.model("blog", blogSchema)

module.exports=blogModel
