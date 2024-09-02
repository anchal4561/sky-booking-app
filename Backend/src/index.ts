import express,{Request,Response} from 'express';
import cors from 'cors';
import "dotenv/config";
import mongoose from 'mongoose';//interact with database with queries
import userRoutes from "./routes/users";
import authRoutes from "./routes/auth";
import myHotelRoutes from "./routes/my-hotels"
import cookieParser from "cookie-parser"
import path from 'path';
import {v2 as cloudinary} from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret:  process.env.CLOUDINARY_API_SECRET
})
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


app.use(express.static(path.join(__dirname,"../../Frontend/dist")));

app.use("/api/auth",authRoutes)

app.use("/api/users",userRoutes);
app.use("/api/my-hotels",myHotelRoutes);


app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../../Frontend/dist/index.html"));
});
//port 7000
app.listen(7000,async()=>{
    console.log("server is running........on 7000")
})