const express=require('express')
const router=express.Router()

const {contactController, getfeedback}=require('../controller/contactController')

router.post('/api/insertcontact',contactController)
router.get('/api/getfeedback',getfeedback)

module.exports=router