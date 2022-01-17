import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

//GET/users
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ userName: 'Karina' }];
  res.status(StatusCodes.OK).send(users);
});

//GET/users/:uuid
usersRoute.get(
  '/users/:uuid',
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
  }
);

//POST/users
usersRoute.post(
  './users',
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const newUser = req.body;
    res.status(StatusCodes.CREATED).send(newUser);
  }
);

//PUT/users/:uuid
usersRoute.put(
  './users/uuid',
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;
    res.status(StatusCodes.OK).send({ modifiedUser });
  }
);

//DELETE/ users/:uuid
usersRoute.delete(
  './users/uuid',
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK);
  }
);

export default usersRoute;
