const express = require("express");
// const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const UserModel = require('./messages')



const app = express();
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// Connect MongoDb
mongoose.connect('mongodb://localhost:2717/user')

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});


// Endpoints
app.post('/topup', async(req,res) => {
        const { phone , amount } = req.body

        const unitPrice = 25
        const units = amount / unitPrice

        let user = await UserModel.findOne({phone})
        if (!user){
            UserModel.create({phone,units})
            res.json({message: 'Confirmed you have recharged:', units: units})
        }else{
            user = await UserModel.updateOne({phone: phone},{
                $set: {
                    units: units
                }
            })
            res.json({message: "User Already there, updated units to" , units: units})
        }
})

app.get('/tokens', async(req,res) => {

    
})







app.listen(3001, () => {
    console.log("Server is running")
})