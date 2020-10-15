import {Request, Response} from 'express';
import knex from '../database/connection';

class UsersController{
    async show(request:Request, response: Response){
        const {users_id} = request.params;

        const user = await knex('users').where('users_id', users_id);

        if(!user){
            return response.status(400).json({message: 'Não foi possivel encontrar cliente'});
        }

        return response.json({user});
    }
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