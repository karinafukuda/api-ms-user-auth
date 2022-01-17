import { Router, Request, Response, NextFunction } from 'express';

const usersRoute = Router();

//get/users
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Karina' }];
  res.status(200).send(users);
});

export default usersRoute;
