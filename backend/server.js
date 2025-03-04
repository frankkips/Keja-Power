const express = require("express");
// const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('mongoose')
const UserModel = require('./messages')
const sendSMS = require('./sendSMS');



const app = express();
app.use(express.json());
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));
// app.use(cors());

// Connect MongoDb
// mongoose.connect('mongodb://localhost:2717/user')

// mongoose.connection.on('connected', () => {
//     console.log('Connected to MongoDB');
// });

// mongoose.connection.on('error', (err) => {
//     console.error('MongoDB connection error:', err);
// });

// mongoose.connection.on('disconnected', () => {
//     console.log('Disconnected from MongoDB');
// });


app.post('/incoming-messages', (req, res) => {
    const data = req.body;
    console.log(`Received message: \n ${JSON.stringify(data, null, 2)}`);
    res.sendStatus(200);
});

app.post('/delivery-reports', (req, res) => {
    const data = req.body;
    console.log(`Delivered message: \n ${JSON.stringify(data, null, 2)}`);
    res.sendStatus(200);
    // return JSON.stringify(data, null, 2)
});


// // Endpoints
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

    return json({message: "Oyah Rada"})
})







app.listen(3001, () => {
    console.log("Server is running")
    sendSMS();
})