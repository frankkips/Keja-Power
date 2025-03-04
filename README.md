### 📌 Token Loader
An SMS-based electricity token loading system that allows users to top up electricity units via two-way SMS and get real-time updates on their balance.

### 📜 Features
✅ Load electricity tokens via two-way SMS\
✅ Store and update unit balance in MongoDB\
✅ Real-time unit updates on a web interface\
✅ Actuator support to input the token automatically\
✅ Secure integration with Africa's Talking API

### 🛠️ Tech Stack
**Backend**: Node.js, Express.js\
**Database**: MongoDB\
**Messaging**: Africa's Talking SMS API\
**Frontend**: React
### 📂 Project Structure
```bash
📦 Keja Power
├── 📂 backend
│   ├── 📜 server.js           # Main backend server
│   ├── 📜 messages.js         # MongoDB connection
│   ├── 📜 sendSMS.js       # Africa's Talking SMS processing
│   ├── 📜 tokenLoader.js      # Token management logic
│   ├── 📜 .env                # API keys & environment variables
│   └── 📜 package.json        # Dependencies & scripts
└── 📂 frontend
    ├── 📜 index.html          # Web interface
    ├── 📜 app.js              # Displays live unit updates
```
## 🚀 Getting Started
### 1️⃣ Clone the Repository
```sh

git clone https://github.com/frankkips/Keja-Power.git
cd keja-power
```
### 2️⃣ Install Dependencies
```sh
npm install
```
### 3️⃣ Set Up Environment Variables
Create a .env file in the backend folder and add:

```ini
PORT=3001
MONGO_URI=mongodb+srv://your-db-uri
API_KEY=your-africas-talking-api-key
USERNAME=your-africas-talking-username
```
### 4️⃣ Start the Server
```sh
node server.js
```
or (if using Nodemon)

```sh
npm start
```
### 📡 API Endpoints
### 💰 Load Tokens
POST `/topup`

Request Body

```json
{
  "phone": "+254712345678",
  "amount": 500
}
```
Response:
```json
{
  "success": true,
  "phone": "+254712345678",
  "units": 20
}
```
### 📥 Receive Token Code (from SMS)
POST `/token`

Africa's Talking will send an SMS request containing the token.

### 🛠️ How It Works
1. A user sends an SMS with the amount to buy tokens.
2. The system calculates the units based on the amount.
3. A token code is sent to the user via SMS.
4. The system auto-loads the token using an actuator.
5. The new balance is updated in real time.
### 🔌 Future Improvements
1. Add payment integration (e.g., M-Pesa, Stripe)
2. Build a mobile app for better UI
3. Improve security & logging

### 👨‍💻 Contributing
Got an idea? Create a pull request or open an issue! 🎉