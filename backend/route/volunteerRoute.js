const express = require('express')
const router = express.Router()

const {addVolunteer, getVolunteer} = require('../controller/volunteerController')

router.post('/api/insertvolunteer', addVolunteer);
router.get('/api/getvolunteer', getVolunteer);

module.exports=router