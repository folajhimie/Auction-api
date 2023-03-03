const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./database/connect')
const configData = require('./config/config');
// const { default: authRouter } = require('./routes/Auth/authRoutes');

const authRouter = require('./routes/Auth/authRoutes')
const {PORT, HOST, MONGODB_URI, ASSET_URL} = configData

const app = express();
// const router = express.Router()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

app.use('/auth', authRouter)
app.use("/", (req, res) => {
    // console.log("Cashing out when you have money....");
    res.status(200).send("<h1>Welcome to Auction. An Auction Site for Gamblers...🚗</h1>");
});

const start = async() => {
    try{
        await connectDB();
        console.log('DB connected successfully...')
        app.listen(PORT, ()=> {
            console.log(`connected to db & listening on port ${PORT} and ${ASSET_URL}`); 
        })
    }catch(error){
        console.log("error has occured", error.message);
    }
}


start();
  


