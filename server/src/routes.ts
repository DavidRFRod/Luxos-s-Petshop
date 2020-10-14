//Rota: Endereço completo da requisição;
//Recurso: Qual entidade estamos acessando no sistema;

//GET: Buscar uma ou mais informações do back-end;
//POST: Criar uma nova informação no back-end;
//PUT: Atualizar uma informação existente no back-end;
//DELETE: Remover uma informação do back-end;

//Request Params: Parametros que vem na propria rota que identificam o recurso
//Query Param: Parametros que vem na propria rota, geralmente opcionanis para filtos de busca e paginação
//Request Body: Parametros para criação e atualização de informações
// const users = [
//     'David',
//     'Lucas'
// ]

// app.get('/users', (request,response) => {
//     const search = String(request.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)): users;
//     response.json(filteredUsers);
// });

// app.get('/users/:id', (request, response) =>{
//     const id = Number(request.params.id);

//     const user = users[id];
    
//     return response.json(user);
// });

// app.post('/users', (request, response)=>{
//     const data = request.body;

//     console.log(data);

//     const user = {
//         name: data.name,
//         cpf: data.cpf,
//         whatsapp: data.whatsapp,
//         cidade: data.cidade,
//         bairro: data.bairro,
//         rua: data.rua,
//         numero: data.numero,
//         complemento: data.complemento
//     };
//     return response.json (user);
// });
import express from 'express';
import ClientsController from './controllers/ClientsController';
import AdressController from './controllers/AdressController';
import ServicesController from './controllers/ServicesController';
import UsersController from './controllers/UsersController';
import PetsController from './controllers/PetsController';
import EmployeesController from './controllers/EmployeesController';

const routes = express.Router();
const clientsController = new ClientsController();
const addressController = new AdressController();
const servicesController = new ServicesController();
const usersController = new UsersController();
const petsController = new PetsController();
const employessController = new EmployeesController();


routes.post('/clients', clientsController.create);
routes.post('/address', addressController.create);
routes.post('/services', servicesController.create);
routes.post('/users', usersController.create);
routes.post('/pets', petsController.create);
routes.post('/employees', employessController.create);

routes.get('/employees/:employees_id', employessController.show);
routes.get('/clients/:clients_id', clientsController.show);
routes.get('/clients/', clientsController.show);

export default routes;