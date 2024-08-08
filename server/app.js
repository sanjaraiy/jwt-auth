const express = require('express');
const cookieParser = require('cookie-parser');

const authRouter = require('./routes/authRoute');


const app = express();




//============ By default middleware =================
app.use(express.json());
app.use(cookieParser());

//============ Routers ===========
app.use('/api/v1/auth/',authRouter);

app.use('/',(req,res)=>{
     res.status(200).json({
        data:'JWTauth server'
     });
})

module.exports = app;