import express from 'express'; //gerenciador de rotas
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication.middleware';
import errorHandler from './middlewares/error-handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//Config. da Aplicação
app.use(express.json()); //middleware responsável por interpretar o content-type e convertê-lo
app.use(express.urlencoded({ extended: true }));

//Config. Rotas
app.use(statusRoute);
app.use(authorizationRoute);
app.use(jwtAuthenticationMiddleware);
app.use(usersRoute);

//Config. dos Handlers de Erros
app.use(errorHandler);

//Inicialização do Servidor
app.listen(3000, () => {
  console.log('aplicação escutando na porta 3000.');
});
