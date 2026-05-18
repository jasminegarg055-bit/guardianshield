const { response } = require('express')
const volunteerModel = require('../model/volunteerModel')

const addVolunteer = async(request, response) =>
{
    console.log(request.body)
    const {firstname,secname,gender,dob,address,country,city,state,zip,availiability,skills,email,phone,experience }= request.body;

    if(!firstname || !gender || !dob || !address || !country || !city || !state || !zip || !availiability || !skills || !email || !phone)
    {
        console.log('Fill required fields')
        return response.status(400).json({'message':"All fields are required"})
    }

    try
    {
         const volunteerdata = new volunteerModel(request.body)
         await volunteerdata.save()
         return response.status(201).json({'message':'Volunteer Request Sent'})
    }

    catch(error)
    {
        console.log(error)
        return response.status(500).json({'message':'Error'})
    }
} 


const getVolunteer=async(req, res)=>{
    try{
        const volunteerdata=await volunteerModel.find()
        res.status(200).json(volunteerdata)
    }
    catch(err)
    {
        res.status(500).json({'message':'Error'})
        console.log(err)
    }
}

module.exports={addVolunteer, getVolunteer}