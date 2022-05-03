import express from "express";
import authRouter from "./routers/authRouter.js";
import mongoose from "mongoose";
import cors from 'cors';
import 'dotenv/config'
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api', authRouter)

const PORT = process.env.PORT || 3030;


mongoose.connect(process.env.DB)
    .then(() => app.listen(PORT, () => console.log('Server started on port: ' + PORT +
        '\n' +
        'DB connected')))
    .catch((e) => {
        console.log(e.message)
    });
