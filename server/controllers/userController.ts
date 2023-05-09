import { Express, Request, Response, NextFunction } from 'express';
import { ReqUserInfo } from '../types.js';

const signUp = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body as ReqUserInfo;
    if (!username.length || !password.length) {
      return next({
        log: 'Requires all fields',
        status: 500,
        message: { err: 'Requires all fields' },
      });
    }
    //query the database to make a user
    return next();
  } catch (err) {
    return next({
      log: 'Error in userController signUp middleware.',
      status: 500,
      message: err,
    });
  }
};

const logIn = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body as ReqUserInfo;
    //query the database to find a user
    return next();
  } catch (err) {
    return next({
      log: 'Error in userContrroller logIn middleware',
      status: 500,
      message: err,
    });
  }
};

const logOut = (req: Request, res: Response, next: NextFunction) => {};

const getData = (req: Request, res: Response, next: NextFunction) => {};

const updateData = (req: Request, res: Response, next: NextFunction) => {};

export { signUp, logIn, logOut, getData, updateData };
