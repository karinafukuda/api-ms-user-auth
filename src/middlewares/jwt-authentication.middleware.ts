import { NextFunction, Request, Response } from 'express';
import ForbiddenError from '../models/errors/forbidden.error.model';
import JWT from 'jsonwebtoken';

async function jwtAuthenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
      throw new ForbiddenError('Credenciais não informadas');
    }

    const [authenticationType, token] = authorizationHeader.split(' ');

    if (authenticationType !== 'Bearer' || !token) {
      throw new ForbiddenError('Tipo de authenticação inválida');
    }

    const tokenPayload = JWT.verify(token, 'my_secret_key');

    if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
      throw new ForbiddenError('Token inválido');
    }

    const user = {
      uuid: tokenPayload.sub,
      username: tokenPayload.username,
    };

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

export default jwtAuthenticationMiddleware;
