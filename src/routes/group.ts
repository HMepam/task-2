import express from 'express';
import { groupHandler } from '../handlers/group';

export const GroupRoutes = () => {
  const router = express.Router();
  router.get('/all', groupHandler.getAllGroup);
  router.get('/:id', groupHandler.getGroup);
  router.post('/create', groupHandler.createGroup);
  router.put('/update', groupHandler.updateGroup);
  router.put('/addUsersToGroup', groupHandler.addUsersToGroup);
  router.delete('/delete/:id', groupHandler.deleteGroup);
  return router;
};
