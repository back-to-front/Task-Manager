import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? [process.env.FRONTEND_URL]
        : ['http://localhost:5173', 'http://localhost:4173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
app.use(express.json());
app.use(rateLimiter);

app.use('/api/notes', notesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server started on: http://localhost:' + PORT);
  });
});
