const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connect MongoDB: ', db.connection.host, db.connection.port);
    } catch (error) {
         console.log('Error: ', error.message);
         
    }
}

module.exports = dbConnect;