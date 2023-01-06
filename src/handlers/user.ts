import { Request, Response, NextFunction } from 'express';
import { userService } from '../services/user';

class UserHandler {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await userService.login(req.body.login, req.body.password);
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  }

  async getSuggestedUser(req: Request, res: Response, next: NextFunction) {
    try {
      const limit = (req.query?.limit && +req.query.limit) || 3;
      const data = await userService.getAutoSuggestUsers(
        req.params.login,
        limit
      );
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await userService.getUser(req.params.id);
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await userService.createUser(req.body);
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await userService.updateUser(req.body);
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  }

  async softDeleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      await userService.softDeleteUser(req.params.id);
      res.status(200).end();
    } catch (err) {
      next(err);
    }
  }
}

export const userHandler = new UserHandler();
