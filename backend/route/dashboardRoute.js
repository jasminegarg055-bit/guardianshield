const express=require('express')
const router=express.Router()

const dashboardController=require('../controller/dashboardController')


router.get('/api/getcount',dashboardController)

module.exports=router