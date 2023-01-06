import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();

import connectDB from './db';
import { Routes } from './routes';

const startServer = () => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(cors());
  Routes(app);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
  connectDB();
};

startServer();
