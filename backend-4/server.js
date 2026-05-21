import exp from "express";
import { connect } from "mongoose";
import { empRoute } from "./APIs/empApp.js";
import cors from "cors";

const app = exp();
//add cors middleware
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);
//body parser middleware
app.use(exp.json());
//emp api middleware
app.use("/emp-api", empRoute);

//DB connection
const connectDB = async () => {
  try {
    await connect("mongodb+srv://DSP:DSPreddy39@cluster0.shku5fm.mongodb.net/?appName=Cluster0");
    console.log("DB connected");
    app.listen(9000, () => console.log("server listening on port 9000.."));
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

//error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});






// import exp from 'express'
// import {connect} from 'mongoose'
// import { empApp } from './APIs/empAPIs'
// import cors from 'cors'

// const app=exp();
// //add cors middleware
// app.use(
//     cors({
//         origin:["http://localhost:9000"]
//     })
// )
// //forward req to UserApp if path starts with /user-api
// app.use("/employee-api",empApp)

// const port=process.env.PORT||9000

// //connect to DB server
// async function connectDB(){
//     try{
//         await connect(process.env.DB_URL)
//         console.log("DB connection Successful");
        
//         //start server
//         app.listen(9000,()=>console.log("server on port 9000 ..."))
        
        
//     }catch (err) {
//         console.log("err in DB connection :",err);
        
//     }
// }

// connectDB()


// //error handling middleware
// app.use((err,req,res,next)=>{
//     //validation error
//     if(err.name=="ValidationError"){
//         return res.status(400).json({message:"error occured",error:err.message})
//     }
//     //cast error
//     if(err.name=="CastError"){
//         return res.status(400).json({message:"error occured",error:err.message})
//     }
//     //send server side error
//     res.status(500).json({message:"error occured",error:"Server"})
// })