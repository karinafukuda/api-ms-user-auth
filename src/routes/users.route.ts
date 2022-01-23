import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import userRepository from '../repositories/user.repository';
//OK
const usersRoute = Router();

//GET/users
usersRoute.get(
  '/users',
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers['authorization']);

    const users = await userRepository.findAllUsers();
    res.status(StatusCodes.OK).send(users);
  }
);

//GET/users/:uuid
usersRoute.get(
  '/users/:uuid',
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    try {
      const uuid = req.params.uuid;
      const user = await userRepository.findById(uuid);
      res.status(StatusCodes.OK).send(user);
    } catch (error) {
      next(error);
    }
  }
);

//POST/users
usersRoute.post(
  '/users',
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await userRepository.createUser(newUser);
    res.status(StatusCodes.CREATED).send(uuid);
  }
);

//PUT/users/:uuid
usersRoute.put(
  '/users/:uuid',
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;
    await userRepository.update(modifiedUser);
    res.status(StatusCodes.OK).send();
  }
);

//DELETE/ users/:uuid
usersRoute.delete(
  '/users/:uuid',
  async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.status(StatusCodes.OK);
  }
);

export default usersRoute;
