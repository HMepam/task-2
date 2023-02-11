import { Application } from 'express';
import { UserRoutes } from './user';
import { GroupRoutes } from './group';

export const Routes = (app: Application) => {
  app.use('/api/user', UserRoutes());
  app.use('/api/group', GroupRoutes());
};
