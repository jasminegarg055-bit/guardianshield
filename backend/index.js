const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

const http = require("http");

const { Server } = require("socket.io");


require('dotenv').config()

const app=express()
const PORT=process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI,{
    dbName:"dbguardian"
})
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=> console.error("Connection error:", err))



// ✅ IMPORTANT: create server FIRST
const server = http.createServer(app);

// ✅ socket setup
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// 👉 optional but good
app.set("io", io);

// =======================
// 🔴 SOS LOGIC
// =======================

let sosHistory = [];

// POST SOS
app.post("/sos", (req, res) => {

  const alertData = {
    ...req.body,
    seen: false
  };

  console.log("🚨 SOS RECEIVED:", alertData);

  sosHistory.unshift(alertData);

  console.log("🔥 EMITTING SOS");

  io.emit("newSOS", alertData); 

  res.json({ message: "SOS saved successfully" });
});

// GET HISTORY
app.get("/soshistory", (req, res) => {
  res.json(sosHistory);
});

// =======================
// 🔌 SOCKET CONNECTION
// =======================

io.on("connection", (socket) => {
  console.log("✅ Admin Connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Disconnected:", socket.id);
  });
});

// =======================
// 🚀 START SERVER (ONLY THIS)
// =======================

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



const contactRoute=require('./route/contactRoute')
app.use('/', contactRoute)

const loginRoute=require('./route/loginRoute')
app.use('/',loginRoute)

const blogRoute=require('./route/blogRoute')
app.use('/',blogRoute)

const dashboardRoute=require('./route/dashboardRoute')
app.use('/',dashboardRoute)

const supportRoute=require('./route/supportRoute')
app.use('/',supportRoute)

const volunteerRoute=require('./route/volunteerRoute')
app.use('/',volunteerRoute)

const userloginRoute=require('./route/userloginRoute')
app.use('/api',userloginRoute)

const paymentRoute=require('./route/paymentRoute')
app.use('/api',paymentRoute)

const jobRoute=require('./route/jobRoute')
app.use('/api',jobRoute)








// const bcrypt= require('bcryptjs')

// const plainpassword="123";
// bcrypt.hash(plainpassword,10)
// .then ((hashedpassword)=>{
//     console.log(hashedpassword)
// });