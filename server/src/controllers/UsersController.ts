import {Request, Response} from 'express';
import knex from '../database/connection';

class UsersController{
    async create (request: Request, response: Response){
        const {
            users_name,
            users_email,
            users_password,
        } = request.body;
    
        await knex('users').insert({
            users_name,
            users_email,
            users_password,
        });
            
        return response.json({message: 'Cadastro do usuário feito com sucesso!'});
    }
}

export default UsersController;