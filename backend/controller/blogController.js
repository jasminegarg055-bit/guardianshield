const blogModel=require('../model/blogModel')

const blogController=async(request, response)=>{
    console.log(request.body)
    const {title_en, title_hi, category}=request.body;
    if(!title_en || !title_hi || !category)
    {
        console.log('Fill required fields')
        return response.status(400).json({'message':"All fields are required"})
    }

    try
    {
        const blogdata=new blogModel(request.body)
        await blogdata.save()
        return response.status(201).json({'message':'Blog Added'})
    }
    catch(error)
    {
        console.log(error)
        return response.status(500).json({'message':'Error'})
    }
}



const getblog=async(req, res)=>{
    try{
        const blogdata=await blogModel.find()
        res.status(200).json(blogdata)
    }
    catch(err)
    {
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

const getblogbyid=async(req, res)=>{
    const {id}=req.params
    try
    {
        const blogdata=await blogModel.findById(id)
        console.log(blogdata)
        res.status(200).json(blogdata)
    }
    catch(err)
    {
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}


const deleteblog=async(req, res)=>{
    const {blogid}=req.params
    try
    {
        const dblog=await blogModel.findByIdAndDelete(blogid)
        if(!dblog)
        
            return res.status(404).json({'message':'Blog Not Found'})
            res.status(200).json({'message':'Blog Deleted'})
        
    }
    catch(err)
    {
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

const updateblog=async(req, res)=>{
    const {editid}=req.params
    try
    {
        const dblog=await blogModel.findByIdAndUpdate(editid, req.body)
        if(!dblog)
        
            return res.status(404).json({'message':'Blog Not Found'})
            res.status(200).json({'message':'Blog Updated'})
        
    }
    catch(err)
    {
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

module.exports={ blogController, getblog, deleteblog, getblogbyid, updateblog }