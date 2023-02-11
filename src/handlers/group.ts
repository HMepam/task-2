import { Request, Response, NextFunction } from 'express';
import { groupService } from '../services/group';

class GroupHandler {
  async getAllGroup(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await groupService.getAllGroup();
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  }

  async getGroup(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await groupService.getGroup(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  }

  async createGroup(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await groupService.createGroup(req.body);
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  }

  async updateGroup(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await groupService.updateGroup(req.body);
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  }

  async addUsersToGroup(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await groupService.addUsersToGroup(req.body);
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  }

  async deleteGroup(req: Request, res: Response, next: NextFunction) {
    try {
      await groupService.deleteGroup(req.params.id);
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  }
}

export const groupHandler = new GroupHandler();
