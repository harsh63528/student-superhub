import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.mongo.config.js';


const app = express();


app.use(express.json());
app.use(cors());

connectDB();


app.get('/',(req,res)=>{
    res.json({'message':'i am running'})
})

export default app