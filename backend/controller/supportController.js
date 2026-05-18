const supportModel=require('../model/supportModel')

const addSupport=async(request, response)=>{
    console.log(request.body)
    const {name,email,phone,issuetype,description}=request.body;
    if(!name || !email || !phone || !description || !issuetype)
    {
        console.log('Fill required fields')
        return response.status(400).json({'message':"All fields are required"})
    }

    try
    {
        const supportdata=new supportModel(request.body)
        await supportdata.save()
        return response.status(201).json({'message':'Support Request Sent'})
    }
    catch(error)
    {
        console.log(error)
        return response.status(500).json({'message':'Error'})
    }
}


// GET SUPPORT
const getSupport=async(req, res)=>{
    try{
        const supportdata=await supportModel.find()
        res.status(200).json(supportdata)
    }
    catch(err)
    {
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

module.exports={addSupport, getSupport}