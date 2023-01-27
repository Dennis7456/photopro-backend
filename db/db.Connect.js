const mongoose = require("mongoose");
require('dotenv').config();
mongoose.set('strictQuery', true);

async function dbConnect(){
    mongoose.connect(
        process.env.DB_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        }
    )
    .then(() => {
        console.log("Successfully connected to Mongodb");
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB Atlas!");
        console.log(error);
    })
}

module.exports = dbConnect;