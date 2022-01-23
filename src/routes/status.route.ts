import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const statusRoute = Router();

//GET/ status
statusRoute.get(
  '/status',
  (req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(StatusCodes.OK);
    } catch (error) {
      next(error);
    }
  }
);

export default statusRoute;
