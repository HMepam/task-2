import { Application } from 'express';
import { UserRoutes } from './user';

export const Routes = (app: Application) => {
  app.use('/api/user', UserRoutes());
};
