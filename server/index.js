import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); //To use environment variables in your Node.js (Express) app, you import and configure the dotenv package.

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5002;

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    if(conn){
        console.log("MongoDB Connected")
    }else{
        console.log("MongoDB not Connected")
    }
}

const TV_SHOWS = [];

app.get('/health', (req, res)=>{
    res.status(201).json({
        success: true,
        message: "server is running"
    })
})

app.get('/tvshows', (req, res) => {
    res.status(201).json({
        success: true,
        data: TV_SHOWS,
        message: "All shows fetched successfully"
    })
})

app.post('/addshows', (req, res) => {
    const {title, channel, timing, thumbnail} = req.body;

    const newShow = {
        title,
        channel,
        timing,
        thumbnail
    }

    TV_SHOWS.push(newShow);

    res.status(201).json({
        success: true,
        data: newShow,
        message: "New show added successfully"
    })

})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
    connectDB();
})