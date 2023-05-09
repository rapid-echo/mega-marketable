import { Express, Request, Response, NextFunction } from 'express';
import { ReqUserInfo } from '../types.js';
const db = require('../postgres');
import bcrypt from 'bcryptjs';

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // console.log('getting here');
    const { username, password } = req.body as ReqUserInfo;
    // console.log(username, 'this username');
    if (!username.length || !password.length) {
      return next({
        log: 'Requires all fields',
        status: 500,
        message: { err: 'Requires all fields' },
      });
    }
    const checkIfUserQuery = 'SELECT username FROM users WHERE username = $1';
    const test = await db.query(
      checkIfUserQuery,
      [username],
      async (err: Error, response: any) => {
        if (response.rowCount > 0) {
          console.log('user found');
          res.locals.match = true;
          return next();
        }

        const bpassword = await bcrypt.hash(password, 10);
        const newUserQuery =
          'INSERT INTO users (username, password) VALUES ($1, $2)';
        const result = await db.query(newUserQuery, [username, bpassword]);
        console.log(result, 'user successfully created');
        return next();
      }
    );
    // console.log(test, 'this is the test');

    //query the database to make a user
  } catch (err) {
    return next({
      log: 'Error in userController signUp middleware.',
      status: 500,
      message: err,
    });
  }
};

const logIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body as ReqUserInfo;
    if (username === undefined || password === undefined) {
      return next({
        log: 'Requires all fields',
        status: 500,
        message: { err: 'Requires all fields' },
      });
    }
    //query the database to find a user
    const logInQuery =
      'SELECT username, password FROM users WHERE username = $1';

    const logIn = await db.query(
      logInQuery,
      [username],
      async (err: Error, response: any) => {
        if (response.rowCount > 0) {
          //IF FOUND ENTRY W MATCHING USERNAME
          console.log(response.rows[0].password);
          bcrypt
            .compare(password, response.rows[0].password)
            .then((result: Boolean) => {
              if (!result) {
                return res
                  .status(200)
                  .json({ message: 'Incorrect username and/or password' }); //INCORRECT PASSWORD MESSAGE
              } else {
                res.locals.user = true;
                // console.log('am i in here?');
                return next();
              }
            });
        } else {
          //IF THERE ARE NO ENTRIES WITH MATCHING USERNAME
          return res.status(200).json({ message: 'User does not exist' }); //INCORRECT USERNAME MESSAGE
        }
      }
    );
    // return next();
  } catch (err) {
    return next({
      log: 'Error in userContrroller logIn middleware',
      status: 500,
      message: err,
    });
  }
};

export { signUp, logIn };
