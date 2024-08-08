const express = require('express');
const  {signupHandler, signinHandler, getUserHandler, logoutHandler} = require('../controllers/authController');
const jwtAuth = require('../middlewares/jwtAuth');

const router = express.Router();

router.post('/signup',signupHandler);
router.post('/signin',signinHandler);
router.get('/user', jwtAuth, getUserHandler);
router.get('/logout',jwtAuth, logoutHandler);


module.exports = router;