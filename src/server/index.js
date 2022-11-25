const express =require("express");

const userRoutes=require("./Routes/userRoutes")
const PORT=process.env.PORT||8080;
require('dotenv').config();
const app=express();
app.use(express.json())

app.use("/user",userRoutes);


app.get("/",(req,res)=>{
res.send("backend started")
})
app.listen(PORT,()=>{
    console.log(`started the server ${PORT}`)
})