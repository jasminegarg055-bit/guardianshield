const express=require('express')
const router=express.Router()

const {addSupport, getSupport}=require('../controller/supportController')

// save data
router.post('/api/insertsupport',addSupport);

// fetch data
router.get('/api/getsupport',getSupport);

module.exports=router