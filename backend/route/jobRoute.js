const express=require('express')
const router=express.Router()

const {addJob, getJob}=require('../controller/jobController')

// save data
router.post('/insertjob',addJob);

// fetch data
router.get('/getjob',getJob);

module.exports=router