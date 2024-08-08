const app = require('./app');
const env = require('dotenv');
const dbConnect = require('./config/dbConnection');
env.config();
const PORT = process.env.PORT || 5000;

//================= Db Connection ====================
dbConnect();


app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT}`);
})
