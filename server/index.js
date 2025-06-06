import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); //To use environment variables in your Node.js (Express) app, you import and configure the dotenv package.

import { getTvShow, postTvShow, getTvShowsById, deleteTvShowbyId } from './controllers/tvshow.js';

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

app.get('/health', (req, res)=>{
    res.status(201).json({
        success: true,
        message: "server is running"
    })
})

app.get('/tvshows', getTvShow)
app.post('/addshows', postTvShow)
app.get('/tvshow/:id', getTvShowsById)
app.delete('/tvshow/:id', deleteTvShowbyId)

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
    connectDB();
})