import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();

import { Routes } from './routes';
import { sequelizeConnection } from './db';
import dbInit from './db/init';

const startServer = () => {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(cors());
  Routes(app);

  (async () => {
    dbInit();
    await sequelizeConnection.sync({ force: true });

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })();
};

startServer();
