import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

import leadRoutes from './routes/leadRoutes.js';
import interactionRoutes from './routes/interactionRoutes.js';
import restaurantRoutes from './routes/restaurantRoutes.js';
import performanceRoutes from './routes/performanceRoutes.js';

import authRoutes from './routes/authRoutes.js';

dotenv.config();

if (!process.env.JWT_SECRET || !process.env.MONGO_URI) {
    console.error('Error: Missing required environment variables.');
    process.exit(1);
}

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend's origin
}));
// Connect Database
connectDB();

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to Key Account Manager (KAM) Lead Management System. I am Saurav Kumar Lal and happy to say that API is running... :)');
});

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/interactions', interactionRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/performance', performanceRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
