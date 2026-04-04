import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.mongo.config.js';
import userRoutes from './modules/user/user.routes.js';
import cookieParser from 'cookie-parser';

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api/users', userRoutes);

connectDB();


app.get('/',(req,res)=>{
    res.json({'message':'i am running'})
})

app.get('/test', (req,res)=>{

})

export default app