//create hotels api
import express  ,{Request,Response}from 'express';
import multer from 'multer';
import cloudinary from 'cloudinary'
import Hotel from '../models/hotel';
import { HotelType } from '../shared/types';
import verifyToken from '../middleware/auth';
import { body } from 'express-validator';
const router=express.Router();

const storage=multer.memoryStorage();
const upload= multer({
    storage: storage,
    limits:{
        fileSize: 5 * 1024 * 1024 // 5MB
    }
})

//uplaod.array()-> middleware
// api/my-hotels
router.post("/",
    verifyToken, // only loggedin user cn create hotels
    [
        body("name").notEmpty().withMessage("Name is required"),
        body("city").notEmpty().withMessage("City is required"),
        body("country").notEmpty().withMessage("Country is required"),
        body("description").notEmpty().withMessage("Description is required"),
        body("type").notEmpty().withMessage("Hotel Type is required"),
        body("pricePerNight").notEmpty().isNumeric().withMessage("Price per Night is required and must be Number"),
        body("facilities").notEmpty().isArray().withMessage("Facilities is required")
    ],
    upload.array("imageFiles",6),
    async (req:Request,res: Response)=>{
 try{

    //This code handles the process of uploading images, to create  a new hotel
    const imageFiles=req.files as Express.Multer.File[];// files uploaded by user and handling multiple files
    const newHotel:HotelType= req.body;// other hotel form data

    
    //1. upload images to cloudinary
    const uploadPromises= imageFiles.map(async(image)=>{
        const b64= Buffer.from(image.buffer).toString("base64")//encoding in base64
        let dataURI= "data:"+image.mimetype+ ";base64,"+ b64;//craete a string that describe image encoded as base64 image
        const res=await cloudinary.v2.uploader.upload(dataURI);// cloudinary sdk to upload images
        return res.url;
    })
    const imageUrls= await Promise.all(uploadPromises);// resolevs url of uploaded images
// wait for all images upload promises to resolve and collects the resulting urls into 'imageurls' arrat
    //2. if upload was successfull , add the urls to new hotel
    newHotel.imageUrls=imageUrls;
    newHotel.lastUpdated= new Date();
    newHotel.userId= req.userId;

    //3. save the new hotel in the database
    const hotel= new Hotel(newHotel);
    await hotel.save();
    //4. return a 201 status
    res.status(201).send(hotel);
 }
 catch(e){
    console.log("Error creating hotel:",e);
    res.status(500).json({message:"Something went wrong"})
 }
})

//my hotels
router.get("/",verifyToken,async(req:Request,res:Response)=>{
    
    try {
        const hotels= await Hotel.find({userId: req.userId})
        res.json(hotels);
    } catch (error) {
        res.status(500).json({message:"Error fetching hotels"})
    }
})

export default router;