const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(express.json());
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
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});