const express = require("express");
require("dotenv").config();
const connectDB = require('./config/db.js');
const app = express();
const PORT = process.env.PORT;
const noteRoutes = require('./routes/noteRoutes');
app.use(express.json());
connectDB();
app.get('/',(req,res)=>{
    res.json({
        message:"Welcome"
    });
});
app.get('/health',(req,res)=>{
    res.json({
        success: true,
        message: "System health good"
    });
});
app.use("/api/notes",noteRoutes);
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});