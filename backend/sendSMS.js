require('dotenv').config();
const AfricasTalking = require('africastalking')
const apikiy = process.env.API_KEY 

const africastalking = AfricasTalking({
    apiKey: apikiy, 
    username: 'sandbox'
});

module.exports = async function sendSMS() {
    
    // TODO: Send message
    try {
    const result=await africastalking.SMS.send({

        to: ['+254768474548'], 
        message: 'Hola frankkips!',
        from: 'KIPSCORP'
    });
    console.log(result);
    } catch(ex) {
    console.error(ex);
} 

}