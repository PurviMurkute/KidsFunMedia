import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5002;

app.get('/health', (req, res)=>{
    res.status(201).json({
        success: true,
        message: "server is running"
    })
})

app.post('/addmedia', (req, res) => {
    const {name, } = req.body
})

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`)
})