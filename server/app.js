const express = require('express');


const authRouter = require('./routes/authRoute');


const app = express();




//============ By default middleware =================
app.use(express.json());

//============ Routers ===========
app.use('/api/v1/auth/',authRouter);

app.use('/',(req,res)=>{
     res.status(200).json({
        data:'JWTauth server'
     });
})

module.exports = app;