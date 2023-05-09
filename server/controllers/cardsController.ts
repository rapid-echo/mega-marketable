//post request to make a card
//question: string
//answer: string
import { Express, Request, Response, NextFunction } from 'express';
//when we destructure the req.body, we can also check if the values of the pairs are strings
import {} from '../types.js';

const getRandomCard = (req: Request, res: Response, next: NextFunction) => {
  try {
    const randomIndex = Math.floor(Math.random(0, 1) * 10);
  } catch {}
};

const getNextCard = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch {}
};

const getPrevCard = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch {}
};

const makeCard = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch {}
};

const checkAnswer = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch {}
};

const deleteCard = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch {}
};

const updateCard = (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch {}
};
