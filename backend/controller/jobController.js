const jobModel=require('../model/jobModel')

const addJob=async(request, response)=>{
    console.log(request.body)
    const {name,email,phone, job}=request.body;
    if(!name || !email || !phone || !job)
    {
        console.log('Fill required fields')
        return response.status(400).json({'message':"All fields are required"})
    }

    try
    {
        const jobdata=new jobModel(request.body)
        await jobdata.save()
        return response.status(201).json({'message':'Job Apply'})
    }
    catch(error)
    {
        console.log(error)
        return response.status(500).json({'message':'Error'})
    }
}


// GET SUPPORT
const getJob=async(req, res)=>{
    try{
        const jobdata=await jobModel.find()
        res.status(200).json(jobdata)
    }
    catch(err)
    {
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

module.exports={addJob, getJob}