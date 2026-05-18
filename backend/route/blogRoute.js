const express=require('express')
const router=express.Router()

const {blogController, getblog, deleteblog, getblogbyid, updateblog}=require('../controller/blogController')

router.post('/api/insertblog',blogController)
router.get('/api/getblog',getblog)
router.get('/api/getblogbyid/:id',getblogbyid)
router.delete('/api/deleteblog/:blogid',deleteblog)
router.put('/api/updateblog/:editid',updateblog)

module.exports=router