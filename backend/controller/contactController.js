const contactModel=require('../model/contactModel')

const contactController=async(request, response)=>{
    console.log(request.body)
    const {name,email,message}=request.body;
    if(!name || !email)
    {
        console.log('Fill required fields')
        return response.status(400).json({'message':"All fields are required"})
    }

    try
    {
        const contactdata=new contactModel(request.body)
        await contactdata.save()
        return response.status(201).json({'message':'Message Sent'})
    }
    catch(error)
    {
        console.log(error)
        return response.status(500).json({'message':'Error'})
    }
}


// feedback
const getfeedback=async(req, res)=>{
    try{
        const contactdata=await contactModel.find()
        res.status(200).json(contactdata)
    }
    catch(err)
    {
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

module.exports={contactController, getfeedback}