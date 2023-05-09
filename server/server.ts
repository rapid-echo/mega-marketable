import express, {
  Express,
  Request,
  Response,
  NextFunction,
  ErrorRequestHandler,
  Router,
} from 'express';

import { GlobalErrorType } from './types.js';
import path from 'path';
import cookieParser from 'cookie-parser';

import {
  signUp,
  logIn,
  logOut,
  getData,
  updateData,
} from './controllers/userController.js';
import {
  getCard,
  makeCard,
  checkAnswer,
  deleteCard,
  updateCard,
} from './controllers/cardsController.js';
const port = 3000;
const app: Express = express();

//body parser
app.use(express.json());

//cookie parser
app.use(cookieParser());

//custom endpoint per user (authorization / deletion)
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../views/index.html'));
});

const router: Router = express.Router();

app.use('/api', router);

//Middleware from userController
router.post('/signup', signUp, (req: Request, res: Response) => {
  res.status(200).json(res.locals);
});

router.post('/login', logIn, (req: Request, res: Response) => {
  res.status(200).redirect('/homePage');
});

router.get('/logout', logOut);

router.get('/userdatastreak', getData);

router.put('/updateuserdata', updateData);

//Middleware from Data/flashcards controller
router.get('/flashcards', getCard);

router.post('/makeflashcards', makeCard);

router.get('/checkanswer', checkAnswer);

router.delete('/deleteflashcard', deleteCard);

router.put('/updateflashcard', updateCard);

//Handle invalid endpoints
app.use((req: Request, res: Response) => res.sendStatus(404));

//Global Error Handler
app.use(
  (
    err: ErrorRequestHandler,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const defaultErr: GlobalErrorType = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj: GlobalErrorType = Object.assign({}, defaultErr, err);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;
