import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import JWT, { SignOptions } from 'jsonwebtoken';
import basicAuthenticatiopnMiddleware from '../middlewares/basic-authentication.middleware';
import jwtAuthenticationMiddleware from '../middlewares/jwt-authentication.middleware';
import ForbiddenError from '../models/errors/forbidden.error.model';

const authorizationRoute = Router();

authorizationRoute.post(
  '/token',
  basicAuthenticatiopnMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;

      if (!user) {
        throw new ForbiddenError('Usuário não informado');
      }
      const jwtPayload = { username: user.username };
      const jwtOptions: SignOptions = {
        subject: user?.uuid,
        expiresIn: '15m',
      };
      const secretKey = 'my_secret_key';

      const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

      res.status(StatusCodes.OK).json({ token: jwt });
    } catch (error) {
      next(error);
    }
  }
);

authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware),
  (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(StatusCodes.OK);
  };

export default authorizationRoute;
