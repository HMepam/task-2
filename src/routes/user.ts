import express from 'express';
import { userHandler } from '../handlers/user';
import { authUser, checkUserData } from '../helpers';

export const UserRoutes = () => {
  const router = express.Router();
  router.post('/login', userHandler.login);
  router.get('/suggested/:login', authUser, userHandler.getSuggestedUser);
  router.get('/:id', authUser, userHandler.getUser);
  router.post('/register', checkUserData, userHandler.createUser);
  router.put('/update', authUser, checkUserData, userHandler.updateUser);
  router.delete('/delete/:id', authUser, userHandler.softDeleteUser);

  return router;
};
