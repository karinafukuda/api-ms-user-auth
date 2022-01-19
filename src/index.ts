import express from 'express'; //gerenciador de rotas
import errorHandler from './middlewares/error-handler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';

const app = express();

//Config. da Aplicação
app.use(express.json()); //middleware responsável por interpretar o content-type e convertê-lo
app.use(express.urlencoded({ extended: true }));

//Config. Rotas
app.use(usersRoute);
app.use(statusRoute);

//Config. dos Handlers de Erros
app.use(errorHandler);

//Inicialização do Servidor
app.listen(3002, () => {
  console.log('aplicação escutando na porta 3002.');
});
