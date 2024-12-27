import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("Public"));
app.use(cookieParser());

// Routes import
import userRouter from './routes/user.routes.js';

// Root route to avoid "Cannot GET /"
app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

// Routes declaration
app.use("/api/v1/users", userRouter);
// http://localhost:8000/api/v1/users/register

export { app };
