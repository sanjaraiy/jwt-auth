const express = require('express');
const  {signupHandler} = require('../controllers/authController');

const router = express.Router();

router.post('/signup',signupHandler);

module.exports = router;