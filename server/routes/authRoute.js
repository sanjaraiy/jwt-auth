const express = require('express');
const  {signupHandler,signinHandler} = require('../controllers/authController');

const router = express.Router();

router.post('/signup',signupHandler);
router.post('/signin',signinHandler);


module.exports = router;