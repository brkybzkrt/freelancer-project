const express = require('express');
const { getMainPage } = require('../controllers/pageController');


const router=express.Router();


router.route('/').get(getMainPage)



module.exports =router;