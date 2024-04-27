require('dotenv').config(); //require dotenv

const mongoose = require('mongoose'); //require mongoose
const DB_URL = process.env.DB_URL; //require url

//connect to database
const connectToDb = async () => {
    await mongoose.connect(DB_URL);
    console.log('konnekted to kluster');
}

//export
module.exports = connectToDb;