import express,{Request,Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';//interact with database with queries
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import cookieParser from "cookie-parser"
import exp from 'constants';
import path from 'path';
const connectDB=async()=>{
  await mongoose.connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
}

connectDB();
    

const app=express();
app.use(cookieParser())
app.use(express.json());// convert the body of api to json
app.use(express.urlencoded({extended:true}));// parse url to get the create params
app.use(cors({
  origin:(process.env.FRONTEND_URL as string),
  credentials:true,
}));

//endpoint
// app.get("/api/test", async(req:Request,res:Response)=>{
//     res.json({message:"hello from express"});
// });


app.use(express.static(path.join(__dirname,"../../frontend/dist")));

app.use("/api/auth",authRoutes)

app.use("/api/users",userRoutes)

//port 7000
app.listen(7000,async()=>{
    console.log("server is running........on 7000")
})