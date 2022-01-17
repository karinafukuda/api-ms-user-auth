import express, { Request, Response, NextFunction } from 'express'; //gerenciador de rotas
import usersRoute from './routes/users.route';

const app = express();

app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'teste' });
});

app.listen(3002, () => {
  console.log('aplicação escutando na porta 3002.');
});
