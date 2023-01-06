import { NextFunction, Request, Response } from 'express';
import { validateUser } from '../validation/user';

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  /*
   * It has to be a function for checking that the user is signed in
   * need to check token
   * */
  return next();
};

export const checkUserData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { error } = validateUser(req.body);
  if (error) {
    res.status(400).send({
      message: error
    });
  }
  return next();
};
