const blogModel=require('../model/blogModel')
const contactModel=require('../model/contactModel')
const userModel = require('../model/userModel')
const supportModel=require('../model/supportModel')
const volunteerModel = require('../model/volunteerModel')
const jobModel = require('../model/jobModel')
const paymentModel = require('../model/paymentModel')

const getcount=async(req, res)=>{

    try
    {
        const blogCount= await blogModel.countDocuments()
        const contactCount= await contactModel.countDocuments()
        const userCount= await userModel.countDocuments()
        const supportCount= await supportModel.countDocuments()
        const volunteerCount= await volunteerModel.countDocuments()
        const jobCount= await jobModel.countDocuments()
        const donationCount= await paymentModel.countDocuments()
        
        res.status(201).json({
            blogCount, contactCount,userCount,supportCount,volunteerCount,jobCount,donationCount
        })
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json({'message':'Error'})
    }
}

module.exports=getcount